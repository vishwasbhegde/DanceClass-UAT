import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/global-components/Header';
import Footer from './components/global-components/Footer';
import RegistrationForm from './components/forms/RegistrationForm';
import Dashboard from './components/admin/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/forms/Login';
import Homepage from './components/pages/home/Homepage';
import AllLessons from './components/admin/AllLessons';
import AddNewLesson from './components/admin/AddNewLesson';



function App() {

  const[data, setData] = useState('');

// const getData = async()=>{
//   const response = await Axios.get('http://localhost:5001/getData');
//   setData(response.data);
//   console.log(data);
// }

// useEffect(()=>{
//   getData();
// },[]);  
  return (
   
    <>
     <Router>
     <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all-lessons" element={<AllLessons />} />
        <Route path="/add-new-lesson" element={<AddNewLesson />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
      <Footer />
      </div>
    </Router>
    </>
   
  );
}

export default App;
