import React from 'react'

export const MainContent = ({value}) => {
  
  return (
    <>
      <div className='flex mt-10 bg-slate-200 items-center justify-center h-[350px] mb-8'>
        <div className='text-6xl mr-8 pl-4'>{value?.location?.name}</div>
        <div className='flex mr-4 border-spacing-x-3.5'>
          <img src={value?.current?.condition?.icon} className=''/>
          <div>
            <span className='text-xl'>{value?.current?.feelslike_c}°C</span>
            <span className='text-xl flex '>{value?.current?.condition?.text}</span>
          </div>
        </div>
        <div className='ml-8 flex flex-col text-xl'>
          <span>
            Nem : {value?.current?.humidity}
          </span>
          <span>
            Son Güncellenen Saat : {value?.current?.last_updated}
          </span>
        </div>
      </div>
      <div className='flex flex-wrap w-full h-[350px] items-center justify-around bg-slate-200'>
        {
          value?.forecast?.forecastday?.map((v,i)=>(
            <div key={i} className='flex items-center border-4 w-36px h-36'>
              <img src={v.day.condition.icon} className='w-20 h-20'/>
              <div className='flex flex-col text-xl'>
                <span>{v.date}</span>
                <span>{v.day.condition.text}</span>
                <span>{v.day.maxtemp_c}°C</span>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
