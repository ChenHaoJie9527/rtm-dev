import "./App.scss";
import HeaderTop from "./components/HeaderTop";
import JodCard from "./components/JobCard";
import SearchInput from "./components/SearchInput";
import Header from "./layouts/Header";
import Main from "./layouts/Main";

function App() {
  return (
    <div className="flex w-full flex-col h-screen">
      <Header className="">
        <HeaderTop />
        <SearchInput />
      </Header>
      <Main>
        <JodCard />
      </Main>
    </div>
  );
}

export default App;
