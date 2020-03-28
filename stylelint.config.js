module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
    'stylelint-config-recess-order'
  ],
  rules: {
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [
          'border-top-radius',
          'border-bottom-radius',
          'border-left-radius',
          'border-right-radius'
        ]
      }
    ],
    'at-rule-no-unknown': [true, { ignoreAtRules: ['define-mixin', 'mixin'] }],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignoreAtRules: [
          'array',
          'of',
          'at-rules',
          'import',
          'include',
          'custom-media'
        ]
      }
    ]
  }
}
