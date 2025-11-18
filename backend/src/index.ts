import express,{Request,Response} from "express";
import { sampleProducts } from "./data";
import helmet from "helmet";
const app = express();
const port = 5000;
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: [
          "'self'",
          "http://localhost:5000",
          "http://me.kis.v2.scr.kaspersky-labs.com",
          "ws://me.kis.v2.scr.kaspersky-labs.com"
        ]
      }
    })
  );

app.get("/api/products",(req:Request,res:Response)=>{
    res.send(sampleProducts)
});

app.listen(port,()=>{
    console.log(`server is running on port ${port} `)
});