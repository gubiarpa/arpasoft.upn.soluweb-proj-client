const getAllProducts = async () => {
    const response = await fetch(`${getUrlBase()}/api/product`);
    const { totalRows, products } = await response.json();
    return { totalRows, products };
}