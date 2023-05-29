const outterdiv = document.querySelector(".product")
// stringify
const productInfor = JSON.parse(localStorage.getItem("productInfo"));


// for-each loop
// obj = {src,}

for(let i = 0; i < productInfor.length; i++){
  const obj = productInfor[i];
  const div = document.createElement("div");
  div.className = "card";
  div.classList.add("card-div");
  
  const img = document.createElement("img");
  img.src= obj.source;
  img.style.width="200px";


  const h1= document.createElement("h1");
  h1.textContent = obj.h1Content;

  const p= document.createElement("P");
  p.textContent= obj.pContent;
  
  const p1= document.createElement("p1");
  p1.textContent = obj.p1Content;
  p1.className="price"
  div.appendChild(img);
  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(p1);
  outterdiv.appendChild(div);
}