import './App.css';
import RowPost from './components/RowPost/RowPost';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import * as urls from './urls'; // Specify the file extension

function App() {

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={urls.originals} title={'Netflix Originals'} sizeClass='poster' />
      <RowPost url={urls.horror} title={'Horror'} sizeClass='smallPoster' />
      <RowPost url={urls.comedy} title={'Comedy'} sizeClass='smallPoster' />
    </div>
  );
}

export default App;
