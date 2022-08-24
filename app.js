const express = require('express');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5001;

const app = express();

// middlewares and body parsers
app.use(express.json())

app.get('/', (req, res) => {
   res.send("Server Working...")
})

app.use('/csv', require('./routers/csvRouter'))

app.listen(PORT, () => {
   console.log(`App listening on port ${PORT}`);
})