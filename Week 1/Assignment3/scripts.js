const renderProducts = async () => {
    let uri = 'http://localhost:3000/products';

    try {
        const response = await fetch(uri);
        if (!response.ok) {
            throw new Error('No response from server');
        }
        const data = await response.json();
        const productList = document.getElementById('product-list');
        
        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            
            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <p>Category: ${product.category}</p>
                <p>In Stock: ${product.stock}</p>
            `;
            
            productList.appendChild(productDiv);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

window.addEventListener('DOMContentLoaded', () => renderProducts());