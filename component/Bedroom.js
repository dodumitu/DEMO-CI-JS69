export default class Bedroom {
  $container
  $productContainer;
  $img;
  $btn;

  constructor(img, name, price) {
    this.$productContainer = document.createElement("div");
    this.$productContainer.setAttribute(
      "class",
      " flex-1 box-content pb-3 px-1 pt-1 m-2 hover:shadow-lg focus:cursor-pointer duration-300 ease-in border border-solid text-center"
    );

    this.$img = document.createElement("img");
    this.$img.src = img;
    this.$img.setAttribute("class", "w-64 h-64 object-cover hover:scale-110 duration-300");

    this.price = document.createElement("p");
    this.price.textContent = price;
    this.price.setAttribute("class", "text-red-600 font-bold");

    this.name = document.createElement("p");
    this.name.textContent = name;
    this.name.setAttribute("class", " font-normal mt-1 text-xl");

    this.$btn = document.createElement("button");
    this.$btn.type = "submit";
    this.$btn.textContent = "Mua hàng";
    this.$btn.setAttribute(
      "class",
      "bg-red-700 hover:shadow-lg text-white font-bold mt-5 py-1 px-3 rounded"
    );
  }
  render() {
    this.$productContainer.appendChild(this.$img);
    this.$productContainer.appendChild(this.name);
    this.$productContainer.appendChild(this.price);
    this.$productContainer.appendChild(this.$btn);
    
    document.getElementById('container').appendChild(this.$productContainer)

    return this.$productContainer;
  }
}



