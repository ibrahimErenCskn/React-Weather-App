import { useState } from "react"
import { getWeather} from "../redux/Slices/weatherApiSlice"
import {useDispatch} from 'react-redux'

export const Header = () => {

    const [sehir, setSehir] = useState("Istanbul")
    const dispatch = useDispatch()  

    const sehirler = [
                'Adana', 'Adiyaman', 'Afyon', 'Agri', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
        'Aydin', 'Balikesir', 'Bilecik', 'Bingol', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Canakkale',
        'Cankiri', 'Corum', 'Denizli', 'Diyarbakir', 'Edirne', 'Elazig', 'Erzincan', 'Erzurum', 'Eskisehir',
        'Gaziantep', 'Giresun', 'Gümüshane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir', 
        'Kars', 'Kastamonu', 'Kayseri', 'Kirklareli', 'Kirsehir', 'Kocaeli', 'Konya', 'Kutahya', 'Malatya', 
        'Manisa', 'Kahramanmaras', 'Mardin', 'Mugla', 'Mus', 'Nevsehir', 'Nigde', 'Ordu', 'Rize', 'Sakarya',
        'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdag', 'Tokat', 'Trabzon', 'Tunceli', 'Sanliurfa', 'Usak',
        'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kirikkale', 'Batman', 'Sirnak',
        'Bartin', 'Ardahan', 'Igdir', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Duzce'
    ]


    const setCityValue = (e) =>{
        setSehir(e.target.value)
        dispatch(getWeather(e.target.value))
    }

    return (
        <div className="w-full h-20 border-2 rounded-xl bg-slate-200 flex items-center justify-between pl-16 pr-16">
            <div className="text-3xl">
                Hava Durumu Uygulaması
            </div>
            <div>
                <select className="w-32 text-xl border-2 border-black bg-slate-200 text-black" value={sehir} onChange={e => setCityValue(e)}>
                    <option disabled value="seciniz" >SEÇİNİZ</option>
                    {sehirler?.map((v,i) => (
                        <option key={i} value={v}>{v}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}