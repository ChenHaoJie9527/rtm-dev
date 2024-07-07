import "./App.module.scss";
import HeaderTop from "./components/HeaderTop";
import SearchInput from "./components/SearchInput";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      <Header>
        <HeaderTop />
        <SearchInput />
      </Header>
    </>
  );
}

export default App;
