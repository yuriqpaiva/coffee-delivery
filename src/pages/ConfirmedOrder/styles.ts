import styled from 'styled-components'

export const ConfirmedOrderContainer = styled.div`
  display: flex;

  justify-content: space-between;
  margin-top: 0.5rem;

  & > img {
    align-self: flex-end;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.5rem;
`

export const OrderHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors['yellow-dark']};
  line-height: 1.3;
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors['base-subtitle']};
  line-height: 1.3;
`

export const OrderInfoContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;

  width: 100%;
  max-width: 526px;
  height: auto;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    border: 1px solid transparent;
    background: linear-gradient(90deg, #c47f17, #4b2995) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const OrderInfoItem = styled.div`
  display: flex;
  gap: 0.75rem;
  height: 100%;

  z-index: 1;
`

interface OrderIconWrapperProps {
  wrapperColor: 'purple' | 'yellow' | 'yellow-dark'
}

export const OrderIconWrapper = styled.div<OrderIconWrapperProps>`
  width: 32px;
  height: 32px;

  background-color: ${({ theme, wrapperColor }) => theme.colors[wrapperColor]};

  border-radius: 9999px;
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`

interface OrderInfoTextProps {
  breakLineOnStrong?: boolean
}

export const OrderInfoText = styled.div<OrderInfoTextProps>`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors['base-text']};
  line-height: 1.3;

  max-width: 310px;

  strong {
    display: ${({ breakLineOnStrong }) =>
      breakLineOnStrong ? 'block' : 'inline'};
    font-weight: 700;
  }
`
