const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the BPMS Cloud Integration Server!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});