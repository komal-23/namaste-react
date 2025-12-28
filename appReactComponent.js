import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => (
    <div className="heading"><h1>Hello Heading I am inside Name component</h1></div>
)
// component composition - one component in another component
// wrap multiple jsx in div or fragment
const Name = () => (
    <div>
        <Heading /> 
        <h3>I am Komal</h3>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Name />);//render component