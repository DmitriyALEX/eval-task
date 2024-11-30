'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

const InputPassword = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [inputType, setInputType] = useState<string>('password')
  const [warning, setWarning] = useState<boolean>(false)
  const [warningMessage, setWarningMessage] = useState<string>('')

  const eyeOpenIcon = '/icons/eye-open.svg'
  const eyeClosedIcon = '/icons/eye-closed.svg'

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/

  const validatePassword = (password:string) => {
    if (!passwordRegex.test(password)) {
      setWarning(true)

       if (password.length < 6 &&(!/[A-Z]/.test(password)) 
        && (!/^[A-Za-z]+$/.test(password)) 
        && (!/\d/.test(password)) && (!/[!@#$%^&*]/.test(password))) {
        setWarningMessage('Тільки латинські літери, щонайменше 6 символів, 1 велика літера, цифра та @#$%^&*')
      }
    } else {
      setWarning(false)
      setWarningMessage('')
    }
  }

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value
    setInputValue(password)
    validatePassword(password)
  }

  const handleChange = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'))
  }

  return (
    <div>
      <div className={styles.InputPassword_title}>
        <span>Пароль</span> <span>Забули пароль?</span>
      </div>
      <div
        className={`${styles.InputPassword_container} ${
          warning ? styles.InputPassword_container_invalid : ''
        }`}
      >
        <input
          type='text'
          value={inputValue.replace(/./g, inputType === 'password' ?'*' : '$&')}
          onChange={handleInputChange}
          className={styles.InputPassword}
        />
        <button
          className={styles.imageButton}
          onClick={handleChange}
          aria-label="Toggle password visibility"
        >
          <img
            src={inputType === 'password' ? eyeClosedIcon : eyeOpenIcon}
            alt={inputType === 'password' ? 'Show password' : 'Hide password'}
          />
        </button>
      </div>
      {warning && <p className={styles.checkPassword}>{warningMessage}</p>}
    </div>
  )
}

export default InputPassword
