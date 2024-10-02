let products = [];
let cart = [];
let isCartVisible = false;

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    addProducts();
    createCartToggle();
});


function createCartToggle() {
    const toggleButton = document.createElement('button');
    toggleButton.id = 'cart-toggle';
    toggleButton.textContent = 'Your Cart';
    toggleButton.onclick = toggleCart;
    document.body.appendChild(toggleButton);

    const cartContainer = document.createElement('div');
    cartContainer.id = 'cart-container';
    document.body.appendChild(cartContainer);
}

function toggleCart() {
    const cartContainer = document.getElementById('cart-container');
    isCartVisible = !isCartVisible;
    cartContainer.classList.toggle('visible', isCartVisible);
    updateCartUI();
}

function updateCartToggleButton() {
    const toggleButton = document.getElementById('cart-toggle');
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    toggleButton.textContent = `Cart (${itemCount})`;
}

function addProducts() {
    console.log('Fetching products...');
    fetch('http://localhost:3000/data')
        .then(response => {
            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Received data:', data);
            products = data;
            displayProducts();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('product-list').innerHTML = `
                <p>Error loading products: ${error.message}</p>
                <p>Please check the console for more details.</p>
            `;
        });
}

function displayProducts() {
    console.log('Displaying products...');
    const container = document.getElementById('product-list');
    container.innerHTML = '';

    if (products.length === 0) {
        container.innerHTML = '<p>No products available</p>';
        return;
    }

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const img = document.createElement('img');
        img.src = product.imageUrl;
        img.alt = product.title;

        const title = document.createElement('h2');
        title.textContent = product.title;

        const price = document.createElement('p');
        price.textContent = `Price: $${product.price}`;

        const location = document.createElement('p');
        location.textContent = `Location: ${product.location}`;

        const date = document.createElement('p');
        date.textContent = `Date: ${product.date}`;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.onclick = () => addProductToCart(product);

        productDiv.appendChild(img);
        productDiv.appendChild(title);
        productDiv.appendChild(price);
        productDiv.appendChild(location);
        productDiv.appendChild(date);
        productDiv.appendChild(addToCartButton);

        container.appendChild(productDiv);
    });
}

function addProductToCart(product) {
    console.log('Adding to cart:', product);
    const productInCart = cart.find(item => item.id === product.id);

    if (productInCart) {
        productInCart.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    updateCartToggleButton();
}

function deleteProductFromCart(productId) {
    console.log('Deleting from cart:', productId);
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function increaseProductQuantity(productId) {
    console.log('Increasing quantity:', productId);
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity += 1;
        updateCartUI();
    }
}

function reduceProductQuantity(productId) {
    console.log('Reducing quantity:', productId);
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity -= 1;
        if (product.quantity <= 0) {
            deleteProductFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function editProductInCart(productId, newQuantity) {
    console.log('Editing product in cart:', productId, 'new quantity:', newQuantity);
    const product = cart.find(item => item.id === productId);
    if (product) {
        if (newQuantity <= 0) {
            deleteProductFromCart(productId);
        } else {
            product.quantity = newQuantity;
            updateCartUI();
        }
    }
}

function updateCartUI() {
    console.log('Updating cart UI');
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '<h2>Your Cart</h2>';

    if (cart.length === 0) {
        cartContainer.innerHTML += '<p>Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            const itemInfo = document.createElement('div');
            itemInfo.className = 'cart-item-info';

            const title = document.createElement('div');
            title.className = 'cart-item-title';
            title.textContent = item.title;

            const price = document.createElement('div');
            price.className = 'cart-item-price';
            price.textContent = `$${item.price * item.quantity}`;

            itemInfo.appendChild(title);
            itemInfo.appendChild(price);

            const controls = document.createElement('div');
            controls.className = 'cart-item-controls';

            const decrementButton = document.createElement('button');
            decrementButton.textContent = '-';
            decrementButton.onclick = () => reduceProductQuantity(item.id);

            const quantity = document.createElement('input');
            quantity.type = 'number';
            quantity.value = item.quantity;
            quantity.min = 1;
            quantity.onchange = (e) => editProductInCart(item.id, parseInt(e.target.value));

            const incrementButton = document.createElement('button');
            incrementButton.textContent = '+';
            incrementButton.onclick = () => increaseProductQuantity(item.id);

            const removeButton = document.createElement('button');
            removeButton.className = 'cart-item-remove';
            removeButton.textContent = 'Remove';
            removeButton.onclick = () => deleteProductFromCart(item.id);

            controls.appendChild(decrementButton);
            controls.appendChild(quantity);
            controls.appendChild(incrementButton);

            cartItem.appendChild(itemInfo);
            cartItem.appendChild(controls);
            cartItem.appendChild(removeButton);

            cartContainer.appendChild(cartItem);
        });


        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const totalElement = document.createElement('div');
        totalElement.id = 'cart-total';
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
        cartContainer.appendChild(totalElement);

        updateCartToggleButton();
    }
}