import styled from 'styled-components'

export const NumberSelectorContainer = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  border-radius: 6px;

  padding: 0.5rem;

  background-color: ${({ theme }) => theme.colors['base-button']};

  & input {
    display: flex;
  }
`

const BaseOperationButton = styled.button`
  position: absolute;
  border: none;
  height: 100%;
  background-color: ${({ theme }) => theme.colors['base-button']};

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }
`

export const IncrementButton = styled(BaseOperationButton)`
  padding-left: 0.5rem;
  left: 0;
`

export const DecrementButton = styled(BaseOperationButton)`
  padding-right: 0.5rem;
  right: 0;
`
