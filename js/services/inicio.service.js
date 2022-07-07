
const loadProducts = async () => {

    const PRODUCTS_CONTAINER = '#servicios-container';
    const PRODUCTS_ENDPOINT = 'product';

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

const loadTestimonies = async () => {
    const {
        customer1,
        testimony1,
        customer2,
        testimony2,
    } = await getEndpoint('inicio');

    document.querySelector('#_customer1').innerHTML = customer1;
    document.querySelector('#_testimony1').innerHTML = testimony1;
    document.querySelector('#_customer2').innerHTML = customer2;
    document.querySelector('#_testimony2').innerHTML = testimony2;
}