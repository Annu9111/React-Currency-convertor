import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        )
            .then((res) => {
                if (!res.ok) {
                    throw new Error("API request failed");
                }
                return res.json();
            })
            .then((res) => {
                console.log("API DATA:", res);
                setData(res[currency] || {});
            })
            .catch((error) => {
                console.log("ERROR:", error);
                setData({});
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;