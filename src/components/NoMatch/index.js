import React from "react";

function NoMatch() {

  React.useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>404</h1>
        <h4>Not Found</h4>
        <a href="/">Redirect to home page</a>
      </header>
    </div>
  );
}

export default NoMatch;