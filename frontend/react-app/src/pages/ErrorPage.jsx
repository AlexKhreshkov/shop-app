import Header from "./Header";
import Footer from './Footer'
import Navigation from "./Navigation";
import BlackLine from "./BlackLine";

export default function ErrorPage() {

    return (
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
            <Footer />
        </div>
    );
}