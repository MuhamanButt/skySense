import './App.css';
import Header from './components/header';
import bgnight from './components/images/bgnight.png'
import bgday from './components/images/bgday.png'
import SearchBar from './components/SearchBar';
import WeatherImage from './components/WeatherImage';
import wimg01d from './components/images/01d.png'
import Details from './components/Details';

function App() {
  return (
    <div className="App container-fluid" style={{ backgroundImage: `url(${bgnight})`,height:"100vh"}}>
      <Header></Header>
      <SearchBar></SearchBar>
     <div className="row justify-content-center">
     <Details></Details>
      <WeatherImage image={wimg01d}></WeatherImage>
     </div>
    </div>
  );
}

export default App;
