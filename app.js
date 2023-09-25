let smallmugs = document.querySelector("#smallGlass");
let fillWater = (count) => {
  let bdaglass = document.getElementById("leftwater");
  let height = 38.8 - 4.85 * count;
  let value = `${height}vh`;
  console.log(bdaglass);
  console.log(height);
  bdaglass.style.height = value;
  bdaglass.style.borderRadius = "0px 0px 0px 0px";
  document.getElementById("water").style.lineHeight = `${5 * count}vh`;
  let remainwater = bdaglass.querySelector("h1");
  if (count === 8) {
    bdaglass.innerHTML = "";
  } else {
    bdaglass.innerHTML = `<h1>${2 - 0.25 * count}L</h1>
    <p>Remained</p>`;
  }
  let waterRef = document.querySelector("#water");
  waterRef.innerText = `${12.5 * count}` + "%";
};
let glassRef = document.querySelectorAll(".glass");
for (const iterator of glassRef) {
    iterator.addEventListener("click", (obj)=>{
        // obj.preventDefault();
        if(obj.target.nodeName === "DIV"){
         console.log(obj);
         
         let count = 0,
           count1 = 0;
         for (const iterator of glassRef) {
           if (count1 == 0) {
             iterator.style.backgroundColor = "rgb(60, 86, 252)";
             count++;
           } else {
             iterator.style.backgroundColor = "white";
             count1++;
           }
           if (iterator === obj.target) {
             count1 = 1;
           }
         }
         console.log(count);
         fillWater(count);
        }
        
     });
     
}
