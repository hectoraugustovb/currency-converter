import { useEffect, useState } from 'react';
import './styles.scss';

import currencys from '../../utils/currency'; 
import getCurrencyValue from '../../services/getCurrencyValue';

function Conversor() {
  const [ amount, setAmount ] = useState("");
  const [ data, setData ] = useState({
    currencyName: '',
    currency: '',
    amount: 0,
    converted: 0,
    targetCurrencyName: '',
    targetCurrency: '',
  });

  const fetchCurrencyValues = async () => {
    const currencyValue = await getCurrencyValue(data.currency, data.targetCurrency);

    return currencyValue * data.amount;
  }

  const loadData = async () => {
    const currency = await currencys.filter(c => c.code === data.currency)[0];
    const targetCurrency = await currencys.filter(c => c.code === data.targetCurrency)[0];

    let currencyValue;
    if (data.currency && data.targetCurrency)
      currencyValue = await fetchCurrencyValues();

    setData({
      ...data,
      currencyName: currency?.name,
      targetCurrencyName: targetCurrency?.name,
      converted: currencyValue?.toFixed(2)
    });
  };

  useEffect(() => {
    loadData();
  }, []);
    
  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setData(prevData => ({ ...prevData, amount: parseFloat(value) || 0 }));
  };

  
  //-----Timeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (data.amount) 
        loadData();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [data.amount, data.currency, data.targetCurrency]);
  //-----


  return (
    <div className='conversor'>
      <div className="currencys">
        <h3>{data.currencyName ? `${data.amount} ${data.currencyName}` : 'Selecione uma moéda'}</h3>
        <p>=</p>
        <h3>{data.targetCurrencyName ? `${data.converted} ${data.targetCurrencyName}` : 'Selecione uma moéda'}</h3>
      </div>

      <div className='conversion'>
        <div className="current">
          <input 
            placeholder='Digite um valor:'
            type="number" 
            value={amount}
            onChange={handleAmountChange}
          />
          <select 
            name="currency"
            onChange={e => setData({ ...data, currency: e.target.value })}
            defaultValue='1'
          >
            <option key='1' value="1" disabled>
              Selecione uma moéda:
            </option>

            {currencys.map(currency => (
              <option 
                key={currency.code} 
                value={currency.code}
              >
                {`${currency.name} (${currency.code})`}
              </option>
            ))};
          </select>
        </div>

        <div className="convert">
          <input 
            type="number" 
            value={data.converted ? data.converted : 0} 
            readOnly
          />
          <select 
            name="currency"
            onChange={e => setData({ ...data, targetCurrency: e.target.value })}
            defaultValue='1'
          >
            <option key='1' value="1" disabled>
              Selecione uma moéda:
            </option>

            {currencys.map(currency => (
              <option key={currency.code} value={currency.code}>
                {`${currency.name} (${currency.code})`}
              </option>
            ))};
          </select>
        </div>
      </div>
    </div>
  );
};

export default Conversor;