import Header from "../components/Header";
import Footer from '../components/Footer'
import Navigation from './../components/Navigation'
import BlackLine from "../components/UI/lines/BlackLine";
import { useData } from "../hooks/useData";
import { Loader } from "../components/UI/loader/Loader";

export default function ErrorPage() {

    const { isLoading } = useData()
    return (
        <div className="App">
            {isLoading
                ?
                <div className='loader' ><Loader /></div>
                :
                <>
                    <div className="main-content">
                        <Header />
                        <Navigation />
                        <BlackLine />
                        <div className="main">
                            <div className="error">
                                <div className="error__number">404</div>
                                <div className="error__text">Page not found</div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            }
        </div>
    );
}