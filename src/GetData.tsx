import { API_KEY } from "./config";
import { Data } from "./App";

interface Props {
    city: string
}

export async function GetData({city}: Props): Promise<Data> {
    const response: Response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)
    if (!response.ok)
        throw new Error('Network response failed');
    const data: Promise<Data> = response.json();
    return (data);
}
