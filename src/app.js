const express = require("express");

const app = express();

app.get('/',(req,res) =>  {
    res.send("Hello");
});

app.get('/hi',(req,res) =>  {
    res.send("Hello welcome");
});

app.get('/users',(req,res) =>  {
    res.send("Hello welcome users GET ENDPOINT");
});

app.post('/users',(req,res) =>  {
    res.send("Hello welcome users POST ENDPOINT");
});

app.delete('/users',(req,res) =>  {
    res.send("Hello welcome users DELETE ENDPOINT");
});

app.put('/users',(req,res) =>  {
    res.send("Hello welcome users PUT ENDPOINT");
});

app.listen(3000, () => {
    console.log("Express is runnning on port 3000")
})