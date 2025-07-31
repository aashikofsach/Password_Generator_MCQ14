import React from 'react'

function StrengthChecker({password=""}) {
    let length = password.length ;

    function strength(length)
    {
        if(length <1) return ""
       if (length < 4) return 'Very Weak';
    if (length < 8) return 'Weak';
    if (length < 12) return 'Strong';
    if (length < 16) return 'Very Strong';
    return 'Excellent';


    }

    let strengthNote = strength(length)



  return (
    <>
    <div className='strength'>
        <span>Strength:</span>
        <span className='str-string'>{strengthNote ? strengthNote : <></>  }</span>

    </div>
    </>
  )
}

export default StrengthChecker