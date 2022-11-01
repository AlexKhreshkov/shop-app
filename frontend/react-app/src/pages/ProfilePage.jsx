import React from 'react'
import BlackLine from './BlackLine'



export default function ProfilePage() {
    return (
        <div className="main-content">
            <BlackLine />
            <div className="main">
                <div className="div" style={{ textAlign: 'center', fontSize: '30px', marginTop: '20px' }}>
                    Profile Info Page
                </div>
            </div>
        </div>
    )
}
