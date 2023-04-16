import { InputHTMLAttributes, forwardRef } from 'react'
import { BaseInput, Container } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label: string
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, label, ...props }, ref) => {
    return (
      <Container htmlFor={label} className={className}>
        <BaseInput
          id={label}
          ref={ref}
          type="text"
          placeholder={label}
          {...props}
        />
      </Container>
    )
  },
)
Input.displayName = 'Input'
