"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quiz_route_1 = __importDefault(require("./routes/quiz.route"));
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
const version = 1;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(`/api/v${version}/`, quiz_route_1.default);
app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
});
