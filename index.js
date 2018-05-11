const token = '17b2ac237aea2d5c54f760def2853bebc99c7d5b'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
