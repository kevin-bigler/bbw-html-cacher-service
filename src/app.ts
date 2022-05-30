import express from "express"

const app = express()

app.get("/hello-world", async (req, res) => {
    console.log("hello world!!")
    res.status(200).send("yo yo my bro bro")
})

export default app
