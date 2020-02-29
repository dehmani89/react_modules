import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome/Welcome";
import Example1 from "./components/JSON/Example1";
import JsonExample from "./components/JSON/JsonExample";
import Modal1Example from "./components/Models/Modal1Example";
import TableExample from "./components/Table/Table";

function App() {
  return (
    <div className="App">

<hr/>
        {/*Adding the Welcome component*/}
        <h2>This is a Welcome Component</h2>
        <Welcome name="Amine Dehmani" style="notice notice-success"/>
<hr/>
        {/*Reading JSON data from a file*/}
        <h2>This is how to read JSON from a file</h2>
        <Example1 style="notice notice-info"/>
<hr/>
        {/*Reading JSON data from an object*/}
        <h2>This is how to read JSON from a defined JSON Object</h2>
        <JsonExample style="notice notice-danger" element="0" />
        <JsonExample style="notice notice-danger" element="1" />
        <JsonExample style="notice notice-danger" element="2" />
<hr/>

        {/*Example of Modal*/}
        <h2>This is an example of Modal Window</h2>
        <Modal1Example size="lg" style="notice notice-warning"/>
<hr/>

        {/*Example of Table*/}
        <h2>This is an example of a Table</h2>
        <TableExample style="notice notice-default"/>
<hr/>


<hr/>
<hr/>
<hr/>
<hr/>
<hr/>


    </div>
  );
}

export default App;
