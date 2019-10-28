import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';


import HousingCard from "./HousingCard";
import Style from 'styled-components';

import Axios from 'axios';


const DIV = Style.div`
// background-color:
`
const FORM = Style.form``


const OnLogin = ({touched, errors}) => {


    const [show, setShow] = useState(false)
    
    const [params, setParams] = useState({
        regionidzip: "",
        bathroomcnt: "",
        bedroomcnt: "",
    });


    const [dsprice, setdsPrice] = useState({
        results: ''
    });

    // taxvaluedollarcnt

    let mergedState = {...params, ...setdsPrice}

    const handleSubmit = e => {
        e.preventDefault();
        console.log(params);
        Axios
        .post('https://appraisely.herokuapp.com/predict', params)
        .then(res => {
            console.log(res.data)
            setdsPrice(res.data)
        })
    

        .catch(error => {
            console.error('Service Error', error);
        })    
    }
    
    


    const onChangeHandler = e => {
        e.preventDefault();
        setParams({
            ...params, [e.target.name]: e.target.value
             
        })
    }




    const shows = e => {
        e.preventDefault();
        setShow(true)}




    return (
        
        <DIV>
            <Form className="user-form" onSubmit={handleSubmit}>



                <label>
                    
                <Field 
                type="number" 
                name="regionidzip" 
                placeholder="Zip Code" 
                min="10000"
                
                value={params.regionidzip} 
                onChange={onChangeHandler}
                />
                {
                    touched.regionidzip && errors.regionidzip ? null : (
                    <p className="error">{errors.regionidzip}</p>
                )}

                </label>

                <label>
                    
                <Field
                type="number" 
                name="bedroomcnt" 
                placeholder="Number of Bedrooms" 
                min="0"
                value={params.bedroomcnt}
                onChange={onChangeHandler}
                />
                {touched.bedroomcnt && errors.bedroomcnt ? null : (
                    <p className="error">{errors.bedroomcnt}</p>
                )}
                </label>



                <label>
                    
                <Field 
                type="number" 
                name="bathroomcnt" 
                placeholder="Number of Bathrooms" 
                min="0" 
                value={params.bathroomcnt}
                onChange={onChangeHandler}
                />
                {touched.bathroomcnt && errors.bathroomcnt ? null : (
                <p className="error">{errors.bathroomcnt}</p>
                )}
                </label>


            <div>
                
                
            </div>
            
                <button onSubmit={shows} type="submit">SEARCH</button>
            </Form>

            {
                show ? <HousingCard /> : null
            }
            
        
        </DIV>                
                
    );
};

const FormikUserSearch = withFormik({
    mapPropsToValues({ regionidzip, bedroomcnt, bathroomcnt }) {
        return {
            regionidzip: regionidzip || "",
            bedroomcnt: bedroomcnt || "",
            bathroomcnt: bathroomcnt || ""
        };
    },

    validationSchema: Yup.object().shape({
        regionidzip: Yup.number().required("Please Enter A Zip Code"),
        bedroomcnt: Yup.number().required("Please Designate the Number of Bedrooms"),
        bathroomcnt: Yup.number().required("Please Enter a Valid Number of Bathrooms")
    }),

    handleSubmit(values, { setStatus }) {
        setStatus(values);
    }
    
})(OnLogin);


export default FormikUserSearch;
    


