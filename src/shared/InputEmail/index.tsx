import React, { useState } from 'react'
import styles from './styles.module.css'

const InputEmail = () => {
  const [email, setEmail] = useState('')
  const [isInvalid, setIsInvalid] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    validateEmail(value)
  }

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsInvalid(!emailRegex.test(value))
  }

  return (
    <div>
      <div className={styles.InputEmail_title}>
        <span>Електронна пошта</span>
      </div>
      <div
        className={`${styles.InputEmail_container} ${
          isInvalid ? styles.InputEmail_container_invalid : ''
        }`}
      >
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          className={styles.InputEmail}
          placeholder="Введіть адресу електронної пошти"
        />
      </div>
      {isInvalid && (
        <p className={styles.errorMessage}>Введіть коректну електронну адресу</p>
      )}
    </div>
  )
}

export default InputEmail
