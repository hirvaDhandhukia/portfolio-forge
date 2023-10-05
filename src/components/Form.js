import React from 'react'
import FormGroup from './Bootstrap/FormGroup'

const Form = ({ FormData }) => {
  return (
    <div className='Form'>
        <h3>Basic Info</h3>
        <p>
            {Object.keys(FormData).map(
                fd => (
                  // Object.keys(Desc).includes(fd) && (
                  //     <FormGroup />
                  // )
                  <FormGroup key={fd} Label={fd} />
              ))}
        </p>
    </div>
  )
}

export default Form