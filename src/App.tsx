import { Component } from 'react'
import { useState, useEffect, ChangeEvent } from 'react'

import SearchBox from './component/searchBox/search-box'
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

  // https://jsonplaceholder.typicode.com/users

  useEffect(() => {
    const fetchRecipe = async () => {
      const pizza = await getData<PizzaRecipes[]>(
        'https://jsonplaceholder.typicode.com/users'
      )

      setPizzaData(pizza)
    }

    fetchRecipe()
  }, [])

  console.log(pizzaData)

  useEffect(() => {
    const filteredData = pizzaData.filter(data => {
      return data.title.toLocaleLowerCase().includes(searchField)
    })

    setFilteredRecipe(filteredData)

    console.log(filteredRecipe)
  }, [])

  // for no explicit returns from the function we set the return type as void
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldValue = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldValue)
  }

  return (
    <div className='App'>
      <h1>Pizza 🍕</h1>
      <SearchBox
        className='pizza-search-box'
        onChangeHandler={onSearchChange}
      />
      <CardList meals={filteredRecipe} />
    </div>
  )
}

export default App
