import React,{useState} from 'react';
import { Field, Formik } from 'formik';
import styled from 'styled-components'
import { Button } from 'react-bootstrap';
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
 


function Basic ({onLoginUpdate}) {
  let navigate = useNavigate ();
    
  
  const  fetchLogin = (values,props) =>{
    let options = {
       email: values.email,
       password: values.password}
   
    axios.post('https://challenge-react.alkemy.org/', options)
       .then(response =>{
          window.localStorage.setItem("token", response.data.token)
          navigate("/home")
         
          
       })
     }
  
  
  return <StyledLogin className="container">
    <h1>Sign In</h1>
    <Formik
      initialValues={{ email: '', password: ''  }}
      
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email ="Email required"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Password required'
        } else if (
          !/^[A-Za-z]\w{2,14}$/.test(values.password)
        ) {
          errors.password = 'Invalid password';
        }
        return errors;
      }}
      
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
       
        fetchLogin(values);
        setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="formulario">
        <div>
            <label>Email</label>
            <Field
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Email"
          />
          {errors.email && touched.email && errors.email && <div className="error">{errors.email}</div>}
          <label>
              Password
          </label>
          <Field
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="Password"
          />
          {errors.password && touched.password && errors.password && <div className="error">{errors.password}</div> }
        </div>

        <Button type="submit" disabled={isSubmitting}>
            Send
         </Button>
        </form>
      )}
    </Formik>
  </StyledLogin>
}

export default Basic;


const StyledLogin = styled.div`
display:flex;
justify-content:center;
height:100%;
flex-direction:column;


@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

* {
	padding: 0px;
	margin: 0;
	box-sizing: border-box;
}

body {
	background: #E8E8E8;
	font-family: 'Open Sans', sans-serif;
}

.contenedor {
	min-height: 100vh;
	display: flex;
	align-items: flex-start;
	justify-content: center;
}

.formulario {
	min-width: 600px;
	margin-top: 50px;
	background: #fff;
	border-radius: 5px;
	padding: 20px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.formulario > div {
	margin-bottom: 20px;
}

.formulario label {
	display: block;
	font-weight: 600;
	font-size: 14px;
	margin-bottom: 5px;
	color: #1f1f1f;
    margin:5px;
    justify-content: left;
    display:flex;
}

.formulario input,
.formulario textarea {
	font-family: 'Open Sans', sans-serif;
	width: 100%;
	border-radius: 5px;
	border: 2px solid #e2e2e2;
	font-size: 18px;
	padding: 10px;
	margin-bottom: 5px;
	color: #1f1f1f;
}

.formulario input:focus {
	outline: none;
	border: 2px solid #0085FF;
}

.formulario .error {
	color: orange;
	font-weight: 600;
	font-size: 12px;
    margin:5px;
    justify-content: left;
    display:flex;
}

.formulario button[type="submit"] {
	display: block;
	background: #0085FF;
	font-weight: 600;
	font-family: 'Open Sans', sans-serif;
	border: none;
	cursor: pointer;
	width: 100%;
	padding: 10px;
	border-radius: 5px;
	color: #fff;
	font-size: 16px;
	transition: .3s ease all;
}

.formulario button[type="submit"]:hover {
	background: #0051ff;
}

.formulario .exito {
	text-align: center;
	font-size: 14px;
	padding-top: 20px;
	color: #02a802;
}

.formulario input[type="radio"] {
	width: auto;
}

h1{
  justify-content: center;
  display:flex;
  font-family:monospace;  
  
}
`

