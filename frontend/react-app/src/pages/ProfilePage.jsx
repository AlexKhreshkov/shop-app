import React from 'react'
import { useState } from 'react'
import ProfileInfoForm from '../components/ProfileComponents/ProfileInfoForm'
import ProfileOrders from '../components/ProfileComponents/ProfileOrders'
import { Loader } from '../components/UI/loader/Loader'
import Success from '../components/UI/modal/Success'
import { useData } from '../hooks/useData'
import BlackLine from '../components/UI/lines/BlackLine'
import Navigation from './../components/Navigation'
import ProfilePersonalInfo from '../components/ProfileComponents/ProfilePersonalInfo'


export default function ProfilePage() {

    const { isLoading } = useData()
    const [isSuccessModal, setIsSuccessModal] = useState(false)

    return (
        <main className="main-content">
            {isLoading
                ?
                <div className='loader'><Loader /></div>
                :
                <>
                    <Navigation />
                    <BlackLine />
                    {/* {isSuccessModal
                        ?
                        <Success
                            onClick={e => setIsSuccessModal(false)}
                        />
                        :
                        <></>
                    } */}
                    <div className="main">
                        <div className="yourProfile">Your Profile</div>
                        <div className="profile__wrap">
                            <div className="profile__container">
                                <ProfilePersonalInfo />
                                <ProfileOrders />
                            </div>
                        </div>
                    </div>
                </>
            }
        </main>
    )
}
