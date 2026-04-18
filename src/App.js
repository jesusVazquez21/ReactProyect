import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import cara2 from './cara2.PNG'; 
import './App.css';

const Dashboard = ({ user }) => {
  const handleRedirect = () => {
    window.open("https://utd-team-auguh.atlassian.net/jira/software/projects/DOOD/boards/1", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="App-header">
      <img src={cara2} width="15%" style={{ borderRadius: '50%' }} alt="Perfil" />
      <h1>Bienvenido(a), {user.name}</h1>
      <h2>EVALUACIÓN PARCIAL 3</h2>
      <div style={{ padding: '20px' }}>
        <a 
          href="/mi_documento.pdf" 
          download="Manual_Jesus_Vazquez.pdf"
          className="download-link"
        >
          <button style={{ padding: '10px', cursor: 'pointer' }}>
            DESCARGAR MI DOCUMENTO ERS
          </button>
        </a>
      </div>
      <button onClick={handleRedirect} style={{ padding: '10px', margin: '10px', cursor: 'pointer' }}>
        TABLERO JIRA PROYECTO DOOD
      </button>
      <br/>
      <button onClick={() => window.location.reload()} style={{ padding: '10px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        CERRAR SESIÓN
      </button>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  // ID de cliente (Asegúrate de configurar el tuyo en Google Cloud Console)
  const clientId = "941946385897-fg0819kmq26rhoj75giiq6v9lupbcsp4.apps.googleusercontent.com";

  const onSuccess = (response) => {
    console.log("Login Success:", response);
    // Siguiendo la lógica de tu profesor:
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
            <img src={cara2} className="App-avatar" alt="logo" style={{ width: '250px', borderRadius: '20px' }}/>
            <h1>ANÁLISIS Y DISEÑO DE SOFTWARE</h1>
            <h2>Alumno: Jesus Vazquez Hernandez</h2>
            
            <div className="App-links-container" style={{ marginBottom: '20px' }}>
              <a className="App-link" href="https://www.linkedin.com/in/jesus-vazquez-hernandez-14bb793a4/" target="_blank" rel="noreferrer">
                LINKEDIN PERFIL
              </a><br/>
              <a className="App-link" href="/documentacion.html">DOC PARCIAL 1</a><br/>
              <a className="App-link" href="/metodologia.html">DOC PARCIAL 2</a>
            </div>

            {/* BOTÓN DE GOOGLE DIRECTO (Sin archivos externos) */}
            <div style={{ margin: '20px', background: 'white', padding: '10px', borderRadius: '5px' }}>
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