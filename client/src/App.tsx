import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res: any) => res.json())
      .then((data: any) => {
        setData(data.message);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {data}
        </p>
      </header>
    </div>
  );
}

export default App;
