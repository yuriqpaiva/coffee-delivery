import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoAnchor = styled.a`
  display: flex;
`

export const Navigation = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors['purple-light']};

  color: ${({ theme }) => theme.colors['purple-dark']};
  line-height: 1.3;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`

export const CartAnchor = styled(Link)`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors['yellow-light']};

  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const CartCounter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20px;
  width: 20px;
  border-radius: 9999px;

  top: -8px;
  right: -8px;

  position: absolute;
  background-color: ${({ theme }) => theme.colors['yellow-dark']};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.75rem;
  font-weight: bold;
`
