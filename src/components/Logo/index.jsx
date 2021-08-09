import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <div className="logo">
            <Link to={'/'}>
                <img src="/img/logo_beats.png" alt="Beats by Dre" />
            </Link>
        </div>        
    )
}