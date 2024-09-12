import cardsData from "../model/Cards.model.js";


export const setCards = (req, res) => {
    const { name, profession, email, contactNo } = req.body;

    console.log(req.body);
    if (name && profession && email && contactNo) {
        cardsData.push({
            name: name,
            profession: profession,
            email: email,
            contactNo: contactNo
        });
        console.log("data added");
        res.json({ message: "Data added successfully" });
    } else {
        res.status(400).json({ error: "Data not found" });
    }
}



export const getCards = (req, res) => {
    console.log("data fetched");
    res.json(cardsData);
}