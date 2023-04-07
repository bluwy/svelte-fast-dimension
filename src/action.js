/** @type {ResizeObserver} */
let ro

/**
 * @param {HTMLElement} node
 */
export function resize(node) {
  if (!ro) {
    ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.dispatchEvent(new CustomEvent('fd:resize'))
      }
    })
  }

  ro.observe(node)

  return {
    destroy() {
      ro.unobserve(node)
    }
  }
}
