const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("list-item");

  list.append(item);

  input.value = "";

  item.addEventListener("click", (e) => {
    list.removeChild(item);
  });
});

const modal = document.querySelector("#modal");
const openModalButton = document.querySelector("#open-modal-btn");
const closeModalButton = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

openModalButton.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

closeModalButton.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("open");
  overlay.classList.remove("open");
}
