import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

function App({children}){
  return(
    <>
      <Header />
      <Nav />
      <div id="wrap">{children}</div>
      <Footer />
    </>
  )
}

export default App;
