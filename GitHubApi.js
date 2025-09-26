// const username = 'ashishvirgo'

const res = fetch(`https://dummyjson.com/users
  /limit=9`);
res.then((res) => {
  res.json();
  console.log(res);
})
.catch((err) => console.log('Error :', err.message));
