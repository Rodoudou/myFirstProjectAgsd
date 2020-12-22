// require('dotenv').config();
// // import { createRequire } from 'module';
// // const require = createRequire(import.meta.url);
// const mongoose = require("mongoose");

// export const bdd = mongoose.connect(
//     process.env.MONGODB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify : false  
//     }
// )
// .then(() => {
//     console.log('Connection etabli avec MongoDB');
// })
// .catch(error => console.error(error.message));