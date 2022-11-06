import { Link, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import ItemPage from './pages/ItemPage';
import ItemsListPage from './pages/ItemsListPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import { RequireAuth } from './hoc/RequireAuth';
import { RequireCartAndAuth } from './hoc/RequireCartAndAuth'
import LogoutPage from './pages/LogoutPage';
import SignupPage from './pages/SignupPage';
import { DataProvider } from './hoc/DataProvider';
import OrderPage from './pages/OrderPage'
import { RequireNoAuth } from './hoc/RequireNoAuth';

function App() {
    return (
        <div className="App">
            <DataProvider>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<MainPage />} />
                        <Route path='about' element={<AboutPage />} />
                        <Route path='items' element={<ItemsListPage />} />
                        <Route path='items/:slug' element={<ItemPage />} />
                        <Route path='signup' element={
                            <SignupPage />
                        } />
                        <Route path='logout' element={
                            <RequireAuth>
                                <LogoutPage />
                            </RequireAuth>
                        } />
                        <Route path='profile' element={
                            <RequireAuth>
                                <ProfilePage />
                            </RequireAuth>
                        } />
                        <Route path='order' element={
                            <RequireCartAndAuth>
                                <OrderPage />
                            </RequireCartAndAuth>
                        } />
                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </DataProvider>
        </div >
    );
}

export default App;
