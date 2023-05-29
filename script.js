const buttons = document.querySelectorAll(".btn");
console.log(buttons); // card1, card2, card3
for(let i=0; i<buttons.length; i++){
  // click -> add to cart
  buttons[i].addEventListener("click",(e) => addToCart(e, i)) ;
}
function addToCart(e,id){
  console.log(e.target.parentNode); // card
  let source = e.target.parentNode.querySelector("img").src;
  let h1Content = e.target.parentNode.querySelector("h1").textContent;
  let pContent = e.target.parentNode.querySelector("P").textContent;
  let p1Content = e.target.parentNode.querySelector(".price").textContent;
  // const img = document.createElement("img");
  // img.src= source;
  // console.log(img);

  const obj={
    id,
    source,
    h1Content,
    pContent,
    p1Content,
    
  }

  // JSON: javascript object notation
  // obj
  // let
  // const
  // var

  let pdInfo;
  if(localStorage.getItem("productInfo") === null){
    pdInfo=[];
  }
  else{
    pdInfo= JSON.parse(localStorage.getItem("productInfo")) // 1 product
  }

  // obj1
  // pdInfo = [obj1, obj2, ]
  let isPresent = false;
  for(let i =0; i<pdInfo.length; i++){
    const newObj = pdInfo[i];
    if(newObj.id === obj.id){
      isPresent= true;
      break;
    }
  }

  if(isPresent === false){
    pdInfo.push(obj);
  }

  
  localStorage.setItem("productInfo", JSON.stringify(pdInfo))
  
  // productinfo :

  // key : value
  // debug : honey
  // 

  // info = [obj]
  
  
  

  // img
  // h1
  // p
  // p
  // btn
  
  
}
