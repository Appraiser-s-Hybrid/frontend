import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const OnLogin = ({ values, errors, touched, status }) => {
    const [params, setParams] = useState([]);
    const [param, setParam] = useState('');
    const [search, setSearch] = useState('');
    const [filteredParams, setFilteredParams] = useState([]);

    const onInputChange = e => {
        const { value } = e.target;
        setParam(value);
    };

    const onSearchChange = e => {
        const { value } = e.target;
        setSearch(value);
        setFilteredParams(params.filter(param => param.includes(search)));
    }

    const onFormSubmit = e => {
        e.preventDefault();
        setParams([...params, param]);
        setParam('');
    };

    useEffect(() => {
        if (status) {
            setParams([...params, status]);
        }
    }, [status]);


    return (
        
        <div>
            <Form className="user-form">
                <label>
                    Square Feet: 
                <Field type="number" name="sqft" placeholder="Square Feet" />
                {touched.sqft && errors.sqft &&(
                    <p className="error">{errors.sqft}</p>
                )}
                </label>

                <label>
                    Zip Code: 
                <Field type="number" name="zip" placeholder="Zip Code" />
                {touched.zip && errors.zip &&(
                    <p className="error">You must enter a Zip Code in order to receive results!</p>
                )}
                </label>

                <label>
                    Number of Rooms: 
                <Field type="number" name="rooms" placeholder="Numbe of Rooms" />
                {touched.rooms && errors.rooms &&(
                    <p className="error">{errors.rooms}</p>
                )}
                </label>

                <label>
                    Number of Bathrooms: 
                <Field type="number" name="bathrooms" placeholder="Number of Bedrooms" />
                {touched.bathrooms && errors.bathrooms &&(
                    <p className="error">{errors.bathrooms}</p>
                )}
                </label>

                <label>
                    TBD: 
                    <Field type="text" name="newData" placeholder="TBD" />
                </label>
                <button type="submit">SEARCH</button>
            </Form>
            <div>
                {params.map(param => (
                    <p>{param.zip}</p>
                ))}
            </div>
        </div>
    );
};

const FormikUserSearch = withFormik({
    mapPropsToValues({ sqft, zip, rooms, bathrooms, TBD }) {
        return {
            sqft: sqft || "",
            zip: zip || "",
            rooms: rooms || "",
            bathrooms: bathrooms || "",
            TBD: TBD || ""
        };
    },

    validationSchema: Yup.object().shape({
        sqft: Yup.number(),
        zip: Yup.number().required(),
        rooms: Yup.number(),
        bathrooms: Yup.number(),
        TBD: Yup.mixed()
    }),

    handleSubmit(values, { setStatus }) {
        setStatus(values);
    }
    
})(OnLogin);



export default FormikUserSearch;