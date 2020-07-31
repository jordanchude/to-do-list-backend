const express = require('express');
const app = express();
const PORT = process.env.PORT;

router.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    
});