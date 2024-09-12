import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is imported

const useGetCards = () => {
    const [cardInfo, setCardInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get("/api/cards");
                const data = response.data;
                console.log(data);
                setCardInfo(data); // Make sure to access the correct data field
            } catch (error) {
                setError("Error fetching data");
                console.log("Error fetching data");
                // You can also set a toast here for error notification
            }
        };

        fetchCards();
    }, []); // The empty dependency array ensures this runs only once when the component mounts

    return { cardInfo };
}

export default useGetCards;
