
import React, {useEffect} from 'react'


export default function useFetch(url, options) {
    const [response, setResponse] = 
    React.useState(null);
    const [error, setError]=
    React.useState(null);
    useEffect(()=> {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    });
    return { response, error }
}