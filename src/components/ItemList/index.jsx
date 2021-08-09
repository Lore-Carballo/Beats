import './styles.sass';
import { Item } from "../Item/index";

export const ItemList = ({ items }) => {
    
    return (
        <div>
            <div className="item-list">
                {
                    !!items.length
                        ? items.map((item) => { return (<Item item={item} key={item.id}/>) })
                        : <img className="loading-gif" src="/img/loading-animation.gif" alt="Cargando" />
                }
            </div>
            {/* <div className="btn">Ver más</div> */}
        </div>
    )


}