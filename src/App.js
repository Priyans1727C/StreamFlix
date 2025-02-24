import React from 'react';
import './App.css';
import Header from './Components/Header';
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import DetailsPage from './pages/DetailsPage2';



function App() {
  return (
    <>
    {/* <DetailsPage/> */}
      <main className='pb-14 lg:pb-0'>
        <Router>
          
          <Header />
          <AppRoutes />
        </Router>
      </main>
    </>
  );
}

export default App;
