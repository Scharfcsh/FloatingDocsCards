import axios from 'axios';


const useSetCards = async({
    name,
    profession,
    email,
    contactNo
}) => {

    try {
        const res = await axios.post("/api/cards/add", {
            name: name,
            profession: profession,
            email: email,
            contactNo: contactNo
        },{
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(res){
            console.log("Data added successfully");
        }
        
    } catch (error) {
        console.log("Error fetching data");//need to set toast in this section
        
    }

}

export default useSetCards;