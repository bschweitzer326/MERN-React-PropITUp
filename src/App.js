import React from 'react';
import './App.css';

import PersonCardComponent from './components/PersonCardComponent';

function App() {
  return (
    <div className="container">

      <div>
        <PersonCardComponent lastName={"Doe"} firstName={"Jane"} age={45} hairColor={"Black"}/>
      </div>

      <div>
        <PersonCardComponent lastName={"Smith"} firstName={"John"} age={88} hairColor={"Brown"}/>
      </div>

      <div>
        <PersonCardComponent lastName={"Fillmore"} firstName={"Millard"} age={50} hairColor={"Brown"}/>
      </div>

      <div>
        <PersonCardComponent lastName={"Smith"} firstName={"Maria"} age={62} hairColor={"Brown"}/>
      </div>

    </div>
  );
}

export default App;
