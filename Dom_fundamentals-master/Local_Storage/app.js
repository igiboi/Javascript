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

// set local storage item, data also stays even if browser closes
// localStorage.setItem("name", "John");

// set session storage item, data dissapear when the browser closes
// sessionStorage.setItem("name", "Luigi");

// remove from from storgae
//localStorage.removeItem('name');

// get from local storage
// const name = localStorage.getItem("name");
// console.log(name);

document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;

  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task saved");

  e.preventDefault();
});

// pulling the data from local storage
const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach((task) => {
  console.log(task);
});
