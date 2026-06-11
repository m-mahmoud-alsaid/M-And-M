const url = 'https://dummyjson.com/';

async function get(endpoint) {
    try {
        let response = await fetch(`${url}${endpoint}`);
        if (!response.ok) throw Error('HTTP ERROR.');

        return await response.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export default get;