import './styles.sass';
import { ItemListContainer } from "../ItemListContainer";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getCategoryDetail } from '../../global';
import { CategoryHero } from "../../components/CategoryHero";

export const CategoryPage = (props) => {

    let [category, setCategory] = useState({});
    let { id } = useParams();

    useEffect(() => {
        const waitForData = async () => {
            let data = await getCategoryDetail(id);
            let aux = {
                id: data.id,
                name: data.name,
                categoryimg: data.categoryimg,
                categoryhero: data.categoryhero,
                description: data.description,
            };

            setCategory(aux);
        }
        waitForData();
    }, [])

    return (
        <>
        <div className="category-page-content">
            {
                !!Object.keys(category).length
                    ? <CategoryHero category={category} />
                    : <img className="loading-gif" src="/img/loading-animation.gif" alt="Cargando" />
            }
        </div>
        
        <div className="category-products">
            <ItemListContainer category={category} />
        </div>
        </>
    )
}