
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setSelectedCurency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }
    return (
        <select className="alert alert-warning form-select" aria-label="Currency selection" onChange={handleCurrencyChange} value={selectedCurrency}>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
    );
};
export default Currency;