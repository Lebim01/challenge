export type CicadaPair = {
  id: string;
  label: string;
};
export interface CicadaMetaData {
  "1. Information": string;
  "2. From Symbol": string;
  "3. To Symbol": string;
  "4. Output Size": string;
  "5. Last Refreshed": string;
  "6. Time Zone": string;
}

export interface CicadaTimeSerie {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
}

export type CicadaTimeSerieDate = `${number}-${number}-${number}`;

export type CicadaTimeSerieRecord = Record<
  CicadaTimeSerieDate,
  CicadaTimeSerie
>;

export type CicadaHistorical = {
  "Meta Data": CicadaMetaData;
  "Time Series FX (Daily)": CicadaTimeSerieRecord;
};

export type CicadaSubscriptionData = {
  pair: string;
  value: number;
};
