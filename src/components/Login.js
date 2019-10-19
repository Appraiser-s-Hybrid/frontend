import Axios from 'axios';
import React, { useState } from "react";
import Style from 'styled-components';
import { Link, Route } from 'react-router-dom';

const DIV = Style.div``




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

        <DIV>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='email'
                    name='email'
                    value={users.email}
                    onChange={onChangeHandler}
                />

                <input
                    type='text'
                    placeholder='password'
                    name='password'
                    value={users.password}
                    onChange={onChangeHandler}
                />
                <button type='submit'>Submit</button>


            </form>
            <Link to='/adduser' className='btn'>Signup</Link>





        </DIV>

    )
}

export default Login;