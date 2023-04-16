"use client";

import { CICADA_WS_ENDPOINT } from "@/const/cicadaEndpoints";
import { CicadaSubscriptionData } from "@/types";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

export const cicadaSubKey = "cicadaSub";

export const useCicadaSub = (pair?: string) => {
  const [error, setError] = useState<boolean>(false);
  const queryClient = useQueryClient();
  useEffect(() => {
    const data = queryClient.getQueryData<CicadaSubscriptionData>(cicadaSubKey);
    if (data) return;
    let reconnectionTries = 0;
    const maxReconnectionTries = 2;
    const connect = () => {
      if (!pair) {
        return undefined;
      }

      const webSocket = new WebSocket(CICADA_WS_ENDPOINT);
      webSocket.onopen = () => {
        webSocket.send(JSON.stringify({ action: "subscribe", pair }));
        reconnectionTries = 0;
      };
      webSocket.onclose = (ev: CloseEvent) => {
        if (!ev.reason) return;

        if (reconnectionTries > 0) {
          console.warn(
            `Reconnecting to Cicada WebSocket... (attempt ${reconnectionTries})`
          );
        }
        if (reconnectionTries >= maxReconnectionTries) {
          console.error(
            "Cicada WebSocket reconnection failed. Please refresh the page."
          );
          setError(true);
          return;
        }
        setTimeout(() => {
          connect();
          reconnectionTries++;
        }, 1000);
      };
      webSocket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (!data.point) return;
          queryClient.setQueryData<CicadaSubscriptionData>(cicadaSubKey, {
            pair: data.currency,
            value: data.point,
          });
        } catch (e) {}
      };

      return webSocket;
    };

    const webSocket = connect();

    return () => {
      webSocket?.close();
      queryClient.removeQueries(cicadaSubKey);
      queryClient.cancelQueries(cicadaSubKey);
      setError(false);
    };
  }, [pair, queryClient]);

  return useQuery(cicadaSubKey, () => {
    if (error)
      throw "Cicada WebSocket reconnection failed. Please refresh the page.";
    return queryClient.getQueryData<CicadaSubscriptionData>(cicadaSubKey);
  });
};
