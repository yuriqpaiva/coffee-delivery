import styled, { css } from 'styled-components'

export const PaymentSelectorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  column-gap: 0.75rem;

  margin-top: 2rem;
`

interface SelectorButtonProps {
  isSelected?: boolean
}

export const SelectorButton = styled.button<SelectorButtonProps>`
  border: none;
  border-radius: 6px;

  padding: 1rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors['purple-light'] : theme.colors['base-button']};

  border: 1px solid transparent;

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      border: 1px solid ${theme.colors.purple};
    `}

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  & > span {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 0.875rem;
    line-height: 1.3;
    font-weight: 400;
  }

  &:hover {
    background-color: ${({ theme, isSelected }) =>
      !isSelected && theme.colors['base-hover']};
  }
`
