import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function ReactApp() {
    return (
        <div>
            <Navbar/>
            <Main/>
        </div>
    )
}

ReactDOM.render(<ReactApp/>, document.getElementById("react-root"));
