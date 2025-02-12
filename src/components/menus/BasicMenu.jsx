import React from 'react';
import {Link} from "react-router-dom";

function BasicMenu(props) {
    return (
        <nav id='navbar' className={'flex bg-gray-600'}>

            <div className={"w-4/5 bg-gray500"} >
                <ul className={"flex p-4 text-white font-bold"}>
                    <li className={"pr-6 text-2xl"}>
                        <Link to={'/'}>Main</Link>
                    </li>
                    <li className="pr-6 text-2xl">
                        <Link to={'/about'}>About</Link>
                    </li>
                </ul>
            </div>

            <div className={"w-1/5 flex justify-end bg-orange-300 p-4 font-medium"}>
                <div className={"text-white text-sm m-1 rouded"}>
                    Login
                </div>
            </div>
        </nav>
    );
}

export default BasicMenu;