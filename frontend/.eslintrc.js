module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['standard', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'eslint-config-prettier'],
	settings: {
		react: {
			version: 'detect'
		}
	},
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'react/prop-types': 'off',
		'dot-notation': 'off'
	}
}
