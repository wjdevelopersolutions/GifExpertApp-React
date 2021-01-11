import React, { useState } from 'react';
import { AddCategories } from './components/AddCategories';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'HunterXHunter']);
    //     // setCategories(cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>Gif expert app</h2>
            <AddCategories setCategories={setCategories} />
            <hr />

            {
                categories.map(category => {
                    return <li key={ category }> { category } </li>
                })
            }
        </>
    );
}

export default GifExpertApp;
