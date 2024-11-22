'use client'
import React, { useEffect, useState } from 'react'

const InputPassword = () => {
    const [inputValue, setInputValue] = useState('')
    const [inputType, setInputType] = useState('password')
    const [warning, setWarning] = useState(false)

    const handleChange = () => {
        if (inputType === 'password') {
            setInputType('text')
        } else if (inputType === 'text') {
            setInputType('password')
        }
    }

    useEffect(() => {
        if (inputValue) {
            console.log(inputValue)
            if (inputValue.length < 6) {
                setWarning(true)
            }
        }
    }, [inputValue])

    //icon in PUBLIC/ICONS folder
    const eyeIcon = '/icons/eye.svg'

    if (eyeIcon) {
    }

    return (
        <>
            {warning && <p style={{ color: 'red' }}>CHECK PASSWORD</p>}

            <div>
                <input type={inputType} onChange={e => setInputValue(e.target.value)} />
                <button onClick={handleChange}>
                    {/* <img src={A ? `${eyeIcon}` : `${eyegoogle}`}  /> */}

                    {/* <img src={some} /> */}
                </button>
            </div>
        </>
    )
}

export default InputPassword
