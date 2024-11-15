'use client'
import styles from './page.module.css'
import { useAuth } from '@/context/authContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Loader from '@/shared/Loader'
import PrimaryButton from '@/shared/PrimaryButton'
import Image from 'next/image'

import InputPassword from '@/shared/InputPassword'

export default function Home() {
    // !! Replace the div with a ready-made component !!
    // A temporary solution for front-end development
    return (
        <main className={styles.homePage_container}>
            <h1 className={styles.platform}>
                Платформа <br /> для тестових завдань
            </h1>
            <p className={styles.textInvitation}>
                Запрошуємо скористатись Eval Test, щоб отримати, виконати, направити і
                <br />
                проаналізувати тестові завдання під час процесу працевлаштування
            </p>
            <section className={styles.sign_in_container}>
                <button className={styles.sign_in}>Увійти</button>
                <button className={styles.register}>Зареєструватись</button>
            </section>

            {/* FOR EXAMPLE */}
            <InputPassword />
        </main>

        // <div className={styles.homePage_container}>
        //     {' '}
        //     <div className={styles.platform}>
        //         Платформа <br /> для тестових завдань
        //     </div>
        //     <div className={styles.textInvitation}>
        //         Запрошуємо скористатись Eval Test, щоб отримати, виконати, направити і
        //         <br />
        //         проаналізувати тестові завдання під час процесу працевлаштування
        //     </div>
        //     <div>
        //         <button className={styles.enter}>Увійти</button>
        //         <button className={styles.register}>Зареєструватись</button>
        //     </div>
        // </div>
    )

    const router = useRouter()
    const { user, fetchedData, googleSignIn, logOut, loading } = useAuth()

    const [redirect, setRedirect] = useState<boolean>(false)
    const [logoLoaded, setLogoLoaded] = useState<boolean>(false)

    const handleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (e) {
            console.error(e)
        }
    }

    // const handleSignOut = async () => {
    //     try {
    //         await logOut()
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    //REDIRECT IF USER AUTHORIZED
    useEffect(() => {
        if (user && fetchedData) {
            setRedirect(true)
            router.push(`${fetchedData?.checkedUsername?.username}`)
        }
    }, [user, fetchedData, router])

    if (loading || redirect || (user && fetchedData)) {
        return <Loader />
    }

    const googleLogo = 'icons/google-logo.svg'

    return (
        <section className={styles.main_container}>
            <>
                <PrimaryButton
                    title={'Sign in'}
                    image_link={googleLogo}
                    alt={'google_logo'}
                    onClick={handleSignIn}
                    logoLoaded={logoLoaded}
                />

                {/* FOR STATE WATCHER */}
                <Image
                    src={googleLogo}
                    alt="google_logo"
                    onLoad={() => setLogoLoaded(true)}
                    style={{ display: 'none' }}
                    width={20}
                    height={20}
                />
            </>
            {/* ) : (
          // <button onClick={handleSignOut}>signOutф</button>
          <></>
      )} */}
        </section>
    )
}
