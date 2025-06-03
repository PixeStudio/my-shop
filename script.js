//dynamiczne dodawania produktów do sklepu

const productsData = [
    {
    name: "Sofa",
    price: 999,
    img: ""
    },
     {
    name: "Fotel",
    price: 499,
    img: ""
    },
     {
    name: "Lampa",
    price: 199,
    img: ""
    },
];

const productsContainer = document.querySelector(".products");

productsData.forEach(product => {
    const productEl = document.createElement('div');
    productEl.classList.add('product');
    productEl.innerHTML = 
        `<img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price} zł.</p>
          <button class="add-to-cart">Dodaj do koszyka</button>`;
productsContainer.appendChild(productEl);
});

//LICZNIK KOSZYKA

let cartCount = 0;
productsContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('add-to-cart')) {
        cartCount++;

document.getElementById('cart-count').textContent = cartCount;
    }
});