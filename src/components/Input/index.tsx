import { InputHTMLAttributes, forwardRef } from 'react'
import { BaseInput, Container } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <Container htmlFor="input" className={className}>
        <BaseInput id="input" ref={ref} type="text" {...props} />
      </Container>
    )
  },
)
Input.displayName = 'Input'
