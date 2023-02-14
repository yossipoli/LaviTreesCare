import Iframe from 'react-iframe'
import './App.css';
import Pics from './components/Carusel';
import AlertComponent from './components/Alert';
import Title from './components/Title';
import LoadingButton from './components/LoadingButton';
import Kaka from './components/Kaka';
import ModalComponent from './components/Modal';
import { useState } from 'react';
import pics from './components/data/pic';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Title content={'לביא טיפוח עצים'} />
        <AlertComponent alert={
          {
            head: 'שירותי אילנאות כוללים',
            start: '0506080043',
            content: "treeslavi@gmail.com",
            end: 'שלמה אבן גבירול 71, תל אביב יפו',
          }
        } />
        <Kaka/>
        <Pics pics={pics} />
        <LoadingButton setModal={() => setIsModalOpen(!isModalOpen)} />
        {isModalOpen && <ModalComponent setModal={() => setIsModalOpen(false)} />}
        <Iframe 
          width="640" 
          height="360" 
          src="https://www.youtube.com/embed/SBYn0a5TLQI" 
          title="גיזום עצים - מתי תדעו שצריך? המדריך המלא" 
          frameBorder="0" 
          allow= 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
          />
      </header>
    </div>
  );
}

export default App;
