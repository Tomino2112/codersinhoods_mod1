const productsContainer = document.querySelector("#products");

// const get = (productID) => {
//   product= products[productID];
//   return product;
// }

const createOptions = (options) => {
  let allOptions = "";
  for (let i = 0; i < options + 1; i++) {
    optionString = "<option value=" + i + ">" + i + "</option>";
    allOptions = allOptions + optionString;
  }
  return allOptions;
};

products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.id = product.id;
  productDiv.classList.add("product");
  const optionMultiple = createOptions(product.max_quantity);

  productDiv.innerHTML = `<img src="${product.img}" />
  <h3>${product.name}</h3>
  <p>${product.price}</p>
  <select>
      ${optionMultiple}
  </select>`;

  const maxOptions = products.max_quantity * "<option></option>";

  productsContainer.appendChild(productDiv);
});

const allProducts = [...document.querySelectorAll(".product")];

const getTotal = () => {
  let sumTotal = 0;
  allProducts.forEach((product, index) => {
    const productIndex = document.getElementById([index + 1]);
    const productQty = productIndex.querySelector("select").value;
    const productCost = productIndex.querySelector("p").innerText;
    totalCost = productQty * productCost;
    sumTotal += totalCost;
  });
  return sumTotal;
};

let budgetString = document.getElementById("remaining").querySelector("span");

const number = budgetString.innerText.match(/\d+/g);
let budget = number[0];

const overBudgetBox = document.createElement("div");
overBudgetBox.innerHTML = `Not enough money left for that`;
overBudgetBox.classList.add("error");
const remaining = document.getElementById("remaining");
// cart.appendChild(overBudgetBox);


let accumulatedTotal = 0;
document.querySelectorAll("select").forEach((option) => {
  let lastVal = option.value;
  console.log(lastVal);
  option.addEventListener("change", (event) => {
    accumulatedTotal = getTotal();
    let budgetDep = (budget - accumulatedTotal).toFixed(2);

    if (budget < accumulatedTotal) {
      cart.appendChild(overBudgetBox);

      setTimeout(() => {
        overBudgetBox.remove();
      }, 3000);
      
      // console.log('overBudget:'+accumulatedTotal);
      option.value = lastVal;
      accumulatedTotal = getTotal();
    } else {
      budgetString.innerHTML = "£" + budgetDep;
    }
    // console.log("TotaL:"+accumulatedTotal);
  });
});
