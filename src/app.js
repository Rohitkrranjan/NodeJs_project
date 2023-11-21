const express = require("express");
const path = require('path');
require("./db/conn")
const User = require("./models/usermsg")
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 3000;

// setting the path


const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");


// middleware
app.use(express.urlencoded({extended:false}))
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views" , template_path);
hbs.registerPartials(partial_path);

// routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/service", (req, res) => {
  res.render("service");
});
app.post("/contact" ,async(req,res)=>{
  try{
    // res.send(req.body)
    const userData = new User(req.body)
    await userData.save();
    res.status(201).render("index");
  }
  catch(error){
    res.status(500).send(error);
  }

})
// server create
app.listen(PORT, () => {
  console.log(`server in running at port number ${PORT}...`);
});
