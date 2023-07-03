import { BASE_URL, network } from "./network/instance.js";

const containerUI = document.querySelector(".container");
const searchInput = document.querySelector(".search-input");
const menu = document.querySelector(".dropdown-menu");

let productData = [];

function getData() {
  network.getAllProducts(BASE_URL).then((data) => {
    productData = data;
    data.forEach((product) => paintUI(product));
  });
  network.getAllCategories(BASE_URL).then((data) => {
    data.forEach((category) => {
      menu.innerHTML += ` <li><a class="dropdown-item" href="#">${category}</a></li>`;
    });
    const liHR = document.createElement("li");
    const liA = document.createElement("li");

    const hr = document.createElement("hr");
    const a = document.createElement("a");
    a.classList.add("dropdown-item");
    a.innerText = "Get All";
    a.setAttribute("href", "#");
    hr.classList.add("dropdown-divider");
    liHR.appendChild(hr);
    liA.appendChild(a);
    menu.append(liHR, liA);
    // menu.innerHTML += `

    //         <li><hr class="dropdown-divider" /></li>
    //         <li>
    //         <a class="dropdown-item" href="#">Get All</a>
    //         </li>
    // `;
  });
}

function paintUI(product) {
  containerUI.innerHTML += `
            <div class="card col col-3 p-4" style="width: 18rem">
            <div class="w-50 mx-auto"><img src="${product.image}" class="card-img-top" alt="..." /></div>
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="small">
                    ${product.description}
                </p>
            </div>
        </div>
  `;
}

// search
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  //  filter
  const filtered = productData.filter((product) =>
    product.title.toLowerCase().includes(value)
  );
  containerUI.innerHTML = "";
  filtered.forEach((product) => paintUI(product));
});

window.onload = () => getData();
