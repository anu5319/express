import React,{ useEffect, useState }from 'react'
import styled from "styled-components"
import icon from '../assets/icon.png'
import 'bootstrap/dist/css/bootstrap.css';

const  Container=styled.div`

    background-image: linear-gradient( to right, #ff5722, #ff9800);
   margin-top: -50px;
   width: 1550px;
height: 1000px;
.register-left{
    text-align: center;
    color: #fff;
    padding-bottom: 100px;
}
.register-left img{
    margin-top: 200px;
    margin-bottom: 18px;
    width: 80px;
    margin-top: 250px;
}
.register-left p{
    padding: 20px 20px 0;
}
.register-left .btn-primary{
    border-radius: 1.5rem;
    border: none;
    width: 120px;
    background: #f8f8f8;
    font-weight: 600;
    color: #555;
    margin-top: 20px;
    padding: 10px;
}
.register-right{
    border: none;
    background: #f8f8f8;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
    padding: 50px;
    margin: auto;
    margin-top: 250px;
}
.register-right h2{
    text-align: center;
    margin-bottom: 10px;
    color: #555;
}
.register-form{
    padding: 30px;
}
.register-left img{
    margin-top: 60px;
    margin-bottom: 180px;
    width: 80px;
}
.register-right .btn-primary{
    float: right;
    border-radius: 1.5rem;
    border: none;
    width: 120px;
    background: #ff9800;
    font-weight: 600;
    color: #fff;
    margin-top: 20px;
    padding: 10px;
}
.form-group{
    padding: 10px;
    text-align: center;
}`;

const Reg = () => {
  return (
    <Container><div class="container">
    <div class="row">
    <div class="col-md-10 offset=md-1">
    <div class="row">
    <div class="col-md-5 register-left">
        <img src={icon} alt=""/>
         <h3>Join Us</h3>
         <p>Subscribe Easy Tutorials YouTube Channel to watch more videos</p>
         <button type="button" class="btn btn-primary">About Us</button>
    </div>
    <div class="col-md-7 register-right">
        <h2>Register Here</h2>
        <div class="register-form">
          <div class="form-group">
          <input type="text" class="form-control" 
          placeholder="Name" pattern="[A-Za-z\s]{2,}" title="name can only be a alphabet" required/>
          </div>         
          <div class="form-group">
          <input type="text" class="form-control" 
          placeholder="Username" required/>
          </div>          
          <div class="form-group">
          <input type="Email" class="form-control" 
          placeholder="Email" pattern="[a-zA-Z0-9\-]{4,10}[@][a-z]+[\.][a-z]{2,3}" required/>
          </div>  
          <div class="form-group">
          <input type="Password" class="form-control" 
          placeholder="Password" pattern="(?=.*\d)(/=.*[a-z])(?=.*[A-Z]).{8,}"
          title="must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
          </div>
          <input type="submit" value="Register" class="btn btn-primary"/>
          </div>
    </div>
    </div>
    </div>
    </div>
   
</div></Container>
  )
}

export default Reg