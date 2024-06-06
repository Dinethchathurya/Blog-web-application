import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let posts = [
    { category: "iphone", title: "New iphone relesed", content: "This is the content of post 1", time :"2024/02/4",link: "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-13/iphone-13-pink.jpg"},
    { category: "iphone", title: "Latest iphones", content: "This is the content of post 2", time :"2024/02/4",link : "https://cdsassets.apple.com/live/7WUAS350/images/iphone/fall-2023-iphone-colors-iphone-15-pro-max.png" },
    { category: "iphone", title: "Mid night color", content: "This is the content of post 3", time :"2024/02/4",link: "https://i5.walmartimages.com/seo/Walmart-Family-Mobile-Apple-iPhone-12-5G-64GB-Black-Prepaid-Smartphone-Locked-to-Walmart-Family-Mobile_66b2853b-6cb5-4f20-b73a-b60b39b6de44.6b3bf83a920058a47342318925f1dc2b.jpeg"},
];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",  (req,res) => {
    res.render("index.ejs", {posts:posts});
});

app.get("/newpost",(req,res) => {
    res.render("createPost.ejs");
})

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
});