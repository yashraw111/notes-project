const { default: mongoose } = require("mongoose");

exports.main =()=>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
}