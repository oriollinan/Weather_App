import { Data } from "../App";
import { GetData } from "../GetData";

interface Props {
  input: string;
  city: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Submit({ input, city, setInput, setCity, setData, setHidden }: Props) {
  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setCity(input);
    setInput("");
    const data: Data = await GetData({ city: city });
    setData(data);
    setHidden(false);
  }

  return (
    <div className="flex justify-center mt-4">
      <button onClick={handleClick} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-indigo mx-auto">
        Get Weather
      </button>
    </div>
  );
}
