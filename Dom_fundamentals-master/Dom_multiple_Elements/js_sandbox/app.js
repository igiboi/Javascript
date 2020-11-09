//document.getElementsByClassName

// const items = document.getElementsByClassName("collection-item");
// console.log(items[1]);
// items[3].textContent = "Luigi";
// items[2].style.color = "purple";

//document.getElementsByTagName
// const lis = document.getElementsByTagName("li");
// console.log(lis);
// lis[3].textContent = "Luigi";
// lis[2].style.color = "Red";

//Convert HTML collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function (li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

//document.querySelectorAll
const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach(function (item, index) {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");

const liEven = document.querySelectorAll("li:nth-child(even)");

// liOdd.forEach(function (li, index) {
//   li.style.background = "#ccc";
// });

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "purple";
}

for (let i = 0; i < liOdd.length; i++) {
  liOdd[i].style.background = "yellow";
}

console.log(items);
