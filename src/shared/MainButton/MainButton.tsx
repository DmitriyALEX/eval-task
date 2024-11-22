'use client'
import GitIcon from '../icons/GitIcon'
import GoogleIcon from '../icons/GoogleIcon'
import styles from './MainButton.module.css'
import clsx from 'clsx'

interface MainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  variant?: 'default' | 'iconGit' | 'iconGoogle';
}

export default function MainButton({
  children, 
  className, 
  variant='default', 
  ...rest
}: MainButtonProps
): JSX.Element 
{
  const icon = 
    variant === 'iconGoogle'? 
      <GoogleIcon/> : 
    variant === 'iconGit' ? 
      <GitIcon/> : null

  return (
    <button 
      className={clsx(styles.btn, styles[variant], className)}
      type='button' 
      {...rest}>
        { icon }
        {children}
    </button>
  )
}