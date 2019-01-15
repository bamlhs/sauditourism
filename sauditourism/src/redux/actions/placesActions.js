export const GetPlaces = (data) => ({
  type: 'get_lists',
  payload: data
})

export const SelectPlace = (item) => ({
  type: 'select_item',
  payload: item
})
