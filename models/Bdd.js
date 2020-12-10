import { createRequire } from 'module';
const require = createRequire(import.meta.url);

require('dotenv').config();
const mongoose = require("mongoose");


mongoose.connect(
    process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex : true 
    }
);


module.exports = mongoose;