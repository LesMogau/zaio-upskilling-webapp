/*Get modal by clicing on button

Start   */

var modal = document.getElementById("myModal");

var btn = document.getElementById("modalBtn");

/*End */

/*Increment and decrement
start*/
var addOn = document.getElementById("addOn");
var text = document.getElementById("text");
var unit = document.getElementById("quantity");
var minusOn = document.getElementById("minusOn");

/*End */

var openModal = document.getElementById("agreeBtn");
var cancel = document.getElementById("cancelBtn");

var itemsSelected = document.querySelector(".no-of-items");

btn.onclick = function () {
  modal.style.display = "block";
};

cancel.onclick = function () {
  modal.style.display = "none";
};

openModal.onclick = function () {
  unit.value = text.value;
  modal.style.display = "none   ";
};

addOn.onclick = function () {
  text.value++;
  btn.innerHTML = "Check out now";

  var itemAdd = [];

  for (var i = 0; i < text.value.length; i++) {
    var itemsList = document.createElement("ul");
//need to figure out how to style this color and border
    var items = document.createElement("li");
    //items.classList.add(item);
    items.className = "item";
    items.style.backgroundColor = "red"; //for display color 
    itemsList.appendChild(items);
    itemsSelected.appendChild(itemsList);
  }
};

minusOn.onclick = function () {
  text.value--;

  /* var itemsList = document.getElementsByTagName("ul");
  itemsList.removeChild(itemsList.childNodes[0]);*/
  if (text.value <= 0) {
    text.value = 0;
    btn.innerHTML = "Add to cart";
  }
};

var colorDot = document.querySelectorAll(".color-dot");
var priceColor = document.querySelector(".price-color");
var colorName = document.querySelector(".color-name");
var colorNameModal = document.querySelector(".color-name-modal");

for (var x = 0; x < colorDot.length; x++) {
  colorDot[x].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTextColor(mode);
  });

  function setTextColor(mode) {
    if (mode == "red") {
      priceColor.style.color = "red";
      colorName.innerHTML = "Electric Red";
      colorNameModal.innerHTML = colorName.innerHTML;
    }

    if (mode == "purple") {
      priceColor.style.color = "purple";
      colorName.innerHTML = "Purple Monster";
      colorNameModal.innerHTML = colorName.innerHTML;
    }

    if (mode == "black") {
      priceColor.style.color = "black";
      colorName.innerHTML = "Black Diamond";
      colorNameModal.innerHTML = colorName.innerHTML;
    }

    if (mode == "orange") {
      priceColor.style.color = "orange";
      colorName.innerHTML = "Orange";
      colorNameModal.innerHTML = colorName.innerHTML;
    }

    if (mode == "blue") {
      priceColor.style.color = "blue";
      colorName.innerHTML = "Blue Lagon";
      colorNameModal.innerHTML = colorName.innerHTML;
    }

    if (mode == "green") {
      priceColor.style.color = "green";
      colorName.innerHTML = "Green Bay";
      colorNameModal.innerHTML = colorName.innerHTML;
    }
  }
}


