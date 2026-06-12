const url = 'https://dummyjson.com/';

async function get(endpoint) {
    let response = await fetch(`${url}${endpoint}`);
    if (!response.ok) throw Error('HTTP ERROR.');

    return await response.json();
}

export default get;