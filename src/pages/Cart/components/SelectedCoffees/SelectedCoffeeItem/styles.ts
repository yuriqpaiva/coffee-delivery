import styled from 'styled-components'

export const SelectedCoffeeItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  & img {
    width: 64px;
    height: 64px;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > span {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 400;
  }
`

export const ControlsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-button']};

  height: 2rem;

  padding: 0 0.5rem;

  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  line-height: 0;
  font-weight: 400;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }
`

export const Price = styled.strong`
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 700;
`
