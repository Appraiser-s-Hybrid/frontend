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
        regionidzip: '',
        bathroomcnt: '',
        bedroomcnt: '',
    });




    const handleSubmit = e => {
        e.preventDefault();
        Axios
        .get('', {
            params: {
                regionidzip: '',
            }
    })}
    
    




    const shows = e => {
        e.preventDefault();
        setShow(true)}




    return (
        
        <DIV>
            <FORM className="user-form" onSubmit={handleSubmit}>



                <label>
                    {/* Square Feet:  */}
                <Field 
                type="number" 
                name="sqft" 
                placeholder="Square Ft"
                min="0" />

                {touched.sqft && errors.sqft &&(
                    <p className="error">{errors.sqft}</p>
                )}
                </label>





                <label>
                    {/* Zip Code:  */}
                <Field 
                type="number" 
                name="zip" 
                placeholder="Zip Code" 
                min="0"
                value={params.regionidzip} 
                />
                {touched.zip && errors.zip &&(
                    <p className="error">You must enter a Zip Code in order to receive results!</p>
                )}
                </label>





                <label>
                    {/* Number of Rooms:  */}
                <Field
                type="number" 
                name="rooms" 
                placeholder="Rooms" 
                min="0"
                value={params.bedroomcnt}
                />
                {touched.rooms && errors.rooms &&(
                    <p className="error">{errors.rooms}</p>
                )}
                </label>



                <label>
                    {/* Number of Bathrooms:  */}
                <Field 
                type="number" 
                name="bathrooms" 
                placeholder="Bedrooms" 
                min="0" 
                value={params.bathroomcnt}
                />
                {touched.bathrooms && errors.bathrooms &&(
                    <p className="error">{errors.bathrooms}</p>
                )}
                </label>



                <label>
                    {/* TBD:  */}
                    <Field 
                    type="text" 
                    name="newData" 
                    placeholder="TBD" />
                </label>

            <div>
                <HousingCard />
                {/* {params.map(param => (
                    <p>{param.zip}</p>
                ))} */}
            </div>
            
                <button onClick={shows} type="submit">SEARCH</button>
            </FORM>

            {
                show ? <Other /> : null
            }
            
        
        </DIV>
                
                
                
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

