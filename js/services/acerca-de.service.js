const loadPrices = async () => {
    const {
        price1,
        price2,
        price3,
        price4,
        price5,
        price6,
        price7,
        price8,
    } = await getEndpoint('price');

    document.querySelector('#_price1').innerHTML = `S/ ${price1}`;
    document.querySelector('#_price2').innerHTML = `S/ ${price2}`;
    document.querySelector('#_price3').innerHTML = `S/ ${price3}`;
    document.querySelector('#_price4').innerHTML = `S/ ${price4}`;
    document.querySelector('#_price5').innerHTML = `S/ ${price5}`;
    document.querySelector('#_price6').innerHTML = `S/ ${price6}`;
    document.querySelector('#_price7').innerHTML = `S/ ${price7}`;
    document.querySelector('#_price8').innerHTML = `S/ ${price8}`;
}