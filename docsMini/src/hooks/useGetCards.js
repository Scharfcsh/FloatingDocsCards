import React, { useState, useEffect } from 'react';

const useGetCards = () => {
    const [cardInfo, setCardInfo] = useState([]);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
        setCardInfo(storedCards);
    }, []);

    const addCard = (name, profession, email, contactNo) => {
        try {
            const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
            const newCard = { name, profession, email, contactNo };
            storedCards.push(newCard);
            localStorage.setItem('cards', JSON.stringify(storedCards));
            setCardInfo(storedCards);
        } catch (error) {
            setError("Error saving data");
            console.log("Error saving data");
        }
    };

    return { cardInfo };
}

export default useGetCards;
