import io from "socket.io-client";
import React from "react";
export const socket = io("https://host.dwv482omu6gd0.amplifyapp.com/");
export const SocketContext = React.createContext();
