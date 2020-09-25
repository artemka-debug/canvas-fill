"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var redis_1 = __importDefault(require("redis"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
var app = express_1.default();
var PORT = process.env.PORT || 8080;
var redisClient = redis_1.default.createClient();
app.use(express_1.default.static('public'));
app.use(body_parser_1.default.json());
app.post('/fill-square', function (req, res) {
    var id = req.body.id;
    redisClient.get('squares', function (err, reply) {
        var json;
        if (reply) {
            json = JSON.parse(reply);
        }
        if (!json.includes(id)) {
            json.push(id);
        }
        var stringArray = JSON.stringify(json);
        res.json({ result: redisClient.set('squares', stringArray) });
    });
});
app.get('/indexes', function (req, res) {
    redisClient.get('squares', (function (err, reply) {
        if (!err && reply) {
            res.json({ result: JSON.parse(reply) });
            return;
        }
        res.json({ result: [] });
    }));
});
app.get('/', function (req, res) {
    res.send('index.html');
});
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});
