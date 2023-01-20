// I am making use of a generic type because I do not know what I will get back - T, starting type
export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)
  const jsonResponse = await response.json().then(res => res.data.recipes)

  return await jsonResponse
}
