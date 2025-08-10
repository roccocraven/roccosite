(async function () {
  const slug = new URLSearchParams(location.search).get('slug');
  const contentEl = document.getElementById('post-content');
  const titleEl = document.getElementById('post-title');
  const dateEl = document.getElementById('post-date');

  if (!slug) {
    contentEl.textContent = 'No post specified.';
    return;
  }

  try {
    const posts = await fetch('posts/index.json').then(r => r.json());
    const meta = posts.find(p => p.slug === slug);
    if (meta) {
      titleEl.textContent = meta.title;
      dateEl.textContent = meta.date;
      document.title = `${meta.title} — Rocco Craven`;
    }

    const md = await fetch(`posts/${slug}.md`).then(r => {
      if (!r.ok) throw new Error('Post not found');
      return r.text();
    });

    // Tiny Markdown renderer: minimal subset
    const html = md
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/`([^`]+)`/gim, '<code>$1</code>')
      .replace(/\n\* (.*)/gim, '<ul><li>$1</li></ul>')
      .replace(/\n\n/g, '<br><br>');

    contentEl.innerHTML = html;
  } catch (e) {
    contentEl.textContent = 'Could not load this post.';
  }
})();
