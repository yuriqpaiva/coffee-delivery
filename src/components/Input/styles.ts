import styled from 'styled-components'

export const Container = styled.label`
  border: none;

  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors['base-input']};
  border-radius: 4px;

  border: 1px solid ${({ theme }) => theme.colors['base-button']};

  &:focus-within {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors['yellow-dark']};
  }
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
