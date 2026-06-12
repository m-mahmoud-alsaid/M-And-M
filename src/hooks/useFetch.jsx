import { useState, useEffect } from 'react'

const useFetch = (apiFunction, endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await apiFunction(endpoint);
                setData(data);
            }
            catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [apiFunction, endpoint]);

    return { data, loading, error };
}

export default useFetch;