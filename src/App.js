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
      <footer className="App-footer">
        This project was coded by Araz Kubtanjian and is{" "}
        <a
          href="https://github.com/araz0515/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
