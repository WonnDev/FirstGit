import logo from './logo.svg';
import './App.scss';
import MyComponent1 from './Ex/MyComponent1';
import MyComponent2 from './Ex/MyComponent2';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World with React.js (w)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent1/>
        <MyComponent2/>
      </header>
    </div>
  );
}

export default App;
