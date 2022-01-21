import "./App.css";
import Details from "./components/Details";
import ShowPictures from "./components/ShowPictures";

function App(props) {
  return (
    <div className="App">
      <header>
        <h1 className="title">Photogun</h1>
      </header>
      <Details />
      <ShowPictures />
      <footer>
        <p>
          If you are interested in pro photographers then don't hesitate to
          contact us
        </p>
        <a className="link" href="">
          contact-us
        </a>
      </footer>
    </div>
  );
}

export default App;
