/* *** Services *** */
const getUrlBase = () => {
    return 'https://opticas-dyc.herokuapp.com';
    // return 'http://localhost:2907';
}

const getEndpoint = async (endpoint) => {
    try {
        const response = await fetch(`${getUrlBase()}/api/${endpoint}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const postEndpoint = async (endpoint, body = null, token = '') => {
    try {
        const response = await fetch(`${getUrlBase()}/api/${endpoint}`, {
            method: 'POST',
            // mode: 'cors',
            cache: 'no-cache',
            // credentials: 'same-origin',
            headers: {
                'Content-type': 'application/json',
                'captcha': token
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        
    }
}