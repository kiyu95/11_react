import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./page/Main";
import List from "./page/List";
import WorkDetail from "./page/WorkDetail";
import WorkSearchResult from "./page/WorkSearchResult";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="main" element={<Main/>}/>
          <Route path="list">
            <Route index element={<List/>}/>
            <Route path=":postCode" element={<WorkDetail/>}/>
            <Route path="search" element={<WorkSearchResult/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
