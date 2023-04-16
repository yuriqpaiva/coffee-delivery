import { InputHTMLAttributes, forwardRef } from 'react'
import { BaseInput, Container, OptionalText } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label: string
  isOptional?: boolean
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, label, isOptional = false, ...props }, ref) => {
    return (
      <Container htmlFor={label} className={className}>
        <BaseInput
          id={label}
          ref={ref}
          type="text"
          placeholder={label}
          {...props}
        />
        {isOptional && <OptionalText>Opcional</OptionalText>}
      </Container>
    )
  },
)
Input.displayName = 'Input'
