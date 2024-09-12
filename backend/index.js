import express from 'express';
import { auth } from './controllers/auth.controller.js';
import CardsRoutes from './routes/Cards.route.js';

const app = express();
const users =[]
// console.log(users);
app.use(express.json());

app.use("/signup", CardsRoutes);
app.use('/api/cards',CardsRoutes);

// app.post("/login", (req, res) => {
//   const {username, password} = req.body;
//   if(users.find((user)=>  user.username === username && user.passward===password)){
//       const token = jwt.sign({username},SECTRET_KEY);
//       res.json({token});
//   }else{
//       res.status(403).send({message:"Invalid username or password"});
//   }
// });



// app.get('/me', auth,(req,res)=>{
//   const username = req.body.username;

//   if(users.find((user)=> user.username === username)){
//       res.json({message:"You are authorized"});
//   }else{
//       res.status(403).send({message:"You are not authorized"});   
//   }
// })



app.listen(3000, () => {    
  console.log('Server is running on http://localhost:3000');
});