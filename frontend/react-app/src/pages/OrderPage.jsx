import React from 'react'
import { useState } from 'react'
import OrderForm from '../components/UI/forms/OrderForm'
import { Loader } from '../components/UI/loader/Loader'
import Success from '../components/UI/modal/Success'
import { useData } from '../hooks/useAuth'
import BlackLine from './BlackLine'
import Navigation from './Navigation'


export default function OrderPage() {

  const { isLoading} = useData()
  const [isSuccessModal, setIsSuccessModal] = useState(false)

  return (
    <div className="main-content">
      {isLoading
        ?
        <div style={{ display: "flex", justifyContent: 'center', marginTop: '100px' }}><Loader /></div>
        :
        <>
          <Navigation />
          <BlackLine />
          {isSuccessModal
            ?
            <Success
              onClick={e => setIsSuccessModal(false)}
            />
            :
            <></>
          }
          <div className="main">
            <div className="" style={{ textAlign: 'center', fontSize: '30px', marginTop: '20px', marginBottom: '20px' }}>
              Make Order:
            </div>
            <OrderForm />
          </div>
        </>
      }
    </div>
  )
}
