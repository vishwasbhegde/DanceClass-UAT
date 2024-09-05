import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react';
// const cors = require('cors');
// app.use(cors());


function TeachersDetails() {

  const[teacherCount, setTeacherCount] = useState('');

const getData = async()=>{
  const response = await Axios.get('http://localhost:3010/users/teachersCount');
  setTeacherCount(response.data[0].teacherCount);
  console.log('teacherCount',response.data[0].teacherCount);
  // console.log('count=',teacherCount);
}

useEffect(()=>{
  getData();
},[]); 


  return (
    <>
    
    <div className="card adminCards">
        <div className="card-body">
            <div className="lead">Total Teachers registerd</div>
                <h2 className="card-title">{teacherCount}</h2>
                    <p className="small text-muted">Oct 1 - Dec 31,<i className="fa fa-globe"></i> Worldwide</p>
        </div>
    </div>
    </>
  )
}

export default TeachersDetails