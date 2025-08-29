import React, { useState } from 'react';

const PayUCheckout = () => {
    const [amount, setAmount] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // This would trigger PayU API in a real app
    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            // Simulate redirect to PayU payment gateway
            setTimeout(() => {
                setLoading(false);
                setMessage('Test checkout initiated! (Integrate PayU API here)');
            }, 1200);
        } catch (err) {
            setLoading(false);
            setMessage('Error initiating payment.');
        }
    };

    return (
        <form onSubmit={handleCheckout} style={{ maxWidth: 350, margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2>PayU Test Checkout</h2>
            <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="number"
                required
                placeholder="Amount"
                min={1}
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />
            <button type="submit" disabled={loading}>Pay Now</button>
            {loading && <div>Processing...</div>}
            {message && <div>{message}</div>}
        </form>
    );
};

export default PayUCheckout;