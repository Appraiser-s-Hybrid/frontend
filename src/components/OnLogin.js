import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';


import HousingCard from "./HousingCard";
import Style from 'styled-components';
import Other from './Other'
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
        // .then(
        //     Axios
        //     .post('https://hidden-chamber-84113.herokuapp.com/api/v1/users', mergedState)
        //     .then()
        // )

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



<<<<<<< HEAD
                <label>
                    {/* Square Feet:  */}
                <Field 
                type="number" 
                name="sqft" 
                placeholder="Square Ft"
                min="0" />
=======
                {/* <label>
                    Square Feet: 
                <Field 
                type="number" 
                name="sqft" 
                placeholder="Square Feet"
                min="0"
                
                />
>>>>>>> 5b0802a8a6f2dcf51709e0bed7e62bdbfe65aff3

                {touched.sqft && errors.sqft &&(
                    <p className="error">{errors.sqft}</p>
                )}
                </label> */}


                <label>
                    {/* Zip Code:  */}
                <Field 
                type="number" 
                name="regionidzip" 
                placeholder="Zip Code" 
                min="10000"
                max="99999"
                value={params.regionidzip} 
                onChange={onChangeHandler}
                />
                {touched.regionidzip && errors.regionidzip &&(
                    <p className="error">You must enter a Zip Code in order to receive results!</p>
                )}
                </label>





                <label>
<<<<<<< HEAD
                    {/* Number of Rooms:  */}
                <Field
                type="number" 
                name="rooms" 
                placeholder="Rooms" 
=======
                    Number of Bederooms: 
                <Field
                type="number" 
                name="bedroomcnt" 
                placeholder="Numbe of Bedrooms" 
>>>>>>> 5b0802a8a6f2dcf51709e0bed7e62bdbfe65aff3
                min="0"
                value={params.bedroomcnt}
                onChange={onChangeHandler}
                />
                {touched.bedroomcnt && errors.bedroomcnt &&(
                    <p className="error">{errors.bedroomcnt}</p>
                )}
                </label>



                <label>
                    {/* Number of Bathrooms:  */}
                <Field 
                type="number" 
<<<<<<< HEAD
                name="bathrooms" 
                placeholder="Bedrooms" 
=======
                name="bathroomcnt" 
                placeholder="Number of Bathrooms" 
>>>>>>> 5b0802a8a6f2dcf51709e0bed7e62bdbfe65aff3
                min="0" 
                value={params.bathroomcnt}
                onChange={onChangeHandler}
                />
                {touched.bathroomcnt && errors.bathroomcnt &&(
                    <p className="error">{errors.bathroomcnt}</p>
                )}
                </label>



<<<<<<< HEAD
                <label>
                    {/* TBD:  */}
=======
                {/* <label>
                    TBD: 
>>>>>>> 5b0802a8a6f2dcf51709e0bed7e62bdbfe65aff3
                    <Field 
                    type="text" 
                    name="newData" 
                    placeholder="TBD" />
                </label> */}

            <div>
                <HousingCard />
                {/* {params.map(param => (
                    <p>{param.zip}</p>
                ))} */}
            </div>
            
                <button onSubmit={shows} type="submit">SEARCH</button>
            </FORM>

            {
                show ? <Other /> : null
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
    


/* <div>
                {params.map(param => (
                    <p>{param.zip}</p>
                ))}
            </div> */

    // const [param, setParam] = useState('');
    // const [search, setSearch] = useState('');
    // const [filteredParams, setFilteredParams] = useState([]);



    // const onInputChange = e => {
    //     const { value } = e.target;
    //     setParam(value);
    // };




    // const onSearchChange = e => {
    //     const { value } = e.target;
    //     setSearch(value);
    //     setFilteredParams(params.filter(param => param.includes(search)));
    // }



    // const onFormSubmit = e => {
    //     e.preventDefault();
    //     setParams([...params, param]);
    //     setParam('');
    // };




    // useEffect(() => {
    //     if (status) {
    //         setParams([...params, status]);
    //     }
    // }, [status]);

