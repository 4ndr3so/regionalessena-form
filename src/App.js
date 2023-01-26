import logo from './logo.svg';
import './App.css';
import FormPrinci from "./components/FormPrinci/FormPrinci"
import StoreProvider from './store/StoreProvider';
function App() {
  return (
    <div className="App">
      <StoreProvider>
        <FormPrinci>
          
        </FormPrinci>
      </StoreProvider>
    </div>
  );
}

export default App;
