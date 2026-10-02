axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function(response) {
    const posts = response.data;      // 100 постов
    const first10 = posts.slice(0, 10);  // первые 10
    const container = document.querySelector('.posts-list');
    let html = '';

    first10.forEach(function(post) {
      html += `
        <div class="post-card">
          <h3><span class="post-id">#${post.id}</span>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
    });

    container.innerHTML = html;

    document.querySelector('.info').innerText =
      `Показано ${first10.length} из ${posts.length}`;
  })
  .catch(function(error) {
    console.log('Ошибка:', error);
  });
