const username = 'ashishvirgo'

const res = fetch(`https://api.github.com/users/${username}`);
res.then((res) => {
  res.json();
  console.log(res);
})
.catch((err) => console.log('Error :', err.message));
