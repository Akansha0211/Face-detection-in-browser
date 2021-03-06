import React, {useEffect, useState} from 'react';
import {Form} from 'react-bootstrap';
import axios from 'axios';
import './Register.css';



function Register() {
    const [username, setUsername] = useState('');
    const [val, setVal] = useState('');

    const register = () =>{
        axios.post("http://localhost:5000/video_feed",{
            username : username
        })
    }
    
    const login = () =>{
        axios.post("http://localhost:5000/login",{
            username: username
        })
    }

    var today = new Date();
    var date = today.getDate() + "-" + (today.getMonth()+1) + "-" + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes();
    var day = today.getDay();
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var weekday = dayOfWeek[day]

    return (      
        <div className="container">
           <div className="box">
           <Form method="POST" action="/video_feed">
               <div className="form-group-1">
                   {/*<label for="username">Username</label>*/}
                   <input type="text" id="username" placeholder="Username" name="username" autoComplete="off" required value={username} onChange={e=>setUsername(e.target.value)}></input>
               </div>
               <div className="form-group">
                   <button type="submit" className="btn" onClick={register}>Register Me</button>
               </div>

           </Form>
           <Form method="POST" action="/login">
               <div className="form-group">
                   <button type="submit" className="btn" onClick={login}>SignIn</button>
                </div>
           </Form>
           </div>

           <div className="dt">
                <h1>{time}</h1>
                <h2>{date}</h2>
                <h3>{weekday}</h3>
                <h3></h3>
           </div>

            <div className="copyright">
                <p>&copy;{new Date().getFullYear()} - All Rights Reserved.</p>
            </div>

        </div>
    )
}

export default Register
