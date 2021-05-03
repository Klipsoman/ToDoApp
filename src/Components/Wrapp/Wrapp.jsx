import React, { useEffect, useState } from 'react'
import { Header } from './Header/Header'
import { Main } from './Main/Main'
import css from './Wrapp.module.css'

const Wrapp = () => {
    const [countDoneCases, setCountDoneCases] = useState(0)

    useEffect(()=>{
        let valueOfDoneCases = localStorage.getItem('doneCases') || 0
        setCountDoneCases(Number(valueOfDoneCases))
        console.log(countDoneCases)
        console.log(valueOfDoneCases)      
    },[])
    useEffect(()=>{
       localStorage.setItem('doneCases', String(countDoneCases))   
    },[countDoneCases])

    return (
        <div className={css.Wrapp}>
             <Header countDoneCases={countDoneCases}/>
             <Main setCountDoneCases={setCountDoneCases}/>
        </div>
    )
}

export default Wrapp