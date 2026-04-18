import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import cara2 from './cara2.PNG'; 
import './App.css';

const handleRedirect = () => {
  window.open("https://utd-team-auguh.atlassian.net/jira/software/projects/DOOD/boards/1", "_blank", "noopener,noreferrer");
};

const Dashboard = ({ user }) => (
  <div className="App-header">
    <img src={cara2} width="15%" style={{ borderRadius: '50%' }} alt="Perfil" />
    <h1>Bienvenido(a), {user.name}</h1>
    <h2>EVALUACIÓN PARCIAL 3</h2>
    <div style={{ padding: '20px' }}>
      
      <a 
        href="/public/docs/Especificaciones de Requerimientos de Software.pdf" 
        download="Especificaciones de Requerimientos de Software.pdf"
        className="download-link"
      >
        <button style={{ padding: '10px', margin: '10px', cursor: 'pointer' }}>
          DESCARGAR MI DOCUMENTO ERS 
        </button>
      </a>
      
    </div>
    <button onClick={handleRedirect} style={{ padding: '10px', margin: '10px', cursor: 'pointer' }}>
      TABLERO JIRA PROYECTO SIBA
    </button>
    <br/>
    {/* Botón para cerrar sesión */}
    <button onClick={() => window.location.reload()} style={{ padding: '10px', margin: '10px', cursor: 'pointer', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '5px' }}>
      CERRAR SESIÓN PARCIAL 3
    </button>
  </div>
);

// --- LA APLICACIÓN PRINCIPAL ---
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const clientId = "47877156539-u5un3p40rufod3k6p6vvvto3t8bebm4q.apps.googleusercontent.com";

  const onSuccess = (response) => {
    console.log("Login Success:", response);
    setUserData({ name: "Jesus Vazquez" }); 
    setIsLoggedIn(true);
  };

  const onError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        {isLoggedIn ? (
          <Dashboard user={userData} />
        ) : (
          <header className="App-header">
            <img src={cara2} className="App-avatar" alt="logo" style={{ width: '30%', height: '30%', borderRadius: '10px' }}/>
            <h1 className="App-title">Evaluación parcial 1, 2 y 3</h1>
            <h2 className="App-student">Alumno(a): Jesus Vazquez Hernandez</h2>
            
            <div className="App-links-container">
              <a className="App-link" href="https://www.linkedin.com/in/jesus-vazquez-hernandez-14bb793a4/" target="_blank" rel="noreferrer">
                LINKED IN DE MI PERFIL
              </a><br/><br/>
              <a className="App-link" href="/documentacion.html">
                DOCUMENTACION PARCIAL 1
              </a><br/><br/>
              <a className="App-link" href="/metodologia.html">
                DOCUMENTACION PARCIAL 2
              </a>
            </div>

            <div style={{ margin: '30px' }}>
              <GoogleLogin 
                onSuccess={onSuccess} 
                onError={onError}
                useOneTap
              />
            </div>
          </header>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;