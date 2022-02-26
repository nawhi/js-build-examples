"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Delay = ({ amount, children }) => {
    const [show, setShow] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const handle = setTimeout(() => setShow(true), amount);
        return () => clearTimeout(handle);
    });
    return show ? children : null;
};
const App = () => (react_1.default.createElement("div", null,
    react_1.default.createElement(Delay, { amount: 1000 },
        react_1.default.createElement("h1", null, "Hello, world")),
    react_1.default.createElement(Delay, { amount: 2000 },
        react_1.default.createElement("p", null, "This is a very simple React app.")),
    react_1.default.createElement(Delay, { amount: 4000 },
        react_1.default.createElement("p", null, "It doesn't do anything exciting."))));
exports.default = App;
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById("root"));
