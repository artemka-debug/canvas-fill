"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = process.env.PORT || 8080;
app.use(express_1.default.static('public'));
app.post('/fill-square', function (req, res) {
    console.log('hi');
});
app.get('/', function (req, res) {
    res.send('index.html');
});
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});
