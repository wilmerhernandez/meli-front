import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app/assets/app.scss";
import Search from "./app/components/search/Search";
import ListProduct from "./app/components/listProduct/ListProduct";
import Details from "./app/components/details/Details";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Search />
        <Routes>
          <Route path="/" element={<ListProduct />}/>
          <Route path="products" element={<ListProduct />} />
          <Route path="products/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
