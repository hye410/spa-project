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
import Top from './pages/Top';
import Pants from './pages/Pants';
import HomeWear from './pages/HomeWear';
import ProductDetail from './pages/ProductDetail';
import BestProductDetail from './pages/BestProductDetail';
import OuterProductDetail from './pages/OuterProductDetail'
import TopProductDetail from './pages/TopProductDetail';
import PantsProductDetail from "./pages/PantsProductDetail";
import NotFound from './pages/NotFound';
import Toy from './pages/Toy';

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
          <Route path="/best">
            <Route index element={<Best />} />;
            <Route path=":courseDetail" element={<BestProductDetail />}/>
          </Route>;
          <Route path="/outer">
            <Route index element={<Outer />} />;
            <Route path=":courseDetail" element={<OuterProductDetail />}/>
          </Route>;
          <Route path="/top">
            <Route index element={<Top />} />;
            <Route path=":courseDetail" element={<TopProductDetail />}/>
          </Route>;
          <Route path="/pants">
            <Route index element={<Pants />} />;
            <Route path=":courseDetail" element={<PantsProductDetail />}/>
          </Route>;
          <Route path="/homewear">
            <Route index element={<HomeWear />} />;
            <Route path=":courseDetail" element={<ProductDetail />}/>
          </Route>;
          <Route path="*" element={<NotFound />}/>
          <Route path="/toy" element={<Toy />} />
        </Routes>
      </App>
    </BrowserRouter>
  )
}

export default Main;