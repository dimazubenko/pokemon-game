import './App.css';
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import Footer from './Components/Footer/Footer';
import Bg1 from './assets/bg1.jpg';
import Bg2 from './assets/bg3.jpg';




function App() {
  return (
    <div className="App">
      <Header title='This is title!!!' descr='This is Description!'/>
      <Layout id={1} title='This is title!!!' descr='This is Description' urlBg={Bg1}/>
      <Layout id={2} title='This is title' descr='This is Description' colorBg='#657' />
      <Layout id={3} title='This is title' descr='This is Description' urlBg={Bg2}/>
      <Footer />
    </div>
  );
}

export default App;
