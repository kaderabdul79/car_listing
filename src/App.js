import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="hotels">
            <Route path=":hotelId" element={<Hotel />} />
            <Route index element={<List />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>,
    </div>
  );
}

export default App;
