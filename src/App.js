import logo from './logo.svg';
import './App.css';
import Functional from './Components/Functional';
import {Provider} from './Components/context';
function App() {
  return (
    <div className="App">
    	<Provider value="Message from Provider" name="Anwar">
     		<Functional/>
     	</Provider>
     </div>
  );
}

export default App;
