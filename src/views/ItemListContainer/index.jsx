import './styles.sass';
import { useParams } from "react-router-dom";
import { ItemList } from "../../components/ItemList/index";
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../global/index';

export const ItemListContainer = (props) => {
    let [products, setProducts] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        const waitForData = async () => {
            let data;
            if (id) {
                data = await getProductsByCategory(id)
            } else {
                data = await getProducts();
            }

            setTimeout(() => {
                setProducts(data);
            }, 200);
        }
        waitForData();
    }, [id])

    return (
        <section className="item-list-container">
            <ItemList items={products} />
        </section>
    )
}