var instruments = [
 
  {
    name: "Saxaphone",
    type: "Wind Instrument",
    price: "$2000",
    brand: "Yamaha",
    image: "https://images.squarespace-cdn.com/content/v1/5197dbafe4b00822eb85eef3/1383945129907-2FY8PUP9GR29N4LC034J/ke17ZwdGBToddI8pDm48kGjwbPvRZgQM-ib3p-gkJWl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTGUdxiOxtsD8c6slvX3kcZWHgcAyYSXpqmAcNEL8fWHvMzDmmGw1IAyXYYMGnuTEQ/Saxophone.jpg?format=2500w"
  },
 
  {
    name: "Piano",
    type: "String Instrument",
    price: "$10,000",
    brand: "Yamaha",
    image:
      "https://pianopiano.com/wp-content/uploads/2015/08/Screen-Shot-2019-12-10-at-2.39.05-PM.png"
  },
 
  {
    name: "Clarinet",
    type: "Wind Instrument",
    price: "$1500",
    brand: "Fender",
    image:
      "https://www.themusicshop.com/images/product/medium/ae00-22358.jpg"
  },
  
  {
    name: "Tuba",
    type: "Brass Instrument",
    price: "$1050",
    brand: "Fender",
    image:
      "https://cdn.jpmusicalinstruments.com/uploads/var/14_36_s.png?v=1513939021"
  },

  {
    name: "mayonnaise",
    type: "condiment",
    price: "$5",
    brand: "Maton",
    image: "https://images-na.ssl-images-amazon.com/images/I/81MoLlbTRBL._SL1500_.jpg"
  },
  {
    name: "Guitar",
    type: "String Instrument",
    price: "$500",
    brand: "Maton",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png"
  }
];

function store() {
  var that = this;
  this.storeInstruments = [];
  this.cart = [];
  this.cartItems = 0;

  this.addInstrumentEle = document.createElement("button");
  this.inputPopUpEle = document.createElement("div");
  this.inputNameEle = document.createElement("input");
  this.selectBrandEle = document.createElement("select");
  this.option1Ele = document.createElement("option");
  this.option2Ele = document.createElement("option");
  this.option3Ele = document.createElement("option");
  this.inputTypeEle = document.createElement("input");
  this.submitInstrumentEle = document.createElement("button");


  this.cartItemsEle = document.createElement("h3");
  this.popUpEle = document.createElement("div");

  this.addInstrumentEle.innerHTML = "Add Instrument";
  this.option1Ele.innerHTML = "Fender";
  this.option2Ele.innerHTML = "Yamaha";
  this.option3Ele.innerHTML = "Maton";
  this.submitInstrumentEle.innerHTML = "Submit";


  this.cartItemsEle.innerHTML = "Cart: " + this.cartItems;

  
  this.addInstrumentEle.style.position = "absolute";
  this.addInstrumentEle.style.top = "5px";
  this.addInstrumentEle.style.left = "5px";
  this.inputNameEle.style.margin = "5px";
  this.selectBrandEle.style.margin = "5px";
  this.inputTypeEle.style.margin = "5px";
  this.submitInstrumentEle.style.margin = "5px";

 
  this.cartItemsEle.style.position = "absolute";
  this.cartItemsEle.style.top = "5px";
  this.cartItemsEle.style.right = "5px";
  this.inputPopUpEle.setAttribute("class", "inputPopUp");
  this.inputNameEle.setAttribute("placeholder", "Enter Instrument Name");
  this.inputTypeEle.setAttribute("placeholder", "Enter Instrument Type");
  this.popUpEle.setAttribute("class", "popUp");
  this.addInstrumentEle.addEventListener("click", function () {
    that.inputPopUpEle.style.visibility = "visible";
  });
  this.submitInstrumentEle.addEventListener("click", function () {
    instruments.push({
      name: that.inputNameEle.value,
      type: that.inputTypeEle.value,
      price: "$500",
      brand: that.selectBrandEle.value,
      image: ""
    });

    this.index = instruments.length - 1;
    that.storeInstruments.push(new instrument(instruments[this.index], that));
    that.inputPopUpEle.style.visibility = "hidden";
    that.inputNameEle.value = "";
    that.inputTypeEle.value = "";
  });

  this.cartItemsEle.addEventListener("click", function () {
    instruments.push(that.cart);
    console.log(instruments);
    that.renderInstruments(that.cart);
    that.cart = [];
    that.cartItems = 0;
    that.cartItemsEle.innerHTML = "Cart: " + that.cartItems;
  });

  this.renderInstruments(instruments);

  this.inputPopUpEle.appendChild(this.inputNameEle);
  this.selectBrandEle.appendChild(this.option1Ele);
  this.selectBrandEle.appendChild(this.option2Ele);
  this.selectBrandEle.appendChild(this.option3Ele);
  this.inputPopUpEle.appendChild(this.selectBrandEle);
  this.inputPopUpEle.appendChild(this.inputTypeEle);
  this.inputPopUpEle.appendChild(this.submitInstrumentEle);
  document.body.appendChild(this.inputPopUpEle);
  document.body.appendChild(this.addInstrumentEle);
  document.body.appendChild(this.popUpEle);
  document.body.appendChild(this.cartItemsEle);
}

