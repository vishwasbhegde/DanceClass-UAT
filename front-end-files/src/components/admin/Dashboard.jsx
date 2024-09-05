import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Nav,Button } from 'react-bootstrap';
import LeftSidebar from './LeftSidebar';
import TeachersDetails from './TeachersDetails';


function Dashboard() {
    
  return (
    <>
    
    <div className="d-flex">
      <LeftSidebar />
      <div className="flex-grow-1 contentLayout">
          <h3>Dashboard</h3>
          <TeachersDetails />
      </div>
    </div>
    </>
  )
}

export default Dashboard