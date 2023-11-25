import { useDispatch, useSelector} from 'react-redux'
import { Header } from './companents/header'
import { MainContent } from './companents/MainContent'
import { useEffect } from 'react'
import { getWeather } from './redux/Slices/weatherApiSlice'


function App() {
  //https://api.weatherapi.com/v1/current.json?key=53f50707ee8e4f2babb112349231008&q=ankara&aqi=no
  const {value, status} = useSelector((state)  => state.weatherApiValue)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getWeather("Istanbul"))
  },[])
  return (
    <>
      <Header/>
      <MainContent value={value}/>
    </>
  )
}

export default App
