import Axios from 'axios';
import React, { useState } from "react";
import { Link, Route } from 'react-router-dom';
import Style from 'styled-components';



const BKGRNDDIV = Style.div`
background-color: #C4C4C4;
border-radius: 5px;
padding: 15px;
width: 390px;
margin-top: 5%;
`
const TITLEDIV = Style.div`
background-color: #F6F6F6;
height: 60px; 
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 3%;
font-size: 1.4rem;
`

const DIV = Style.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #008B8B;
border-radius: 5px;
padding: 3%;
margin-top: 40px;

`
const FORM = Style.form`
display: flex;
flex-direction: column;

width: 70%;
// align-items: center;
`


const INPUT = Style.input`
margin: 5px 0 5px 0;
height: 40px;
border-radius: 6px;
border: none;
padding-left: 10px;
border: 1px solid #008B8B;
`

const BUTTON = Style.button`
margin-top: 15px;
height: 45px;
border-radius: 5px;
border: none;
margin-bottom: 60px;
`

const DIV1 = Style.div`
display: flex;
flex-direction: row;

`
const H4 = Style.h4`
margin: 0;
margin-right: 10px;
color: white;
margin-right: 45px;
font-size: 1.4rem;
`



const AddUser = (props) => {
    const [users, setUsers] = useState({
        email: '',
        password: '',
    });



  

    const handleSubmit = e => {
        e.preventDefault();
        console.log(users)
        Axios
            .post('https://hidden-chamber-84113.herokuapp.com/api/v1/users', users)
            .then(localStorage.setItem('token', 'users'))
            .then(props.history.push('/'))

    }


    const onChangeHandler = e => {
        setUsers({
            ...users, [e.target.name]: e.target.value
        })
    }




    return (

        <BKGRNDDIV>
            <TITLEDIV>
                Sign up
            </TITLEDIV>

            <DIV>
                <FORM onSubmit={handleSubmit}>
                    <INPUT className='input1'
                        type='text'
                        placeholder='email'
                        name='email'
                        value={users.email}
                        onChange={onChangeHandler}
                    />

                    <INPUT className='input1'
                        type='text'
                        placeholder='password'
                        name='password'
                        value={users.password}
                        onChange={onChangeHandler}
                    />
                    <BUTTON className='btn-hover1' type='submit'>Create Profile</BUTTON>


                </FORM>

            </DIV>

        </BKGRNDDIV>

    )
}

export default AddUser;




