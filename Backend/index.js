import express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log("connected to backend");
    res.send("Hello World");
});

export default app;
