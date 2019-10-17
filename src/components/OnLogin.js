import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const OnLogin = () => {
    const [userSearch, setUserSearch] = useState([]);


    return (
        
        <div>
            <Form className="user-search">
                <label>
                    Zip Code: 
                <Field type="number" name="zip" placeholder="Zip Code" />
                </label>

                <label>
                    Number of Rooms: 
                <Field type="number" name="rooms" placeholder="Number of Bedrooms" />
                </label>

                <label>
                    TBD: 
                    <Field type="text" name="newData" placeholder="TBD" />
                </label>
                <button type="submit">SEARCH</button>
            </Form>
        </div>
        
    );
};

const FormikUserSearch = withFormik({
    mapPropsToValues({ zip, rooms, TBD }) {
        return {
            zip: zip || "",
            rooms: rooms || "",
            TBD: TBD || ""
        };
    },

    handleSubmit(values, { setStatus }) {
    
    }
    
})(OnLogin);



export default FormikUserSearch;