// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll(name,states) {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons(name,states)
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
    let $cheese=document.getElementById("cheese");
    if (state.Cheese) {
        $cheese.style.display = "inherit";
      } else {
        $cheese.style.display = "none";
      }
}
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let $tomato=document.getElementById("tomato");
    if (state.Tomatoes) {
        $tomato.style.display = "inherit";
      } else {
        $tomato.style.display = "none";
      }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let $onion=document.getElementById("onion");
    if (state.Onions) {
        $onion.style.display = "inherit";
      } else {
        $onion.style.display = "none";
      }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let $lettuce=document.getElementById("lettuce");
    if (state.Lettuce) {
        $lettuce.style.display = "inherit";
      } else {
        $lettuce.style.display = "none";
      }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll("btn-patty", state.Patty);
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
    state.Cheese = !state.Cheese;
    renderAll("btn-cheese",state.Cheese);
  };


// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
    state.Tomatoes = !state.Tomatoes;
    renderAll("btn-tomatoes", state.Tomatoes);
  };

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
    state.Onions = !state.Onions;
    renderAll("btn-onions", state.Onions);
  };

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
    state.Lettuce = !state.Lettuce;
    renderAll("btn-lettuce", state.Lettuce);
  };

//Challenge 1 - Add/Remove the class active to the buttons based on state
let renderButtons = (name, activeState) => {
    let displayProperty = document.querySelector(`.${name}`);
    displayProperty.classList.toggle("active");
};

//Challenge 2 - Render only the items selected in the ingredients board based on the state
let renderIngredientsBoard = () => {
    for (const item in state) {
      let ingredient = document.getElementsByClassName("items");
      for (const element of ingredient) {
        if (item == element.innerHTML) {
          if (state[item]) element.style.display = "inherit";
          else element.style.display = "none";
        }
      }
    }
  };
  
  
  //Judgement 1
  //In the p element having price-details as the class, display the calculated
  //price based on ingredients
  let renderPrice = () => {
    let total = 20;
    for (const item in state) {
      if (state[item]) {
        total += ingredients[`${item}`];
      }
    }
  
    document.querySelector(".price-details").innerHTML = `INR ${total}`;
  
  };
