import mongoose from "mongoose";
import Blog from "./model/Blog.js";
import Login from "./model/Login.js";

mongoose.connect(url);

// finding by id with filters
const article = await Blog.findById("65081320ef6a5f77384be86d","title slug content").exec();

console.log(article);



// deleting the data

const myLogin = await Login.deleteOne({ username: "harsh" , password: "harsh"})

console.log(myLogin);
