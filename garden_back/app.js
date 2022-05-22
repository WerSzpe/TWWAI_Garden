import bodyParser from 'body-parser';
import config from './config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import routes from './REST/routes';

import http from 'http';
import socket from 'socket.io';
import jwt from "jsonwebtoken";

import applicationException from './service/applicationException';
import business from './business/business.container';

const app = express();
app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '2048kb'}));

app.use(cors());

const server = http.createServer(app);
const io = socket(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    if (error) {
        console.error(error);
    }
    else {
        console.info('Connect with database established');
    }
});

process.on('SIGINT', () => {
    mongoose.connection.close(function () {
        console.error('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});


routes(app);

let interval = null;

async function getApiAndEmit(socket) {
   try {
    let sectionsLast = await (await business.getSectionManager().queryData());
    let sections = await business.getSectionManager().query();
    for(let section of sections){
        let data = await business.getParamManager().getSection(section.id);
        await socket.emit(section.id, {"data": data});
    }
    await socket.emit("sectionsUpdate", {"data": sectionsLast});
   } catch (error) {
       console.log(error);
   }
};

io.on("connection", (socket) => {

    try {
        jwt.verify(socket.handshake.auth.token, config.JwtSecret);
        if(interval) {
            clearInterval(interval);
        }
        interval = setInterval(()=>getApiAndEmit(socket),1000);

        socket.on("disconnect", () => {
            console.log("Client disconnected");
            clearInterval(interval[socket.id]);
        });
        console.log("New client connected");

    } catch (error) {
        console.log(error);
    }
   
});

server.listen(config.port, () => console.log(`Listening on port ${config.port}`));

