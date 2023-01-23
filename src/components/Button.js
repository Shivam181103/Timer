import React from 'react'

function Button(props) {
  return (
    <button onClick={props.onclicked}>{props.children}</button>
  )
}

export default Button