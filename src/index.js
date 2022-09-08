import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

// This is a custom component

// function ReactInfo() {
//     return (
//         <div className={"App-info"}>
//             <Header/>
//             <MainContent/>
//             <Footer/>
//         </div>
//     )
// }
//
// ReactDOM.render(<ReactInfo/>, document.getElementById("root"));

function ReactApp() {
    return (
        <div>
            <Navbar/>
            <Main/>
        </div>
    )
}

ReactDOM.render(<ReactApp/>, document.getElementById("react-root"));
// ReactDOM.createRoot(document.getElementById("react-root")).render(<ReactApp/>)