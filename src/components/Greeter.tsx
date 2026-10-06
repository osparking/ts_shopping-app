import { JSX } from "react";
interface GreeterProp {
    person: string
}

function Greeter(props: GreeterProp): JSX.Element {
  return <h1>{props.person}, 안녕하세요?</h1>;
}

export default Greeter;
