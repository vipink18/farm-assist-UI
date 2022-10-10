import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <div className='btn'><a href={props.href} className='alink'><span>{props.value}</span></a></div>
  )
}

export default Button
