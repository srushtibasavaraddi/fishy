import io from "socket.io-client";
import React from "react";
export const socket = io("https://fishy-equilibrium-madiee.herokuapp.com/");
export const SocketContext = React.createContext();
