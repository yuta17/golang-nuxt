fetch('/newsfeed', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({
      title: 'Hello',
      post: 'World'
  })
});
