import Axios from 'axios';
import React, { useState } from "react";
import Style from 'styled-components';
import { Link, Route } from 'react-router-dom';


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
background-color: #976363;
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
border: 1px solid  #976363;
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
align-items: center;

`
const H4 = Style.h4`
margin: 0;
margin-right: 7px;
color: white;
font-size: 1.01rem;
padding-bottom: 3px;
`




const Login = (props) => {

    const [users, setUsers] = useState({
        email: '',
        password: '',
    });

    const [all, setAll] = useState([])

    function matchFunc(data) {
        // console.log(data)
        data.map(x => {
            // console.log(x.password, users.password)
            if (x.password === users.password && x.email === users.email) {
                localStorage.setItem('token', 'users')
                    && console.log('password match found')

            }
        })
    }


    const handleSubmit = e => {


        e.preventDefault();
        // console.log(users)
        Axios
            .get('https://hidden-chamber-84113.herokuapp.com/api/v1/users')
            .then(res => setAll(res.data))
            .then(console.log(all))
            .then(matchFunc(all))
            .catch(err => console.log('error', err))

        if (localStorage.getItem('token')) {
            window.location.href = '/onlogin'
        } else {
            console.log('incorrect')
        }

    }




    const onChangeHandler = e => {
        setUsers({
            ...users, [e.target.name]: e.target.value
        })
    }




    return (
        <BKGRNDDIV>
            <TITLEDIV>
                Appraisely
            </TITLEDIV>

                <DIV>
                    <FORM onSubmit={handleSubmit}>
                        <INPUT className='input'
                            type='text'
                            placeholder='email'
                            name='email'
                            value={users.email}
                            onChange={onChangeHandler}
                        />

                        <INPUT className='input'
                            type='text'
                            placeholder='password'
                            name='password'
                            value={users.password}
                            onChange={onChangeHandler}
                        />
                        <BUTTON className='btn-hover' type='submit'>Login</BUTTON>


                    </FORM>


                    <DIV1>
                        <H4>Dont have an account?</H4>
                        <Link to='/adduser' className='signup-class'>Signup</Link>

                    </DIV1>





                </DIV>

        </BKGRNDDIV>


    )
}

export default Login;