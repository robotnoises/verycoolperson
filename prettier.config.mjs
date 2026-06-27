/** @type {import('prettier').Config} */
export default {
	printWidth: 200,
	useTabs: true,
	bracketSameLine: true,
	singleAttributePerLine: false,
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
