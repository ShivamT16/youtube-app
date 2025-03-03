import React, { useState } from 'react'
import '../App.css';

import { convertStringsIntoLink } from '../utils/utilsFunctions'

const Description = ({description}) => {

    const [limitDescription, setLimitDescription] = useState(100)

    const newDescription = description?.slice(0 , limitDescription)
  return (
    <div style={{whiteSpace: "pre-wrap"}}>
        {convertStringsIntoLink(newDescription)} {description?.length > 90 && (limitDescription === 100 ? 
        <span className='description-btn' onClick={() => setLimitDescription(description?.length)}>... show more</span> : 
        <p className='description-btn' onClick={() => setLimitDescription(100)} >show less</p>)}
    </div>
  )
}

export default Description