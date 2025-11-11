// import logo from './logo.svg';
// import './App.css';

import {Header} from './header.js'
import {Posts} from './posts.js'
import { Nav } from './nav.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
    </div>
  );
}

export default App;

function Section(){
  return(
    <div style={{width:'700px', margin:'auto', display: 'flex', gap: '20px'}}>
      <Posts />
      <Nav />
    </div>
  );
}