// Dispose timers and media when a screen or interaction is replaced.
export function manage(node, cleanup) {
  const previous = node._cleanup;
  node.dataset.managed = '';
  node._cleanup = () => { previous?.(); cleanup(); };
}

export function dispose(root) {
  for (const node of [root, ...root.querySelectorAll('[data-managed]')]) {
    const cleanup = node._cleanup;
    node._cleanup = null;
    delete node.dataset.managed;
    cleanup?.();
  }
}
