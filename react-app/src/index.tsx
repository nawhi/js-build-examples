import * as React from 'react';
import { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";

type DelayProps = React.PropsWithChildren<{ amount: number }>;

const Delay = ({ amount, children }: DelayProps) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handle = setTimeout(() => setShow(true), amount);
    return () => clearTimeout(handle);
  });

  return show ? <>children</> : null;
};

const App = () => (
  <div>
    <Delay amount={1000}>
      <h1>Hello, world</h1>
    </Delay>
    <Delay amount={2000}>
      <p>This is a very simple React app.</p>
    </Delay>
    <Delay amount={4000}>
      <p>It doesn't do anything exciting.</p>
    </Delay>
  </div>
);

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
