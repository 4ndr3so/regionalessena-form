import logo from './logo.svg';
import './App.css';
import FormPrinci from "./components/FormPrinci/FormPrinci"
import SelecionRegional from "./components/SelecionRegional/SelecionRegional"
import StoreProvider from './store/StoreProvider';
import VistaIntermedia from './components/VistaIntermedia/VistaIntermedia';
function App() {
  return (
    <div className="App container">

      <StoreProvider>
         <VistaIntermedia></VistaIntermedia> 
        
      </StoreProvider>
    </div>
  );
}

export default App;
