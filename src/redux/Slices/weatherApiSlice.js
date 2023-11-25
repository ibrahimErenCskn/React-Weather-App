import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { STATUS } from './status';

//https://api.weatherapi.com/v1/current.json?key=53f50707ee8e4f2babb112349231008&q=ankara&aqi=no

const initialState = {
  value: [],
  status: STATUS.IDLE,
}

export const getWeather = createAsyncThunk('getweatherapi', async(sehir) =>{
    const url = `https://api.weatherapi.com/v1/forecast.json?key=53f50707ee8e4f2babb112349231008&q=${sehir}&days=7&aqi=yes&alerts=no`
    const response = await fetch(url);
    const data = await response.json();
    return data;
})

export const weatherApi = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setCity : (state, action) => {
            state.city = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getWeather.pending,(state, action) => {
            state.status = STATUS.LOADING
        })
        .addCase(getWeather.fulfilled, (state,action)=>{
            state.status = STATUS.SUCCESS
            state.value = action.payload
        })
        .addCase(getWeather.rejected, (state, action) => {
            state.status = STATUS.FAIL
        })
    }
})

export const {setCity} = weatherApi.actions

export default weatherApi.reducer
