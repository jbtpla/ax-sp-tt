export const sortArrayByProperty = (data, property) => {
  return data.sort((itemA, itemB) => {
    return itemA[property] > itemB[property] ? 1 : -1
  })
}
