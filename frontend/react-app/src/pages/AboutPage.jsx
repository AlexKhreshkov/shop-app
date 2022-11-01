import React from 'react'
import { getCategoriesData, getData } from '../API/getData'
import BlackLine from './BlackLine'



export default function AboutPage() {
    return (
        <div className="main-content">
            <BlackLine />
            <div className="main">
                <div className="div" style={{ textAlign: 'center', fontSize: '30px', marginTop: '20px' }}>
                    About Info Page
                </div>
            </div>
        </div>
    )
}
