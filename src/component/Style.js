import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Style() {
  return (
    <div>
        <h1 style = {{color : 'red' , borderStyle : 'dotted'}}>Hello</h1>
        <FontAwesomeIcon icon = {faStar} color = "#F1C40F"/>
    </div>
  )
}
