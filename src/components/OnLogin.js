import React, { useState } from 'react';
import { withFormik, Field } from 'formik';
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
        regionidzip: null,
        bathroomcnt: null,
        bedroomcnt: null,
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
            <FORM className="user-form" onSubmit={handleSubmit}>



                <label>
                    
                <Field 
                type="number" 
                name="regionidzip" 
                placeholder="Zip Code" 
                min="10000"
                
                value={params.regionidzip} 
                onChange={onChangeHandler}
                />
                {touched.regionidzip && errors.regionidzip &&(
                    <p className="error">You must enter a Zip Code in order to receive results!</p>
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
                {touched.bedroomcnt && errors.bedroomcnt &&(
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
                {touched.bathroomcnt && errors.bathroomcnt &&(
                    <p className="error">{errors.bathroomcnt}</p>
                )}
                </label>


            <div>
                
                
            </div>
            
                <button onSubmit={shows} type="submit">SEARCH</button>
            </FORM>

            {
                show ? <HousingCard /> : null
            }
            
        
        </DIV>
                
                
                
    );
};

const FormikUserSearch = withFormik({
    mapPropsToValues({ regionidzip, bedroomcnt, bathroomcnt }) {
        return {
            // sqft: sqft || "",
            regionidzip: regionidzip || "",
            bedroomcnt: bedroomcnt || "",
            bathroomcnt: bathroomcnt || "",
            // TBD: TBD || ""
        };
    },

    validationSchema: Yup.object().shape({
        // sqft: Yup.number(),
        regionidzip: Yup.number().required(),
        bedroomcnt: Yup.number(),
        bathroomcnt: Yup.number()
        // TBD: Yup.mixed()
    }),

    handleSubmit(values, { setStatus }) {
        setStatus(values);
    }
    
})(OnLogin);


export default FormikUserSearch;
    


