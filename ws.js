import { WebSocketServer } from "ws";
import { getEpoch } from "./utils.js";
import { v4 as uuidv4 } from 'uuid';

const PORT = 8888;
const server = new WebSocketServer({ port: PORT });
console.info(`Server started on port ${PORT}`);

server.on("connection", (socket) => {

    // send
    socket.send(
        JSON.stringify({
            time: getEpoch(),
            sid: uuidv4(),
        })
    );

    // recv
    socket.on("message", (data) => {
        const packet = JSON.parse(data);
        switch (packet.type) {
        }
    });
});
