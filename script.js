
//url change

const btn = document.querySelector(".footer-CTA");

let url = new URL(btn.href);

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString).toString();
console.log(urlParams)

btn.href = `${url}?${urlParams}`
// url.search = urlParams.toString();

// btn.href = url.toString();
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

