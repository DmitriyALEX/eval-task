'use client'

import React, { useState } from 'react'
import styles from './styles.module.css'

interface IModal {
    isShow: boolean
    setIsShow: (value: boolean) => void
}

const ModalWindow: React.FC<IModal> = ({ isShow, setIsShow }) => {
    return (
        <div className={styles.modalwindow_container}>
            <div className={styles.modalwindow}>
                <div>
                    <button onClick={() => setIsShow(!isShow)}>close</button>
                </div>
                content
            </div>
        </div>
    )
}

export default ModalWindow
