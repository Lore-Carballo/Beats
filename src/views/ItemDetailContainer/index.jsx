import './styles.sass';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ItemDetail } from "../../components/ItemDetail";
import { getProductDetail } from '../../global';

export const ItemDetailContainer = (props) => {
    let [product, setProduct] = useState({});
    let { id } = useParams();

    useEffect(() => {
        const waitForData = async () => {
            let data = await getProductDetail(id);
            let aux = {
                id: data.id,
                name: data.name,
                price: data.price,
                stock: data.stock,
                productimg: data.productimg,
                producthero: data.producthero,
                category: data.category,
                description: data.description,
                color: data.color,
                colorcode: data.colorcode,
                quality01name: data.quality01name,
                quality01icon: data.quality01icon,
                quality01desc: data.quality01desc,
                quality02name: data.quality02name,
                quality02icon: data.quality02icon,
                quality02desc: data.quality02desc,
                quality03name: data.quality03name,
                quality03icon: data.quality03icon,
                quality03desc: data.quality03desc,
                quality04name: data.quality04name,
                quality04icon: data.quality04icon,
                quality04desc: data.quality04desc,

            };

            setTimeout(() => {
                setProduct(aux);
            }, 2000);
        }
        waitForData();
    }, [])


    return (
        <div className="item-detail">
            {
                !!Object.keys(product).length
                    ? <ItemDetail item={product} />
                    : <img className="loading-gif" src="/img/loading-animation.gif" alt="Cargando" />
            }
        </div>
    )
    // return (
    //     <section className="item-detail-container">

    //         <ItemDetail />


    //     </section>

    // )        
}