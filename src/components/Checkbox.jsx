import React from 'react'

function Checkbox({ checkbox, onChange }) {
    return (
        <div >
            <input type="checkbox" checked={checkbox.state} onChange={onChange} />
            <label >{checkbox.title}</label>
        </div>
    )
}

export default Checkbox