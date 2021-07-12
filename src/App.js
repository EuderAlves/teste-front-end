import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/global.scss";

function App() {
  return (
    <div id="app">
      <header>
        <Header />
      </header>
      <body>
        <Main />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
