 import React from 'react';
 import { Formik, Field } from 'formik';
 import {reqApi} from './../../API/reqApi.js'
 import {Redirect} from 'react-router-dom';
 import styles from './SearchPage.module.css';



 



const Basic = (props) => {
  const {changeState} = props;

  const submit = (values, { setSubmitting }) => {
        changeState(values.name, values.status, values.gender);
  }


  return <div className={styles.form}>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ name: 'rick', status: 'alive', gender: 'male'}}
       validate={values => {
         const errors = {};
         if (!values.name) {
           errors.name = 'Required';
         } 
         return errors;
       }}

       onSubmit={submit} 
     >
       { ({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} >
           <input
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           />
           {errors.name && touched.name && errors.name}
           <Field as="select"
             name="status"
             onChange={handleChange}
             onBlur={handleBlur}> 
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </Field>
            <Field as="select"
              name="status"
              onChange={handleChange}
              onBlur={handleBlur} > 
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="genderless">Genderless</option>
                <option value="unknown">Unknown</option>
             </Field>
           {/*{errors.password && touched.password && errors.password}*/}
           <button type="submit" >
             Submit
           </button>
         </form>
       )}

     </Formik>
   </div>
 }

 export default Basic;
