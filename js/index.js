
window.onload = async () => {
    const response = await fetch(`${getUrl()}/api/aplication`);
    const { totalRows, aplications } = await response.json()
    console.log(aplications)
}

const getUrl = () => {
    if (document.location.origin.includes('localhost'))
        return 'http://localhost:2907';

    return 'https://opticas-dyc.herokuapp.com';
}