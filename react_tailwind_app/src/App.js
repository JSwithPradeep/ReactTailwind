
import './App.css';
import Banner from './component/Banner';
import Card from './component/Card';
import Header from './component/Header';
import  Medium  from './component/Medium';
import News from './component/News';
import Footer from './component/footer';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Medium/>
      <News/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
