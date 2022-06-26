const app=require("./app")
const dbconnet=require("./db")

require("dotenv").config();
const port=process.env.PORT||8000

dbconnet(process.env.URL).then(()=>{
    app.listen(port,()=>{
        console.log(`server connected at ${port}`)
        console.log("mongoDB connected")
    })
}).catch((err)=>{
    console.log(err)
})