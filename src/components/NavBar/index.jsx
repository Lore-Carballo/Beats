import './styles.sass';
import { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { getCategories } from '../../global';
import { Item } from '../Item';

export const NavBar = (item) => {
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
        <header>
            <Logo />
            <nav className="menu">
                <ul>
                    {
                        categories.map(
                            (category, index) => {
                                return (
                                    <li key={category.id}>
                                        <Link to={`/category/${category.id}`} >{category.name}</Link>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}