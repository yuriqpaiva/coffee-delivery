import tradicionalCoffeeImg from '@/assets/coffees/traditional.png'
import americanCoffeeImg from '@/assets/coffees/american.png'
import creamyCoffeeImg from '@/assets/coffees/creamy.png'
import coldCoffeeImg from '@/assets/coffees/cold.png'
import milkCoffeeImg from '@/assets/coffees/milk.png'
import latteCoffeImg from '@/assets/coffees/latte.png'

export interface Coffee {
  id: number
  name: string
  description: string
  price: number
  imageSource: string
  tags: string[]
}

export const coffees: Coffee[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos.',
    price: 9.9,
    imageSource: tradicionalCoffeeImg,
    tags: ['expresso', 'tradicional'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    imageSource: americanCoffeeImg,
    tags: ['Tradicional'],
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    imageSource: creamyCoffeeImg,
    tags: ['Tradicional'],
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    imageSource: coldCoffeeImg,
    tags: ['Tradicional', 'Gelado'],
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    imageSource: milkCoffeeImg,
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    imageSource: latteCoffeImg,
    tags: ['Tradicional', 'Com leite'],
  },
]
