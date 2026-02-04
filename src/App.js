import Cara from './cara.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Cara} className="App-avatar" alt="logo" />
        <h1 className="App-title">Evaluación parcial 1</h1>
        <h2 className="App-student">Alumno(a): Jesus Vazquez Hernandez</h2>
        
        <div className="App-links-container">
          <a className="App-link" href="https://www.linkedin.com/in/jesus-vazquez-hernandez-14bb793a4/" target="_blank" rel="noreferrer">
            LINKED IN DE MI PERFIL
          </a>
          {/* ENLACE AL NUEVO HTML */}
          <h1> </h1>
          <a className="App-link" href="/documentacion.html">
            DOCUMENTACION PARCIAL 1
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;