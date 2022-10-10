import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    options: '',
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setOption: (state, action) => {
            state.options = action.payload
        },
    }
})


export const { setOption } = counterSlice.actions

export default counterSlice.reducer