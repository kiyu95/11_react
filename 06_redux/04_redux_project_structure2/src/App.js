import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Main from "./page/Main";
import Menus from "./page/Menus";
import MenuDetail from "./page/MenuDetail";

function App() { // npm i react-router-dom
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="menu">
            <Route index element={<Menus/>}/>
            <Route path=":id" element={<MenuDetail/>}/>
            <Route path="regist" element={<MenuRegist/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
