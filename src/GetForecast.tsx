import { Data } from "./App";

interface Props {
    data: Data,
    hidden: boolean
}

export function GetForecast({data, hidden}: Props): JSX.Element[] {
    const KELVIN = 273.15;

    let elements: JSX.Element[] = [];

    function getWeather(weather: string): string {
        switch (weather) {
          case ('Clouds'): return ('⛅');
          case ('Rain'): return ('🌧');
          case ('Snow'): return ('🌨');
          default: return ('🌞');
        }
    }

    for (let i: number = 0; !hidden && i < 5; i +=4) {
      let weather = data.list[i].weather[0].main
      let temp = Math.round(data.list[i].main.temp - KELVIN);
      let date = new Date(data.list[i].dt * 1000).toLocaleString("en-US", {dateStyle: "long"});
      elements.push(
        <div key={date} className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 space-x-4 mt-8 w-full">
          <h1 hidden={hidden}>{date}</h1>
          <h1 hidden={hidden}>{getWeather(weather)}</h1>
          <h1 hidden={hidden}>{temp}ºC</h1>
        </div>
      );
    }
    return (elements);
};
