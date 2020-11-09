const clearBtn = document.querySelector(".clear-tasks");

const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// Click
clearBtn.addEventListener("click", runEvent);
// DoubleBlick
clearBtn.addEventListener("dbclick", runEvent);

// Clear form

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
}
