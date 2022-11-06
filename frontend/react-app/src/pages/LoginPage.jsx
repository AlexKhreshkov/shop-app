// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { Link, useLocation, useNavigate } from 'react-router-dom'
// import { useData } from '../hooks/useAuth'
// import BlackLine from './BlackLine'

// export default function LoginPage() {
//     const navigate = useNavigate()
//     const location = useLocation()
//     const fromPage = location.state?.from?.pathname || '/'
//     const { signIn, user } = useData()
//     const [userInput, setUserInput] = useState({
//         userName: '',
//         password: '',
//     })

//     const sumbitAuthForm = (event) => {
//         event.preventDefault()
//         if (userInput.userName && userInput.password) {
//             signIn(userInput, () => navigate(fromPage, { replace: true }))
//         }
//     }

//     return (
//         <div className="main-content">
//             <BlackLine />
//             <div className="main">
//                 <div style={{ textAlign: 'center', fontSize: '30px', marginTop: '20px', marginBottom: '20px' }}>
//                     Login
//                     <br />
//                 </div>
//                 {fromPage !== '/' ?
//                     <div style={{ textAlign: 'center', fontSize: '20px', marginTop: '40px' }}>
//                         <div style={{ textDecoration: 'underline', marginBottom: '10px' }}>
//                             First, Login/<Link to='/signup'>SignUp</Link>
//                         </div>
//                         to access {fromPage}
//                     </div>
//                     :
//                     <div></div>
//                 }
//                 <div className="auth-form">
//                     <form onSubmit={sumbitAuthForm}>
//                         <label htmlFor="username">Username:</label>
//                         <input
//                             required
//                             onChange={(event) => {
//                                 setUserInput({
//                                     userName: event.target.value,
//                                     password: userInput.password,
//                                 })
//                             }}
//                             type="text"
//                         />
//                         <label htmlFor="password">Password:</label>
//                         <input
//                             required
//                             onChange={(event) => {
//                                 setUserInput({
//                                     userName: userInput.userName,
//                                     password: event.target.value,
//                                 })
//                             }}
//                             type="password"
//                         />
//                         <button>Login</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }
