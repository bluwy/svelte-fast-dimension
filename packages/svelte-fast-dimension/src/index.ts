import MagicString from 'magic-string';
import { parse, walk } from 'svelte/compiler';
// eslint-disable-next-line node/no-missing-import
import type { PreprocessorGroup } from 'svelte/types/compiler/preprocess';

const bindingNames = ['clientWidth', 'clientHeight', 'offsetWidth', 'offsetHeight'];
const bindings = bindingNames.map((n) => 'bind:' + n);

export function fastDimension(): PreprocessorGroup {
	return {
		// @ts-expect-error
		markup({ content, filename }) {
			if (!bindings.some((b) => content.includes(b))) return;

			const s = new MagicString(content);
			const ast = parse(content, { filename });

			const elementToCompiledExpressions = new Map<any, string[]>();

			walk(ast.html, {
				enter(node: any, parent: any) {
					if (node.type === 'Binding' && bindingNames.includes(node.name)) {
						if (!elementToCompiledExpressions.has(parent))
							elementToCompiledExpressions.set(parent, []);

						const expressions = elementToCompiledExpressions.get(parent) as string[];
						const boundVar = s.slice(node.expression.start, node.expression.end);
						expressions.push(`${boundVar} = e.target.${node.name}`);
						s.overwrite(node.start, node.end, '');
					}
				}
			});

			const importText = 'import { resize as ___resize } from "svelte-fast-dimension/action";';
			if (ast.module) {
				// @ts-expect-error
				s.appendLeft(ast.module.content.start, importText);
			} else if (ast.instance) {
				// @ts-expect-error
				s.appendLeft(ast.instance.content.start, importText);
			} else {
				s.append(`<script>${importText}</script>`);
			}

			for (const [element, compiledExpressions] of elementToCompiledExpressions) {
				s.appendLeft(
					element.attributes[0].start,
					`use:___resize on:fd:resize={(e) => { ${compiledExpressions.join('; ')} }} `
				);
			}

			return {
				code: s.toString(),
				map: s.generateMap({ hires: true })
			};
		}
	};
}
