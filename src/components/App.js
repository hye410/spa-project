import Header from './Header';
import Footer from './Footer';

function App({children}){
  return(
    <>
      <Header />
      <div id="wrap">{children}</div>
      <Footer />
    </>
  )
}

export default App;
