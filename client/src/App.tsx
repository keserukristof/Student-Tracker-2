import logo from './logo.svg';
import { Button } from './components/common/Button/button.component';
import { NavbarComponent } from './components/common/Navbar/navbar.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent navBarItems={[{title:'Home', href:'/', icon:<FontAwesomeIcon icon={faHouse} />}]}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button label="Click me" onClick={() => alert('Hello world!')} variant='primary' />
      </header>
    </div>
  );
}

export default App;
