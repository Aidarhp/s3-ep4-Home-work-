fetch('https://fakestoreapi.com/products?limit=2')
.then((res) => res.json())
.then((res) => console.log(res))
.catch((err) => console.log(err))