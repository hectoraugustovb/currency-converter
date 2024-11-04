import axios from "axios";

export default async function(currency, targetCurrency) {
    const apiKey =  import.meta.env.VITE_CURRENCY_API_KEY;

    return await axios
        .get(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${currency}/${targetCurrency}`)
        .then(res => {
            return res.data.conversion_rate;
        })
        .catch(error => {
            console.log(error);
        })
}