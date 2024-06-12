const express = require("express");
const connectDB = require("./config/db.js");
const mongoose = require("mongoose");
const app = express();

require("./models/User.js");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/user", require("./routes/user.js"))

connectDB().then(async() => {
    app.listen(3000, () => {
        console.log("Server running on PORT 3000");
    });

    // CRUD operations : Create Read Update Delete operations

    /**
     * Create - create 
     */

    // const user = await User.create({
    //     firstName : "Jayesh",
    //     lastName : "Kumar",
    //     email : "jk141003@gmail.com",
    // });
    // console.log(user);



    /**
     * Read - Find / Filter -> findOne, find, findById
     */

    // const user = await User.findOne({
    //     email : "jk141003@gmail.com",
    // });
    // if(user){
    //     console.log(user);
    // }

    // const userList = await User.find({
    //     email : "jk141003@gmail.com",
    // });
    // console.log(userList);

    // const user = await User.findById("6669e89b8a1234d2655e4d63");
    // console.log(user);



    /**
     * Update - Find -> Update the property -> Save
     */

    // const user = await User.findOne({
    //     email : "jk141003@gmail.com"
    // });
    // if(user){
    //     user.firstName = "Aman";
    //     user.lastName = "Jain";

    //     await user.save();
    // }



    /**
     * Delete - deleteOne, deleteMany
     */

    // const deleteResponse = await User.deleteOne({email : "jk141003@gmail.com"});
    // console.log(deleteResponse);

})
.catch((error) => {
    console.log("Something went wrong.");
});