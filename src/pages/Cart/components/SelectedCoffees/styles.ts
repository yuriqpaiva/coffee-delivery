import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const Title = styled.h2`
  font-family: 'Baloo 2';
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.3;
`

export const ContentWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;

  padding: 2.5rem;
`

export const CoffeesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const PurchaseSummary = styled.div`
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const PurchaseSummaryTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PurchaseText = styled.span`
  color: ${({ theme }) => theme.colors['base-text']};
  line-height: 1.3;
  font-size: 0.875rem;
  font-weight: 400;
`

export const PurchaseTotalText = styled.strong`
  color: ${({ theme }) => theme.colors['base-subtitle']};
  line-height: 1.3;
  font-size: 1.25rem;
  font-weight: 700;
`

export const ConfirmButton = styled.button`
  padding: 0.75rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  text-transform: uppercase;
  border: 0;
  border-radius: 6px;
  margin-top: 1.5rem;

  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
