require('dotenv').config();
const mongoose = require("mongoose");

export const mongoose = mongoose.connect(
    process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex : true 
    }
)
.then(() => {
    console.log('Connection etabli avec MongoDB');
})
.catch(error => console.error(error.message));;

