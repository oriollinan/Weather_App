import { Data } from "../App";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>
}

export function LocationInput({ input, setInput }: Props) {
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setInput(event.target.value);
  }

  return (
    <div className="flex justify-center mt-8">
        <div className="flex items-center">
            <label className="block text-gray-700 text-lg font-bold mr-2" htmlFor="input">
                City:
            </label>
            <input
              className="appearance-none border-2 border-gray-400 rounded-lg w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-indigo focus:border-indigo-500 align-middle"
              type="text"
              placeholder="Enter a city"
              value={input}
              onChange={handleInput}
            />
        </div>
    </div>
  );
}
