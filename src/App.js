import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/Navbar'; 
import CarouselCard from './components/CarouselCard';

function App() {
  return (
    <div className="App">
      <header>
        <CustomNavbar/>
        <h1>Welcome</h1>
      </header>
      <main>
        <CarouselCard/>

      </main>
 
    </div>
  );
}

export default App;
