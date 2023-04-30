import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.75rem;
`

interface InputWrapperProps {
  error?: boolean
}

export const InputWrapper = styled.label<InputWrapperProps>`
  border: none;

  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors['base-input']};
  border-radius: 4px;

  border: 1px solid ${({ theme }) => theme.colors['base-button']};

  display: flex;
  justify-content: space-between;

  &:focus-within {
    box-shadow: ${({ error, theme }) =>
      error
        ? `0 0 0 1px ${theme.colors.danger}`
        : `0 0 0 1px ${theme.colors['yellow-dark']}`};
  }
`

export const OptionalText = styled.em`
  font-family: 'Roboto';
  padding-left: 0.5rem;

  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors['base-label']};
  line-height: 1.3;
  font-weight: normal;
`

export const BaseInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors['base-text']};
  line-height: 1.3;
  font-weight: 400;

  &:focus {
    border: none;
    outline: none;
    box-shadow: 0 0 0 0 transparent;
  }

  &::placeholder {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['base-label']};
    line-height: 1.3;
    font-weight: 400;
  }
`
