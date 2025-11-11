const image=document.createElement("img");
image.src="https://m.media-amazon.com/images/I/31WIiECCtxL._UF1000,1000_QL80_.jpg";
image.width=200;
image.height=200;
image.alt="Book Image";
const h3=document.createElement("h3");
h3.innerText="Title : Physics"
const h4=document.createElement("h4");
h4.innerText="Price: ₹340/-";
const btn=document.createElement("button");
btn.innerText="Add to Cart";
const child=document.createElement("div");
child.className="card";
child.appendChild(image);
child.appendChild(h3);
child.appendChild(h4);
child.appendChild(btn);

const parent= document.getElementById('root');
parent.appendChild(child);