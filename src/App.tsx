import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import RowPost from './components/RowPost/RowPost';
import * as urls from './urls'; // to fix
import './App.css';

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
