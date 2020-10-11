import io from "socket.io";
import redis from "redis";
import http from "http";
import express from "express";

const app = express();
const server = new http.Server(app);
const socket = io(server);
const redisClient = process.env.REDIS_URL ?
    redis.createClient(process.env.REDIS_URL) :
    redis.createClient();

export {
    app, server, socket, redisClient
}