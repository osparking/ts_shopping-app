import { JSX } from "react";
interface GreeterProp {
  person: string;
}

function Greeter({ person }: GreeterProp): JSX.Element {
  return <h1>{person}, 안녕하세요~</h1>;
}

export default Greeter;
