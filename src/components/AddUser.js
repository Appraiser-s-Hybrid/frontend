import Axios from 'axios';
import React, { useState } from "react";



const AddUser = () => {
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

    }


    const onChangeHandler = e => {
        setUsers({
            ...users, [e.target.name]: e.target.value
        })
    }




    return (

        <div className='addUser'>
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
        </div>

    )
}

export default AddUser;
