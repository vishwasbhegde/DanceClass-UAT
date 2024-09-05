import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Nav,Button } from 'react-bootstrap';
import './admin.css'

function LeftSidebar() {
    const [show, setShow] = useState(false);
  return (
    <>
    <Button
        className="d-lg-none btn-secondary"
        onClick={() => setShow(!show)}
        aria-controls="sidebar"
        aria-expanded={show}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </Button>
      <div className={`d-lg-flex flex-column vh-100 bg-light sidebar ${show ? 'd-flex' : 'd-none'}`} style={{ width: '150px' }} id="sidebar">
        <Nav className="flex-column">
        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <div className="nav-item">
                <Nav.Link as={Link} to="/all-lessons">Lessons</Nav.Link>
                <div className="submenu">
                    <Nav.Link as={Link} to="/all-lessons">All Lessons</Nav.Link>
                    <Nav.Link as={Link} to="/add-new-lesson">Add New Lesson</Nav.Link>
                    <Nav.Link as={Link} to="">Categories</Nav.Link>
                </div>
            </div>
          <div className="nav-item">
          <Nav.Link as={Link} to="">Categories</Nav.Link>
          <div className="submenu">
            <Nav.Link as={Link} to="">History</Nav.Link>
            <Nav.Link as={Link} to="">Team</Nav.Link>
          </div>
          </div>
          <Nav.Link as={Link} to="">Services</Nav.Link>
          <Nav.Link as={Link} to="">Contact</Nav.Link>
        </Nav>
      </div>
    </>
  )
}

export default LeftSidebar