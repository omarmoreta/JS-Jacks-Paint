// When the user hovers over an image with the mouse, display the paint color name.
// When the user hovers over an image with the mouse, display the price of the paint.
// When the user hovers over an image with the mouse, reduce the opacity of the image.
function getImages() {
  let images = document.getElementsByTagName("img");

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", addOpacity);
    images[i].addEventListener("mouseout", removeOpacity);
  }
}

function addOpacity(event) {
  if (!this.classList.contains("dim")) {
    this.classList.add("dim");
  }
  getColor(event.target.id);
}

function removeOpacity() {
  if (this.classList.contains("dim")) {
    this.classList.remove("dim");
  }
  let newPrice = document.getElementById("newPrice");
  newPrice.textContent = "";

  let newColor = document.getElementById("newColor");
  newColor.textContent = "";
}

function getColor(shadeColor) {
  let price;
  let colorName;

  switch (shadeColor) {
    case "lime":
      price = "$19.99";
      colorName = "Lime Green";
      updatePrice(colorName, price);
      break;
    case "brown":
      price = "$12.99";
      colorName = "Medium Brown";
      updatePrice(colorName, price);
      break;
    case "blue":
      price = "$11.99";
      colorName = "Royal Blue";
      updatePrice(colorName, price);
      break;
    case "red":
      price = "$14.99";
      colorName = "Bright Red";
      updatePrice(colorName, price);
      break;
    case "white":
      price = "$9.99";
      colorName = "Solid White";
      updatePrice(colorName, price);
      break;
    case "black":
      price = "$15.99";
      colorName = "Solid Black";
      updatePrice(colorName, price);
      break;
    case "cyan":
      price = "$8.99";
      colorName = "Medium Blue";
      updatePrice(colorName, price);
      break;
    case "purple":
      price = "$16.99";
      colorName = "Light Purple";
      updatePrice(colorName, price);
      break;
    case "yellow":
      price = "$17.99";
      colorName = "Bright Yellow";
      updatePrice(colorName, price);
      break;
    default:
  }

  function updatePrice(colorName, price) {
    let newPrice = document.getElementById("newPrice");
    newPrice.textContent = price;

    let newColor = document.getElementById("newColor");
    newColor.textContent = colorName;
  }
}
