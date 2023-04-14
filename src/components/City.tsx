interface Props {
  city: string;
  hidden: boolean;
}

export function City({ city, hidden }: Props) {
  return (
    <h1 className="text-4xl text-center font-bold font-geneva mt-8" hidden={hidden}>
      {city}
    </h1>
  );
}
