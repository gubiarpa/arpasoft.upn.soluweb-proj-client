const buildInicio = async () => {
    const { slogan, welcome, customer1, testimony1 } = await getInicioContent();
    document.querySelector('#_slogan').innerHTML = slogan;
    document.querySelector('#_welcome').innerHTML = welcome;
    document.querySelector('#_customer1').innerHTML = customer1;
    document.querySelector('#_testimony1').innerHTML = testimony1;
}