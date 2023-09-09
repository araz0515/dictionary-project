import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          {" "}
          <Dictionary defaultValue="sunset" />
        </main>
      </div>
      <footer className="App-footer">Coded by Araz Kubtanjian</footer>
    </div>
  );
}

export default App;
