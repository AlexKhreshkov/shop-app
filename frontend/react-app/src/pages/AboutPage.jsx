import React from 'react'
import About from '../components/AboutPageComponents/About'
import { Loader } from '../components/UI/loader/Loader'
import { useData } from '../hooks/useData'
import BlackLine from '../components/UI/lines/BlackLine'
import Navigation from './../components/Navigation'


export default function AboutPage() {
    const { isLoading } = useData()
    return (
        <>
            {isLoading
                ?
                <div className='loader' ><Loader /></div>
                :
                <main className="main-content">
                    <Navigation />
                    <BlackLine />
                    <About />
                </main>
            }
        </>
    )
}
