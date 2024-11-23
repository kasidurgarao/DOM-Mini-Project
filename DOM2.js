const btnMoveRight = document.getElementById("moveRight");
const btnMoveLeft = document.getElementById("moveLeft");
const btnMoveAllRight = document.getElementById("moveAllRight");
const btnMoveAllLeft = document.getElementById("moveAllLeft");
const leftCont = document.querySelector(".left");
const rightCont = document.querySelector(".right");
console.log(rightCont.children.length);

btnMoveRight.addEventListener("click", () => moveSelected(leftCont, rightCont));
btnMoveLeft.addEventListener("click", () => moveSelected(rightCont, leftCont));
btnMoveAllRight.addEventListener("click", () => moveAll(leftCont, rightCont));
btnMoveAllLeft.addEventListener("click", () => moveAll(rightCont, leftCont));

function moveAll(from, to) {
  // Array.from(from.children).forEach(item => to.appendChild(item));
  // console.log(Array.from(from.children))
  Array.from(from.children).forEach((item) => {
    const chk = item.querySelector("input[type='checkbox']");
    if (chk && chk.checked) {
      chk.checked = false;
    }
    to.appendChild(item);
    let rightdisable = from.getAttribute("class");
    console.log(rightdisable);
    if (rightdisable === "left") {
      btnMoveAllRight.disabled = true;
      btnMoveRight.disabled = true;
    } else {
      btnMoveAllRight.disabled = false;
      btnMoveRight.disabled = true;

    }

    let leftdisable = from.getAttribute("class");
    if (leftdisable === "right") {
      btnMoveAllLeft.disabled = true;
      btnMoveLeft.disabled = true;
    } else {
      btnMoveAllLeft.disabled = false;
      btnMoveLeft.disabled = true;
    }
  });
}

function moveSelected(from, to) {
  Array.from(from.children).forEach((item) => {
    const chk = item.querySelector("input[type='checkbox']");
    if (chk && chk.checked) {
      chk.checked = false;
      to.appendChild(item);
      btnMoveRight.disabled = true;
      btnMoveLeft.disabled = true;
    }
  });
}

function updateBtns() {
  const leftHasSelected =
    Array.from(leftCont.querySelectorAll("input[type='checkbox']:checked"))
      .length > 0;
  const rightHasSelected =
    Array.from(rightCont.querySelectorAll("input[type='checkbox']:checked"))
      .length > 0;

  btnMoveRight.disabled = !leftHasSelected;
  btnMoveLeft.disabled = !rightHasSelected;
  // btnMoveAllLeft.disabled = false;
  // btnMoveAllRight.disabled = false;
}
updateBtns();
[leftCont, rightCont].forEach((cont) =>
  cont.addEventListener("change", updateBtns)
);
