"use client";

import { CICADA_WS_ENDPOINT } from "@/const/cicadaEndpoint";
import { useEffect } from "react";

export const useCicadaSub = () => {
  useEffect(() => {
    const webSocket = new WebSocket(CICADA_WS_ENDPOINT);
    webSocket.onopen = () => {
      console.log("Connected to Cicada");
    };
    webSocket.onclose = () => {
      console.log("Disconnected from Cicada");
    };
    webSocket.onmessage = (event) => {
      console.log(event.data);
    };
  }, []);
};
