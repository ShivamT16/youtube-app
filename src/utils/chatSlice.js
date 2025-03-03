import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        handleLiveChat: (state, action) => {
            state.messages.splice(25, 1);
            state.messages.unshift(action.payload); 
        }
    }
})

export const {handleLiveChat} = chatSlice.actions
export default chatSlice.reducer