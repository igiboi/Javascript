// document.querySelector(".clear-tasks").addEventListener("click", function(){
//   console.log("Hello World");
// });

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  console.log(val);
}
