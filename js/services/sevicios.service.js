const loadServices = async () => {

    const {
        service1,
        description1,
        service2,
        description2,
        service3,
        description3,
    } = await getEndpoint('servicio');

    document.querySelector('#_service1').innerHTML = service1;
    document.querySelector('#_description1').innerHTML = description1;
    document.querySelector('#_service2').innerHTML = service2;
    document.querySelector('#_description2').innerHTML = description2;
    document.querySelector('#_service3').innerHTML = service3;
    document.querySelector('#_description3').innerHTML = description3;
}