const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;




// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));





// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
