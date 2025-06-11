require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const noteRoutes = require('./routes/note.route');
app.use('/api', noteRoutes);  
app.use("/",(req,res)=>{
  res.json("hello world")
})
require("./config/db").main()
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});