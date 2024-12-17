import "./App.css";
import MainProvider from "./context/MainContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <MainProvider>
        <HomePage />
      </MainProvider>
    </div>
  );
}

export default App;
