//1.import jsonServer(library) using require method
const jsonServer = require("json-server");
//2.create json server -create()

const mediaPlayerServer = jsonServer.create();
//3.create path for json file
const router = jsonServer.router("db.json");
//4.create middleware to phrase json
const middleware = jsonServer.defaults();
//5.allow serveruse middleware and router
mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);
//6.setup port for the server to run
PORT=3000 || process.env.PORT;

mediaPlayerServer.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
})