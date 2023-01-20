import { Component } from 'react'
import { useState, useEffect } from 'react'

import SeacrchBox from './component/searchBox/search-box'
import CardList from './component/cardList/card-list'

import { getData } from './utils/data.utils'
import './App.css'

type PizzaRecipes = {
  id: string
  title: string
  image_url: string
}

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [pizzaData, setPizzaData] = useState<PizzaRecipes[]>([])
  const [filteredRecipe, setFilteredRecipe] = useState(pizzaData)

  useEffect(() => {
    const fetchRecipe = async () => {
      const pizza = await getData<PizzaRecipes[]>(
        'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=47f2b9e8-36f1-43be-afb7-97d0d9971ee5'
      )

      setPizzaData(pizza)
    }

    fetchRecipe()
  })

  console.log(pizzaData)

  const onSearchChange = event => {
    const searchFieldValue = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldValue)
  }

  return (
    <div className='App'>
      <h1>Pizza 🍕</h1>
      {/* <SeacrchBox onChangeHandler={this.onSearchChange} />
      <CardList meals={filteredRecipe} /> */}
    </div>
  )
}

// I wanted a Movies API decided to use food
// class App extends Component {
//   constructor () {
//     super()

//     this.state = {
//       title: [],
//       searchField: ''
//     }
//   }

//   // Fetch data from the movies API
//   componentDidMount () {
//     fetch(
//       'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=47f2b9e8-36f1-43be-afb7-97d0d9971ee5'
//     )
//       .then(res => {
//         return res.json()
//       })
//       .then(mov => {
//         // console.log(mov.data.recipes);
//         this.setState(() => {
//           return { title: mov.data.recipes }
//         })
//       })
//       .catch(err => {
//         console.error('something about the link', err)
//       })
//   }

//   onSearchChange = event => {
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render () {
//     const filteredRecipe = this.state.title.filter(data => {
//       return data.title.toLocaleLowerCase().includes(this.state.searchField)
//     })

//     return (
//       <div className='App'>
//         <h1>Pizza 🍕</h1>
//         <SeacrchBox onChangeHandler={this.onSearchChange} />
//         <CardList meals={filteredRecipe} />
//       </div>
//     )
//   }
// }

export default App
