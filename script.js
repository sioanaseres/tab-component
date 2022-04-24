
//url change

const btn = document.querySelector(".footer-CTA");

let url = new URL(btn.href);

// const queryString = document.location.search;
// const urlParams = new URLSearchParams(queryString);
let params = (new URL(document.location)).searchParams;

url.search = params.toString();

console.log(url)
btn.href = url.href;
console.log(btn.href)

//tabs

const tabContainer = document.querySelector(".tabs-container");
const tabs = document.querySelectorAll(".tab");
const tab1 = document.querySelector(".tab-1");
const tab2 = document.querySelector(".tab-2");
const tab3 = document.querySelector(".tab-3");

tabContainer.addEventListener("click", function(e){
  const clicked = e.target.closest(".tab");
 
  //Remove active classes
  tabs.forEach(t => t.classList.remove("selected"));
 tab1.classList.remove("active");
 tab2.classList.remove("active");
 tab3.classList.remove("active");

  //Active tab
   clicked.classList.add("selected");

  //Activate content area
  document.querySelector(`.tab-${clicked.dataset.tab}`).classList.add("active");


})

