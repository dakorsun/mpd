import path from 'path'

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`

const config = {
	// Run ESLint on JS/TS files
	'*.{js,jsx,ts,tsx}': [buildEslintCommand],

	// Run Prettier on other file types
	'*.{json,md,html,css,scss,yml,yaml}': ['prettier --write'],
}
export default config;
