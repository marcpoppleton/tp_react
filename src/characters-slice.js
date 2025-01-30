import { createSlice } from '@reduxjs/toolkit'

export const characterSlice = createSlice({
  name: 'character',
  initialState: {
    name: 'no one'
  },
  reducers: {
    setSelectedCharacter: (state, action) => {
      state.name = action.payload
    }
  }
})

export const { setSelectedCharacter } = characterSlice.actions
export const selectedCharacter = (state) => state.character.name

export default characterSlice.reducer