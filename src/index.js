import React from 'react';
import ReactDOM from 'react-dom';

// const h1 = React.createElement("h1",{
//   id:"test"
// },"Hello world");

// JSX
// const h1 = <h1 id="test2"> Hello world 2</h1>

// const ul = <ul>
//   <li>List item 1</li>
//   <li>List item 2</li>
// </ul>

// const app=<div>
//   {h1}
//   {ul}
//   {5+10}
// </div>



function App() {
    return (
        <React.Fragment>
            <h1>Hellow world</h1>
            <p>loraskdjlskjdslk aksjdaksjdk ajslkd jaslk jdalk kjsld ja dakslj lals jdla ksjd ;askld jassj 
                kajsdlkasjdalskjdaskljdalkjdaslkdjslakd askdj askl ja
                j alksjd lakjs dajdl
            </p>

            
        </React.Fragment>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"))