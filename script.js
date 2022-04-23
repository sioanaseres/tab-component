//tabs

const tabContainer = document.querySelector(".tabs-container");
const tabs = document.querySelectorAll(".tab");
const tab1 = document.querySelector(".tab-1");
const tab2 = document.querySelector(".tab-2");
const tab3 = document.querySelector(".tab-3");

tabContainer.addEventListener("click", function(e){
  const clicked = e.target.closest(".tab");
  console.log(clicked);

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
//url

// const btn = document.querySelector(".footer-CTA");

// let url = new URL(btn.href);
// let params = new URLSearchParams;

// params.append('test1', 4);
// params.append('test2', 5);
// url.search = params.toString();

// btn.href = url.toString();


// console.log(btn.href);
// console.log(btn.href);

// // let url = new URL('https://example.com?foo=1&bar=2');


//    //api
//    let data = {
//   title: "foo",
//   body: "bar", 
//   userId:1234
// }

// fetch('https://statistics.postclickinternal.com/api/fetest', {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {"Content-type": "application/json; charset=UTF-8"}
// })
// .then(response => response.json()) 
// .then(json => console.log(json))
// .catch(err => console.log(err));

// // Example POST method implementation:
// async function postData(url = '', data = {}) {

//   const response = await fetch(url, {
//     method: 'POST', 
//     headers: {
//       'Content-Type': 'application/json'
    
//     },

//     body: JSON.stringify(data) 
//   });
//   return response.json(); 
// }

// postData('https://reqres.in/api/products/3', { answer: 42 })
//   .then(data => {
//     console.log(data); 
//   });
