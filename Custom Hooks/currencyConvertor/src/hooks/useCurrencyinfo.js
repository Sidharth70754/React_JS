import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
    const [data, setData] = useState({});
    const API_KEY = '27a332d8b0b21bbdedb69e23';
    const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

    useEffect(() => {
        if (!currency) return;

        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`${BASE_URL}${currency}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching the currency data:', error);
            }
        };

        fetchCurrencyData();
    }, [currency]);

    return data;
}

export default useCurrencyinfo;
