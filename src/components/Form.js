import React from 'react'

const Form = ({userInput }) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        
            const input = event.target.elements.input.value;
            userInput(input);
        
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div>
                <label style={{fontWeight:600}}>Enter Input</label>
                <input className='input' type="number" name="input"
                    autoFocus required />
            </div>
            <button className='btn' type="submit">Submit</button>
        </form>
    )
}

export default Form
