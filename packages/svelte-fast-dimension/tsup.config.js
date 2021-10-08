/** @type {import("tsup").Options} */
export const tsup = {
	entryPoints: ['src/index.ts', 'src/action.ts'],
	format: ['esm', 'cjs'],
	splitting: false,
	clean: true
};
