import axios from 'axios';
import {cards} from '../constants/cards';


const useSetCards = async({
    name,
    profession,
    email,
    contactNo
}) => {
    // Retrieve existing cards from local storage
    const storedCards = JSON.parse(localStorage.getItem('cards')) || [];

    // Add new card to the existing cards array
    storedCards.push({
        name: name,
        profession: profession,
        email: email,
        contactNo: contactNo
    });

    // Save updated cards array back to local storage
    localStorage.setItem('cards', JSON.stringify(storedCards));
    // try {
    //     const res = await axios.post("/api/cards/add", {
    //         name: name,
    //         profession: profession,
    //         email: email,
    //         contactNo: contactNo
    //     },{
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });

    //     if(res){
    //         console.log("Data added successfully");
    //     }
        
    // } catch (error) {
    //     console.log("Error fetching data");//need to set toast in this section
        
    // }
    cards.push({
        name: name,
        profession: profession,
        email: email,
        contactNo: contactNo
    });

}

export default useSetCards;