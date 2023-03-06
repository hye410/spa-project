import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./components/App";
import Home from './pages/Home';
import About from './pages/About';
import Stores from './pages/Stores';
import Event from './pages/Event';
import Event1 from './pages/Event1';
import Event2 from './pages/Event2';
import LogIn from './pages/LogIn';
import Cart from './pages/Cart';
import New from './pages/New';
import Best from './pages/Best';
import Outer from './pages/Outer';
import Tops from './pages/Tops';
import Pants from './pages/Pants';
import HomeWear from './pages/HomeWear';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
function Main(){
  return(
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/about" element={<About />} />;
          <Route path="/stores" element={<Stores />} />;
          <Route path="/event">
          <Route index element={<Event />} />;
            <Route path="/event/event1" element={<Event1 />} />;
            <Route path="/event/event2" element={<Event2 />} />;
          </Route>
          <Route path="/login" element={<LogIn />} />;
          <Route path="/cart" element={<Cart />} />;
          <Route path="/new">
            <Route index element={<New />} />;
            <Route path=":courseDetail" element={<ProductDetail />}/>
          </Route>;
          <Route path="/new">
            <Route index element={<New />} />;
            <Route path=":courseDetail" element={<ProductDetail />}/>
          </Route>;
          <Route path="/best">
            <Route index element={<Best />} />;
            <Route path=":courseDetail" element={<ProductDetail />}/>
          </Route>;
          <Route path="/outer">
            <Route index element={<Outer />} />;
            <Route path=":courseDetail" element={<ProductDetail />}/>
          </Route>;
          <Route path="/tops">
            <Route index element={<Tops />} />;
            <Route path=":courseDetail" element={<ProductDetail />}/>
          </Route>;
          <Route path="/pants">
            <Route index element={<Pants />} />;
            <Route path=":courseDetail" element={<ProductDetail />}/>
          </Route>;
          <Route path="/homewear">
            <Route index element={<HomeWear />} />;
            <Route path=":courseDetail" element={<ProductDetail />}/>
          </Route>;
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </App>
    </BrowserRouter>
  )
}

export default Main;