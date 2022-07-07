/* *** Services *** */
const getEndpoint = async (endpoint) => {

    const getUrlBase = () => {
        return 'https://opticas-dyc.herokuapp.com';
    }

    try {
        const response = await fetch(`${getUrlBase()}/api/${endpoint}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}