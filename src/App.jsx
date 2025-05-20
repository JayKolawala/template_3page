import { useState } from 'react';
import './App.css'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';

function App() {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  return (
    <>
      <Dashboard
        onAboutClick={() => setShowAboutModal(true)}
        onContactClick={() => setShowContactModal(true)}
      />

      {showAboutModal && <AboutMe onClose={() => setShowAboutModal(false)} />}

      {showContactModal && (
        <Contact onClose={() => setShowContactModal(false)} />
      )}
    </>
  );
}

export default App
