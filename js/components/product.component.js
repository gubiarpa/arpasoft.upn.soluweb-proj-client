const buildProducts = async (idContainer) => {


    const { totalRows, products = [] } = await getAllProducts();

    products.forEach((product, idx) => {
        const container = document.querySelector(idContainer);
        const div = buildOneProduct(product, idx);
        container.appendChild(div);
    });

}

const buildOneProduct = ({title, content}, index) => {

    const h3 = document.createElement('h3');
    h3.innerHTML = `<span>${index + 1}</span> ${title}`;

    const p = document.createElement('p');
    p.innerText = content;

    const div = document.createElement('div');
    div.appendChild(h3);
    div.appendChild(p);

    return div;
}