(async function () {
  const listEl = document.getElementById('post-list');
  try {
    const posts = await fetch('posts/index.json').then(r => r.json());
    listEl.innerHTML = posts.map(p => `
      <article class="post-card">
        <a href="post.html?slug=${encodeURIComponent(p.slug)}">
          <h3>${p.title}</h3>
          <time>${p.date}</time>
          <p>${p.summary}</p>
        </a>
      </article>
    `).join('');
  } catch (e) {
    listEl.innerHTML = '<p>Could not load posts.</p>';
  }
})();
