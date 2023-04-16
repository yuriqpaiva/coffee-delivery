import { Wrapper } from '../../components/Wrapper'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { CoffeeList } from './components/CoffeeList'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <DefaultLayout>
      <HomeContainer>
        <Intro />
        <Wrapper>
          <CoffeeList />
        </Wrapper>
      </HomeContainer>
    </DefaultLayout>
  )
}
