#!/bin/sh
# External formatter for Zed: runs `stylelint --fix` on the buffer.
# Writes stdin to a temp file inside the repo (so stylelint.config.js
# resolves normally), fixes it in place, then prints the result.
# Falls back to the original content if stylelint fails outright.

dir="$(cd "$(dirname "$0")/.." && pwd)"
tmp="$dir/.stylelint-fix.$$.scss"

cat > "$tmp"
"$dir/node_modules/.bin/stylelint" --fix "$tmp" >/dev/null 2>&1
cat "$tmp"
rm -f "$tmp"
