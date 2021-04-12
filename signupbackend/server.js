const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const routeurl=require("./routes/route");
const cors=require("cors");
const port=process.env.PORT||4000;
dotenv.config();
//mongoose.set('useNewUrlParser', true);
mongoose.connect(process.env.dataurl,()=>console.log("database connected"))
app.use(express.json()); 
app.use(cors());
app.use('/app',routeurl);
app.listen(port,()=> console.log("server running at 4000"))