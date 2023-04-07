import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { preprocess } from 'svelte/compiler';
import { fastDimension } from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const p = (...rest) => path.resolve(__dirname, ...rest);

test('Snapshot test', async () => {
	const input = await fs.readFile(p('./Input.svelte'), { encoding: 'utf-8' });
	const processed = await preprocess(input, [fastDimension()], { filename: 'Input.svelte' });

	if (process.argv.slice(2).includes('-u')) {
		await fs.writeFile(p('./Output.svelte'), processed.code);
	} else {
		const output = await fs.readFile(p('./Output.svelte'), {
			encoding: 'utf-8'
		});
		assert.fixture(
			processed.code,
			output,
			'`Output.svelte` does not match, is it updated with `pnpm test:update`?'
		);
	}
});

test.run();
