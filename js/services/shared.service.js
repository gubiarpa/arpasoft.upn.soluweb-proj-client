const loadShared = async () => {
    const {
        slogan,
        welcome,
        phone,
        email,
        location,
    } = await getEndpoint('shared');

    document.querySelector('#_slogan').innerHTML = slogan;
    document.querySelector('#_welcome').innerHTML = welcome;
    document.querySelector('#_phone').innerHTML = phone;
    document.querySelector('#_email').innerHTML = email;
    document.querySelector('#_location').innerHTML = location;
}