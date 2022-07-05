
const PRODUCTS_CONTAINER = '#servicios-container';
const PRODUCTS_ENDPOINT = 'product';

const loadProducts = async () => {

    const loadOneProduct = ({ title, content }, index) => {

        const h3 = document.createElement('h3');
        h3.innerHTML = `<span>${index + 1}</span> ${title}`;

        const p = document.createElement('p');
        p.innerText = content;

        const div = document.createElement('div');
        div.appendChild(h3);
        div.appendChild(p);

        return div;
    }

    const { products } = await getEndpoint(PRODUCTS_ENDPOINT);

    products.forEach((product, idx) => {
        const container = document.querySelector(PRODUCTS_CONTAINER);
        const div = loadOneProduct(product, idx);
        container.appendChild(div);
    });

}
