import React from 'react'
import { Loader } from '../components/UI/loader/Loader'
import { useData } from '../hooks/useData'
import BlackLine from './BlackLine'
import Navigation from './Navigation'


export default function AboutPage() {
    const { isLoading } = useData()
    return (
        <>
            {isLoading
                ?
                <div style={{ display: "flex", justifyContent: 'center', marginTop: '100px' }}><Loader /></div>
                :
                <div className="main-content">
                    <Navigation />
                    <BlackLine />
                    <div className="main">
                        <div className="div" style={{ textAlign: 'center', fontSize: '30px', marginTop: '20px' }}>
                            About Info Page 
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
