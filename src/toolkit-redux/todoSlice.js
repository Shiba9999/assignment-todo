import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchData } from "../fetchData";

export const getPosts = createAsyncThunk("todo/getPosts", async () => {
  let res = await axios.get("https://jsonplaceholder.cypress.io/todos");
  let data = await res.data;
  return data;
});

const initialState = {
  loading: false,
  value: [],
  error: "",
};


export const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((id) => id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending,(state)=>{
        state.loading=true
    })
    builder.addCase(getPosts.fulfilled,(state,action)=>{

        state.loading=false;
        state.value=action.payload;
        state.error=""
    })
    builder.addCase(getPosts.rejected,(state,action)=>{

        state.loading=false;
        state.value=[];
        state.error=action.error.message
    })

  },
});

export const { addTodo, removeTodo } = counterSlice.actions;
export default counterSlice.reducer;
