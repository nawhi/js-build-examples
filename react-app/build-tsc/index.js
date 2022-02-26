import * as React from 'react';
import { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
const Delay = ({ amount, children }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handle = setTimeout(() => setShow(true), amount);
        return () => clearTimeout(handle);
    });
    return show ? React.createElement(React.Fragment, null, "children") : null;
};
const App = () => (React.createElement("div", null,
    React.createElement(Delay, { amount: 1000 },
        React.createElement("h1", null, "Hello, world")),
    React.createElement(Delay, { amount: 2000 },
        React.createElement("p", null, "This is a very simple React app.")),
    React.createElement(Delay, { amount: 4000 },
        React.createElement("p", null, "It doesn't do anything exciting."))));
export default App;
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
