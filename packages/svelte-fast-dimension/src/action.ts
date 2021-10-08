let ro: ResizeObserver;

export function resize(node: HTMLElement) {
	if (!ro) {
		ro = new ResizeObserver((entries) => {
			for (const entry of entries) {
				entry.target.dispatchEvent(new CustomEvent('fd:resize'));
			}
		});
	}

	ro.observe(node);

	return {
		destroy() {
			ro.unobserve(node);
		}
	};
}
