import express from "express";
import { createConnection } from "typeorm";
import { options } from "./ormconfig";

const app = express();
app.use(express.json());

app.get("/", (_res, req) => {
    req.send("Hello World!");
});


(async () => {
    // Create DB connection
    await createConnection(options);

    // Default port for dokku is 5000.
    app.listen(5000, () => console.log("Running on " + 5000));
})();
