import { JSX } from "react";

function Greeter(props: { person: string }): JSX.Element {
  return <h1>{props.person}, 안녕하세요?</h1>;
}

export default Greeter;
