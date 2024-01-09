import React from "react";
import ReactDOM from "react-dom/client";

// Local Imports
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Body";

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