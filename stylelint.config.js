module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    'color-hex-length': null,
    'number-leading-zero': null,
    'selector-list-comma-newline-after': null,
    'value-keyword-case': null,
    'value-no-vendor-prefix': null,
    'declaration-block-no-duplicate-properties': null,
    'property-no-unknown': null,
    'custom-property-empty-line-before': null,
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'named-grid-areas-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'custom-property-no-missing-var-function': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'block-no-empty': true,
    'declaration-block-no-redundant-longhand-properties': null,
    'selector-type-no-unknown': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'comment-no-empty': true,
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': true,
    'no-duplicate-at-import-rules': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'shorthand-property-no-redundant-values': true,
    'declaration-block-single-line-max-declarations': 1,
    'selector-max-empty-lines': 0,
    'selector-max-universal': 1,
    'no-unknown-animations': true,
    'color-hex-case': 'lower',
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'number-no-trailing-zeros': true,
    'number-max-precision': 6,
    'number-leading-zero': 'never',
    'unit-case': 'lower',
    'property-case': 'lower',
    'value-list-max-empty-lines': 0,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-element-case': 'lower',
    'selector-type-case': 'lower',
    'at-rule-name-case': 'lower',
    'at-rule-semicolon-space-before': 'never',
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'declaration-empty-line-before': 'never',
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': /^[a-z-0-9]+$/,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/at-rule-no-unknown': true,
    'scss/at-import-partial-extension': null,
  },
}
