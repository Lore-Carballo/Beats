import './styles.sass';
import { ItemListContainer } from "../ItemListContainer";
import { Link } from 'react-router-dom';

export const HomeContent = () => {
    return (
        <>
        <div className="home-content">
            <div className="home-bg" style={{'background-image': 'url("/img/bg-hero-dark.png")'}}>
                <div className="home-bg-color">
                    <img src="/img/bg-hero-color.png" alt="Lime Beats" />
                </div>
                <div className="home-bg-txt left">
                    <span>More Music</span>
                    <span>Less Noise</span>
                </div>
                <div className="home-bg-txt right">
                    <span>Always-ready</span>
                    <span>High performance</span>
                    <span>wireless headphones</span>
                </div>
            </div>

            <div className="home-featured-product">
                <div className="featured-product-img float">
                    <img src="/img/beats_lime.png" alt="Solo Wireless Lime" />

                </div>
                <div className="featured-product-info">
                    <h2>Solo3 Wireless</h2>
                    <p>Beats Solo3 Wireless on-ear headphones immerse you in rich, award-winning sound, everywhere you want to go</p>
                    <button className="btn"><Link to={'/category/solo-wireless'}>Learn More</Link></button>
                </div>
            </div>
        </div>   
        
        <div className="home-products">
            <h3>
                <span>Made for</span><br/>
                <span>the way you live</span>
            </h3>
            <ItemListContainer />
        </div>
        </>
    )
}