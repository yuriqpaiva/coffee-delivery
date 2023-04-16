import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CoffeeItemContainer = styled.li`
  list-style: none;
  background-color: ${({ theme }) => theme.colors['base-card']};

  & > img {
    margin-top: -35px;
    width: 120;
    height: 120;

    margin-bottom: 0.75rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`

export const TagsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;
`

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  color: ${({ theme }) => theme.colors['yellow-dark']};
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.25rem 0.8rem;
  border-radius: 100px;
  text-transform: uppercase;
`

export const CoffeeName = styled.strong`
  text-align: center;
  margin-top: 1rem;
  display: block;
  line-height: 1.3;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors['base-subtitle']};
`

export const CoffeeDescription = styled.p`
  text-align: center;
  margin-top: 0.5rem;
  line-height: 1.3;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors['base-label']};
`

export const Footer = styled.footer`
  margin-top: 2.0625rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 208px;
  width: 100%;
`

export const Price = styled.span`
  line-height: 1.3;
  font-size: 0.875rem;

  & > strong {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
  }
`

export const Selector = styled.div`
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
`

export const IncrementButton = styled(BaseOperationButton)`
  padding-left: 0.5rem;
  left: 0;
`

export const DecrementButton = styled(BaseOperationButton)`
  padding-right: 0.5rem;
  right: 0;
`

export const SelectorWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ShopButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors['purple-dark']};

  border: none;
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`
