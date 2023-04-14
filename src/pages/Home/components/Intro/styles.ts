import styled from 'styled-components'
import introBackgroundImg from '../../../../assets/intro-background.svg'
import { Wrapper } from '../../../../components/Wrapper'

export const IntroContainer = styled.section`
  padding: 5.875rem 0 6.625rem;

  background-image: url(${introBackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const ContentWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
`

export const IntroTextWrapper = styled.div`
  max-width: 36.75rem;

  h1 {
    font-family: 'Baloo 2';

    font-weight: 800;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors['base-title']};

    margin-bottom: 1rem;
    line-height: 1.3;
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors['base-title']};
    line-height: 1.3;
  }
`

export const Benefits = styled.ul`
  display: grid;
  column-gap: 1.25rem;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  max-width: 35.4375rem;
  width: 100%;

  grid-template-columns: repeat(2, auto);
`

export const Benefit = styled.li`
  list-style: none;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${({ theme }) => theme.colors['base-text']};
  line-height: 1.3;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`

const benefitIconWrapperColors = {
  yellow: 'yellow',
  purple: 'purple',
  gray: 'base-text',
  'yellow-dark': 'yellow-dark',
} as const

interface BenefitIconWrapperProps {
  color: keyof typeof benefitIconWrapperColors
}

export const BenefitIconWrapper = styled.div<BenefitIconWrapperProps>`
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, color }) =>
    theme.colors[benefitIconWrapperColors[color]]};
`
