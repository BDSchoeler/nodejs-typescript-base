import * as fs from "fs";
import * as https from "https";
import app from "./app";
const PORT = 3000;

const httpsOptions = {};

https.createServer(httpsOptions, app).listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log("Express server listening on port " + PORT);
});
