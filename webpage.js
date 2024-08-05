let products = [];

document.getElementById('add-product').addEventListener('click', addProduct);
document.getElementById('sort-price').addEventListener('click', () => sortProducts('price'));
document.getElementById('sort-rating').addEventListener('click', () => sortProducts('rating'));

function addProduct() {
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const rating = parseFloat(document.getElementById('product-rating').value);

    if (name && !isNaN(price) && !isNaN(rating)) {
        products.push({ name, price, rating });
        updateGraphs();
        clearInputs();
    }
}

function sortProducts(criteria) {
    products.sort((a, b) => a[criteria] - b[criteria]);
    updateGraphs();
}

function updateGraphs() {
    const priceGraph = document.getElementById('price-graph');
    const ratingGraph = document.getElementById('rating-graph');

    priceGraph.innerHTML = '';
    ratingGraph.innerHTML = '';

    products.forEach(product => {
        const priceBar = document.createElement('div');
        priceBar.className = 'bar';
        priceBar.style.width = `${product.price * 10}px`;
        priceBar.textContent = `${product.name}: $${product.price}`;
        priceGraph.appendChild(priceBar);

        const ratingBar = document.createElement('div');
        ratingBar.className = 'bar';
        ratingBar.style.width = `${product.rating * 20}px`;
        ratingBar.textContent = `${product.name}: ${product.rating} stars`;
        ratingGraph.appendChild(ratingBar);
    });
}

function clearInputs() {
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-rating').value = '';
}
