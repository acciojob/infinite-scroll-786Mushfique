//your code here!
const list = document.getElementById("infi-list");
const container = document.querySelector("main");

let itemCount = 10;

container.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = container;

  // Check if user reached the bottom
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    addItems(2);
  }
});

function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `item ${itemCount}`;
    list.appendChild(li);
  }
}

