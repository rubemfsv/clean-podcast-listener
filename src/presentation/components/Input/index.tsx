import React, { useContext, useEffect, useState } from 'react'
import Context from '@/presentation/hooks/form'

import Styles from './styles.scss'

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string
  hideStatus?: boolean
}

const Input: React.FC<IInputProps> = (props: IInputProps) => {
  const { state, setState } = useContext(Context)
  const [inputValue, setInputValue] = React.useState('')
  const [isActiveFocus, setIsActiveFocus] = useState(false)

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
    setIsActiveFocus(true)
  }

  const handleInputChange = (
    event: React.FocusEvent<HTMLInputElement>
  ): void => {
    setInputValue(event.target.value)
  }

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setState({ ...state, [props.name]: inputValue })
    }, 500)
    return () => clearTimeout(debounceTimeout)
  }, [inputValue, 500])

  return (
    <input
      {...props}
      data-testid={`${props.name}`}
      readOnly
      onFocus={enableInput}
      onChange={handleInputChange}
      onBlur={() => setIsActiveFocus(false)}
      className={Styles.input}
    />
  )
}

export default Input
