const express = require('express');
const path = require('path');

const app = express();


app.use(express.static('client/build'));

app.get('*',(req,res) => {
    const myPath = path.resolve(__dirname,'client','build','index.html');
    console.log('__dirname',__dirname);
    console.log('MY Path', myPath);


    return res.sendFile(myPath);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listing on port ${PORT}`));



