#!/usr/bin/env python3
"""Lean BEM syntax linter.

Checks HTML/JSX class attributes and CSS/SCSS class selectors for the
*mechanical* Lean BEM naming rules. It catches the violations that come from
classic-BEM muscle memory and from accidental element hierarchies:

  - `block__element`  (classic double-underscore element)  -> single `_`
  - `block--modifier` (classic double-hyphen modifier)      -> standalone `-modifier`
  - `block_el_sub`    (element hierarchy, 2+ underscores)   -> flatten to one level

It does NOT judge naming *meaning* (purpose vs appearance), modifiers used
without a base class, or descendant-vs-combined modifier selectors. Those need
human judgment, so review them separately after running this.

Usage:
    python3 lint_lean_bem.py file1.html file2.css [...]

Exit code is 0 when clean, 1 when any violation is found.
"""

import re
import sys

# Class tokens inside class="..." / className="..." / className={'...'}.
ATTR_RE = re.compile(r"""class(?:Name)?\s*=\s*["'{]([^"'}]+)["'}]""")
# Class selectors in CSS/SCSS: a dot, an optional single leading hyphen,
# then a letter/underscore, then word chars and hyphens. Avoids matching
# numeric fragments like `.5rem` and custom properties like `--color`.
CSS_RE = re.compile(r"\.(-?[A-Za-z_][\w-]*)")

CSS_EXT = (".css", ".scss", ".sass", ".less")


def classify(token):
    """Return a list of (problem, suggestion) for one class token, or []."""
    problems = []
    if "__" in token:
        problems.append((
            "classic BEM element separator '__'",
            "use a single underscore: " + token.replace("__", "_"),
        ))
    elif token.count("_") >= 2:
        problems.append((
            "element hierarchy (2+ underscores)",
            "Lean BEM elements are one level (block_element); flatten it",
        ))
    if "--" in token:
        problems.append((
            "classic BEM modifier '--'",
            "make it a standalone class: -" + token.split("--", 1)[1],
        ))
    return problems


def tokens_from_line(line, is_css):
    """Yield class tokens found on a line."""
    if is_css:
        for m in CSS_RE.finditer(line):
            yield m.group(1)
    else:
        for attr in ATTR_RE.finditer(line):
            for tok in attr.group(1).split():
                yield tok


def lint_file(path):
    findings = []
    is_css = path.lower().endswith(CSS_EXT)
    try:
        with open(path, "r", encoding="utf-8", errors="replace") as f:
            lines = f.readlines()
    except OSError as e:
        print("could not read {}: {}".format(path, e), file=sys.stderr)
        return findings
    for n, line in enumerate(lines, 1):
        seen = set()
        for tok in tokens_from_line(line, is_css):
            if tok in seen:
                continue
            seen.add(tok)
            for problem, suggestion in classify(tok):
                findings.append((n, tok, problem, suggestion))
    return findings


def main(argv):
    paths = argv[1:]
    if not paths:
        print(__doc__)
        return 2
    total = 0
    for path in paths:
        findings = lint_file(path)
        if not findings:
            print("OK  {}  (no Lean BEM syntax violations)".format(path))
            continue
        print("\n{}  ({} issue{})".format(
            path, len(findings), "" if len(findings) == 1 else "s"))
        for n, tok, problem, suggestion in findings:
            print("  line {}: .{}".format(n, tok))
            print("    {} -> {}".format(problem, suggestion))
        total += len(findings)
    if total:
        print("\n{} violation{} found.".format(
            total, "" if total == 1 else "s"))
        print("Reminder: also check naming meaning, lone modifiers, and "
              "descendant modifier selectors by hand.")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
