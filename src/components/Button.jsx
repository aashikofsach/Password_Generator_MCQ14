import React from 'react'

function Button({text, onClick , customclass}) {
  return (
      <button className={customclass} onClick={onClick}>{text}</button>
  )
}

export default Button