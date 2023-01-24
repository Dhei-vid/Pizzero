import { Component } from 'react'
import { useState, useEffect, ChangeEvent } from 'react'

import SearchBox from './component/searchBox/search-box'
import CardList from './component/cardList/card-list'

import { getData } from './utils/data.utils'
import './App.css'

// export type PizzaRecipes = {
//   id: number
//   name: string
//   username: string
// }

export type PizzaRecipes = {
  id: number
  image_url: string
  title: string
   
}

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [pizzaData, setPizzaData] = useState<PizzaRecipes[]>([])
  const [filteredRecipe, setFilteredRecipe] = useState(pizzaData)

  // https://jsonplaceholder.typicode.com/users
  // https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza

  useEffect(() => {
    const fetchRecipe = async () => {
      const pizza = await getData<PizzaRecipes[]>(
        'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza'
      )

      
      setPizzaData(pizza)
    }

    fetchRecipe()
  }, [])

  console.log(pizzaData)
  console.log(filteredRecipe)

  // useEffect(() => {
  //   const filteredData = pizzaData.filter(data => {
  //     return data.title.toLocaleLowerCase().includes(searchField)
  //   })

  //   setFilteredRecipe(filteredData)
  // }, [searchField])

  // for no explicit returns from the function we set the return type as void
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldValue = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldValue)
  }

  console.log('Search field ', searchField)
  return (
    <div className='App'>
      <h1>Pizza 🍕</h1>
      <SearchBox
        className='pizza-search-box'
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredRecipe} />
    </div>
  )
}

export default App