store.prototype.renderInstruments = function (itemList) {
  var that = this;
  for (var i = 0; i < itemList.length; i++) {
    that.storeInstruments.push(new instrument(itemList[i], that));
  }
};

function instrument(item, parent) {
  var that = this;
  this.image = item.image;
  this.name = item.name;
  this.type = item.type;
  this.price = item.price;
  this.brand = item.brand;

  this.instrumentEle = document.createElement("div");
  this.imageEle = document.createElement("img");
  this.nameEle = document.createElement("div");
  this.typeEle = document.createElement("div");
  this.priceEle = document.createElement("div");
  this.brandEle = document.createElement("div");
  this.emptyEle = document.createElement("div");
  this.noImageEle = document.createElement("div");
  this.popUpEle = parent.popUpEle;

  this.cartButtonEle = document.createElement("button");
  this.cartButtonEle.innerHTML = "Add to Cart";
  this.cartButtonEle.style.margin = "5px";

  this.instrumentEle.setAttribute("class", "instrument");
  this.instrumentEle.style.display = "inherit";

  if (this.image == "") {
    this.noImageEle.innerHTML = "no-image";
  } else {
    this.imageEle.src = this.image;
  }
  this.nameEle.innerHTML = this.name;
  this.typeEle.innerHTML = this.type;
  this.priceEle.innerHTML = this.price;
  this.brandEle.innerHTML = this.brand;

  this.cartButtonEle.addEventListener("click", function () {
    that.instrumentEle.style.display = "none";
    parent.popUpEle.innerHTML = "This instrument was added to the cart:";
    this.index = instruments.indexOf(item);
    parent.storeInstruments.splice(this.index, 1);
    parent.cart.push(instruments.splice(this.index, 1));
    console.log(parent.cart);
    parent.cartItems = parent.cartItems + 1;
    parent.cartItemsEle.innerHTML = "Cart: " + parent.cartItems;
    if (instruments.length < 1) {
      that.emptyEle.innerHTML = "Store is empty";
      that.emptyEle.style.position = "absolute";
      that.emptyEle.style.top = "50%";
      that.emptyEle.style.left = "50%";
      document.body.appendChild(that.emptyEle);
    }
  });
 
  this.instrumentEle.addEventListener("mouseover", function () {
    if (that.brand == "Yamaha") {
      that.instrumentEle.style.backgroundColor = "green";
      that.instrumentEle.style.color = "white";
    } else if (that.brand == "Fender") {
      that.instrumentEle.style.backgroundColor = "maroon";
      that.instrumentEle.style.color = "white";
    } else if (that.brand == "Maton") {
      that.instrumentEle.style.backgroundColor = "navy";
      that.instrumentEle.style.color = "white";
    }
  });
  this.instrumentEle.addEventListener("mouseout", function () {
    that.instrumentEle.style.backgroundColor = "white";
    that.instrumentEle.style.color = "black";
  });
  this.instrumentEle.addEventListener("click", function () {
    parent.popUpEle.style.visibility = "visible";
    if (that.image == "") {
      parent.popUpEle.appendChild(that.noImageEle);
    } else {
      parent.popUpEle.appendChild(that.imageEle);
    }
    parent.popUpEle.appendChild(that.nameEle);
    parent.popUpEle.appendChild(that.typeEle);
    parent.popUpEle.appendChild(that.priceEle);
    parent.popUpEle.appendChild(that.brandEle);
    parent.popUpEle.appendChild(that.cartButtonEle);
  });
  this.popUpEle.addEventListener("click", function () {
    parent.popUpEle.style.visibility = "hidden";
    parent.popUpEle.innerHTML = "";
    if (that.image == "") {
      that.instrumentEle.appendChild(that.noImageEle);
    } else {
      that.instrumentEle.appendChild(that.imageEle);
    }
    that.instrumentEle.appendChild(that.nameEle);
    that.instrumentEle.appendChild(that.cartButtonEle);
    that.instrumentEle.style.backgroundColor = "white";
    that.instrumentEle.style.color = "black";
  });

  if (this.image == "") {
    this.instrumentEle.appendChild(this.noImageEle);
  } else {
    this.instrumentEle.appendChild(this.imageEle);
  }
  this.instrumentEle.appendChild(this.nameEle);
  this.instrumentEle.appendChild(this.cartButtonEle);
  document.body.appendChild(this.instrumentEle);
}

var store1 = new store();