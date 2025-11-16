// import logo from './logo.svg';
// import './App.css';

import {Header} from './header.js'
import {Posts} from './posts.js'
import { Nav } from './nav.js';

function App() {
  return (
    <div className="App">
      <Header head= 'First React Project'/>
      <div style={{width:'700px', margin:'auto', display: 'flex', gap: '20px'}}>
        <Posts prop= "a prop from props obj">
          <div style={{backgroundColor: 'red', padding: '3px 8px', textAlign: 'center'}}>
            this from the childers obj
          </div>
        </Posts>
        <Nav />
      </div>
    </div>
  );
}

export default App;
