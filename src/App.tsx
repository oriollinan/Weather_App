import { useEffect, useState } from "react";
import "./App.css";
import { City } from "./components/City";
import { LocationInput } from "./components/LocationInput";
import { GetData } from "./GetData";
import { Submit } from "./components/Submit";
import { GetForecast } from "./GetForecast";
import { NavBar } from "./components/NavBar";

export interface Data {
  cod: string;
  message: number;
  cnt: number;
  list: [
    {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      clouds: {
        all: number;
      };
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
      visibility: number;
      pop: number;
      sys: {
        pod: string;
      };
      dt_txt: string;
    }
  ];
}

function App() {
  const [input, setInput]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");
  const [city, setCity]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");
  const [data, setData]: [Data, React.Dispatch<React.SetStateAction<Data>>] =
    useState({} as Data);
  const [hidden, setHidden]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(true);

  useEffect(() => {
    const handleEnter = async (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setCity(input);
      setInput(""); 
    };
    document.addEventListener("keypress", handleEnter);
    return () => {
      document.removeEventListener("keypress", handleEnter);
    };
  }, [input]);

  useEffect(() => {
    const fetchData = async () => {
      const enterData: Data = await GetData({ city: city });
      setData(enterData);
      setHidden(false);
    };
    if (city.length > 0)
      fetchData();
  }, [city]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/[a-zA-Z]/) && key !== "Backspace") return;
      setHidden(true);
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [input]);

  return (
    <div>
      <NavBar></NavBar>
      <LocationInput input={input} setInput={setInput} />
      <Submit input={input} city={city} setInput={setInput} setCity={setCity} setData={setData} setHidden={setHidden}></Submit>
      <City city={city} hidden={hidden}></City>
      {GetForecast({ data, hidden })}
    </div>
  );
}

export default App;
