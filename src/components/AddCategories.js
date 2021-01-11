import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategories = ({ setCategories }) => {

    const [ inputValue, setInputValue ] = useState('')

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length >= 2 ) {
            setCategories(cats => [ inputValue, ...cats ]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                onChange={handleInputValue}
                value={inputValue}
            />
        </form>
    )
}

AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired
}
