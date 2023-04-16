import { Wrapper } from '../../components/Wrapper'
import { CoffeeList } from './components/CoffeeList'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <Wrapper>
        <CoffeeList />
      </Wrapper>
    </HomeContainer>
  )
}
