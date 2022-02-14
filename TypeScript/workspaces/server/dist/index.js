"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routers();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routers() {
        this.app.get('/', (req, res) => {
            return res.status(200).send({
                message: 'Hello, world!'
            });
        });
    }
}
const server = new Server(4000);
const port = server.port;
server.app.listen(port, () => {
    console.log(`App is starting at port ${port}`);
});
