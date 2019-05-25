import * as express from "express";
import * as bodyParser from "body-parser";

// const { PORT } = process.env;
const PORT = 8001;

export function start() {
    return new Promise((resolve) => {
        const app = express();
        
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        
        app.post("/callback", (req, res) => {
            console.log(req)
            console.log(res)
        });
        
        app.listen(PORT, () => {
            resolve();
        })
    })
}