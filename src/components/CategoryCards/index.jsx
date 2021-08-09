import './styles.sass';
import { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { getCategories } from '../../global';

export const CategoryCards = (item) => {
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        const waitForData = async () => {
            let data = await getCategories();
            
            setTimeout(() => {
                setCategories(data);
            }, 200);
        }
        waitForData();

    }, [])

    

    return (
        <div className="categories-cards-container">
            {
                categories.map(
                    (category, index) => {
                        return (
                            <div className="category-card" key={category.id}>
                                <Link to={`/category/${category.id}`} >
                                    <div className="category-card-img">
                                        <img src={category.categoryimg} alt={category.name} />
                                    </div>
                                    <div className="category-card-txt">
                                        <h4>{category.name}</h4>
                                        <p>[ 3 options ]</p>
                                    </div>
                                    
                                </Link>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}