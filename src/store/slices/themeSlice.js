import { createSlice } from "@reduxjs/toolkit"


const initialStateValue = { color: "#fff" };


const themeSlice = createSlice({
    name: "user",
    initialState: {value: initialStateValue },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const { changeColor } = themeSlice.actions
export default themeSlice.reducer;