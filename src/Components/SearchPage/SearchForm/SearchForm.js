import React from 'react'
import { useFormik } from 'formik'
import CustomSelect from './CustomSelect'
import styles from './FormStyles.module.css'


const options = [
  { value: 'Alive', label: 'Alive' },
  { value: 'Dead', label: 'Dead' },
  { value: 'Unknown', label: 'Unknown' }
]

const options2 = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Genderless', label: 'Genderless'},
  { value: 'Unknown', label: 'Unknown'}
]

function SearchForm (props) {

  const {changeState} = props;

  const validate = values => {
    const errors = {}

    if (!values.name) {
      errors.name = "Field 'Name' is required"
    }

    return errors
  }

  const formik = useFormik({

    initialValues: {
      name: '',
      status: '',
      gender: ''
    },
    validate,
    onSubmit: values => {
      changeState(values.name, values.status, values.gender)
    }

  })

  return (<div className={styles.formContainer}>
    <h1>Search for characters</h1>
    <form onSubmit={formik.handleSubmit} aria-label="form">
      <input
        id="name"
        name="name"
        type="text"
        className={styles.input}
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder='Name*'/>
      {formik.errors.name ? <div className={styles.error}>{formik.errors.name}</div> : null}


      <CustomSelect
        className={styles.input}
        onChange={value=>formik.setFieldValue('status',value.value)}
        value={formik.values.status}

        options={options}
        placeholder='Status'
        />
      {formik.errors.status ? <div className='error'>{formik.errors.status}</div> : null}

      <CustomSelect
        className={styles.input}
        onChange={value=>formik.setFieldValue('gender',value.value)}
        value={formik.values.gender}
        options={options2}
        placeholder='Gender'
        />
      {formik.errors.gender ? <div className='error'>{formik.errors.gender}</div> : null}

      <button type="submit" className={styles.button}>Search</button>

    </form>
  </div>)
}

export default SearchForm;