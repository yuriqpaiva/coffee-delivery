import { InputHTMLAttributes, forwardRef } from 'react'
import {
  BaseInput,
  Container,
  ErrorMessage,
  InputWrapper,
  OptionalText,
} from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label: string
  isOptional?: boolean
  errorMessage?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, label, errorMessage, isOptional = false, ...props }, ref) => {
    return (
      <Container className={className}>
        <InputWrapper htmlFor={label} error={!!errorMessage}>
          <BaseInput
            id={label}
            ref={ref}
            type="text"
            placeholder={label}
            {...props}
          />
          {isOptional && <OptionalText>Opcional</OptionalText>}
        </InputWrapper>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Container>
    )
  },
)
Input.displayName = 'Input'
