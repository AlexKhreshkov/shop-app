import { useRouteError } from "react-router-dom";
import Header from "./Header";
import Footer from './Footer'

export default function ErrorPage() {

    return (
        <div className="main-content">
            <div className="main">
                <div className="error">
                    <div className="error">
                        <div className="error__number">404</div>
                        <div className="error__text">Page not found</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}