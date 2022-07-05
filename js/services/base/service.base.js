/* *** Services *** */
const getEndpoint = async (endpoint) => {

    const getUrlBase = () => {
        return 'http://localhost:2907';
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