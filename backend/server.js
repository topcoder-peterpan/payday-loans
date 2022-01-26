const express = require('express');
const cors = require("cors");
const dbEvent = require('./configure/DB_Connection');
const dotenv = require('dotenv');
const wizardRoutes = require('./Routes/wizardRoute');
//{ extended: true }
dotenv.config();
const app = express();
var corsOptions = {
    origin: "http://localhost:3000",
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

app.use('/' , wizardRoutes);

const PORT =  process.env.PORT || 4000;

const onDBconnect = () => {
    app.listen(PORT,()=>{
    console.log(`server active at ${PORT}`);
});
};

dbEvent(onDBconnect);