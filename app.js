const express= require("express");
const app= express();
const path= require ("path");
app.use(express.static (path.join(__dirname,"public")));



const methodOverride= require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.listen("8080",(req,res)=>{
    console.log("app is listenning");
    
});
app.get("/",(req,res)=>{
    res.render("homepage.ejs");
})

app.get("/home/treat",(req,res)=>{
    res.render("treatment.ejs");
})
app.get("/home/cause",(req,res)=>{
    res.render("symptom.ejs");
})

app.get("/home/plan",(req,res)=>{
    res.render("plan.ejs",{ user: null, age: null });
})

app.patch("/home/plan", (req, res) => {
    const { user, age } = req.body;
    res.render("plan.ejs", { user, age });
});