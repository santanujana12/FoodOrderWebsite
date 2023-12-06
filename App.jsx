import React from "react";
import ReactDOM from "react-dom/client";

// Local Imports
import Header from "./src/Header/Header";
import Body from "./src/Body/Body";

const App = () => {
    return (
        <>
            <Header />
            <Body/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);