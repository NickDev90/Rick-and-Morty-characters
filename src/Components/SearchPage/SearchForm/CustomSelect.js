import React from 'react';
import Select from 'react-select';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    indicatorSeparator: null,
  }),
  indicatorSeparator: (styles) => ({display:'none'}),
  dropdownIndicator: base => ({
    ...base,
    color: "#33BD7D"
  }),
  container: base => ({
    ...base,
    height: "100%"
  }),
  valueContainer: base => ({
    ...base,
    padding: 0
  }),
  control: (provided) =>  ({
            ...provided,           
            border: "0px solid black",
            // backgroundColor: 'white',
            outline: 'none',
            boxShadow: 'none',
            height: '100%'            
        }),
   placeholder: base => ({
    ...base,
    color: "#006C90",
    fontSize: "14px"
  }),
}

export default ({ onChange, options, value, className, placeholder }) => {

    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : "";
    };

    return (
        <div className={className}>
            <Select
                styles={customStyles}
                value={defaultValue(options, value)}
                onChange={value => {
                    onChange(value)

                }} options={options} 
                placeholder={placeholder}
                indicatorSeparator={null}/>
        </div>

    )
}