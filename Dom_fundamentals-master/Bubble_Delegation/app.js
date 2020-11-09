// Event Bubbling

// document.querySelector(".card-title").addEventListener("click", function () {
//   console.log("card title");
// });

// document.querySelector(".card-content").addEventListener("click", function () {
//   console.log("card content");
// });

// document.querySelector(".card-content").addEventListener("click", function () {
//   console.log("card content");
// });

// document.querySelector(".card").addEventListener("click", function () {
//   console.log("card");
// });

// document.querySelector(".col").addEventListener("click", function () {
//   console.log("col");
// });

// this only works on the first list item and this where event delegation is needed
// const delItem = document.querySelector(".delete-item");

// delItem.addEventListener("click", deleteItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  // This method is not good since you have to get every single class name inside of the element
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  // This method will get anything that contains a class name inside the element
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }
}
