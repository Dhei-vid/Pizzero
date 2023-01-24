// I am making use of a generic type because I do not know what I will get back - T, starting type

export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)
  const pizzaResponse = await response.json()
  

  // console.log(pizzaResponse.data.recipes)
  return pizzaResponse.data.recipes;


  // for monsters
  return await response.json()
}
