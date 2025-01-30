const express = require("express");
const app = express();
const middlewares = require("../middleware/devMiddleware");
const router = require("../router");

app.use([middlewares, router]);


app.post('/post', (req, res) => {
    // update to the server side code
})

app.post('/ataurwd', (req, res) => {
    // ataur wd added this post req
})
app.get('postwdnew', (req, res) => {
    // for get any data from ataur wd
})
app.get('postwd', (req, res) => {
    // for get any data from ataur wd
})
app.get('juael', (req, res) => {
    // hellow
})

app.get('/newget', (req, res) => 
{
    // update new one
})

module.exports = app;

