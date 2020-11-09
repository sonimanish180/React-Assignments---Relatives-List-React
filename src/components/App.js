import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const relativeList = [
      { name: "Ajay", key: "relativeListItem1" },
      { name: "Pavitra", key: "relativeListItem2" },
      { name: "Himanshu", key: "relativeListItem3" }
    ];

    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol key="relativeList">
          {relativeList.map((relative) => (
            <li key={relative.key}>{relative.name}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
