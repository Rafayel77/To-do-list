let input = document.querySelector(".input");
let addButton = document.querySelector(".addButton");
let container = document.querySelector(".container");

let inputArray = [];

addButton.addEventListener("click", () => {
  if (input.value) {
    inputArray.push({ value: input.value, id: container.children.length });
    render();
  }
});
let key = 0;
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && input.value) {
    inputArray.push({ value: input.value, id: key });
    key++;
    render();
  }
});

function render() {
  container.innerHTML = "";
  input.value = "";

  inputArray.forEach((obj) => {
    let itemContainer = document.createElement("div");
    itemContainer.className = "item-container";
    let divList = document.createElement("div");
    divList.className = "divList";
    divList.innerHTML = obj.value;

    let saveButton = document.createElement("button");
    saveButton.className = "saveButton";
    saveButton.innerText = "Save";
    saveButton.addEventListener("click", () => {
      console.log(idd, "save");
      inputArray = inputArray.map((el) => {
        if (el.id == idd && input.value) {
          console.log(el.id, idd);

          divList.innerHTML = input.value;
          el.value = input.value;
          input.value = "";
        }
        return el;
      });
    });

    let editButton = document.createElement("img");
    editButton.src = "./icons8-edit-40.png";
    let idd;

    editButton.addEventListener("click", () => {
      idd = obj.id;
      console.log(idd, "edit");
      input.value = divList.innerHTML;
    });

    let imgButton = document.createElement("img");
    imgButton.src = "./icons8-recycle-bin-48.png";
    imgButton.addEventListener("click", () => {
      inputArray = inputArray.filter((object) => {
        return object.id !== obj.id;
      });
      render();
    });

    itemContainer.append(divList, imgButton, editButton, saveButton);

    container.prepend(itemContainer);
  });
}
