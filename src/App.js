import logo from './logo.svg';
import './App.css';
import {DadaProvider} from './Components/context';
import Puti from './Components/Puti';
function App() {
  return (
    <div className="App">
    	<DadaProvider value="Message from Dada Provider">
     		<Puti/>
     	</DadaProvider>
     </div>
  );
}

export default App;
