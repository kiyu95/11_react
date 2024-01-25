import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import Menu from "./pages/Menu";
import MenuSearchResult from "./pages/MenuSearchResult";
import MenuDetails from "./pages/MenuDetails";

function App() {

  // npm i react-router-dom

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="main" element={<Main/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="menu" element={<Menu/>}>
            <Route index element={<Menu/>}/>
            <Route path=":menuCode" element={<MenuDetails/>}/> {/* :의 의미 : pathVariable, 변수(동적으로 변하는 값)를 넣을때 사용한다. */}
            <Route path="search" element={<MenuSearchResult/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
