import connectToDB from "./config/mongodb.config.js";
import server from "./index.js";

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log("server is listening at port ");
    connectToDB();
});
