import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

// This is a custom component
function ReactInfo() {
    return (
        <div className={"App-info"}>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<ReactInfo/>, document.getElementById("root"));
