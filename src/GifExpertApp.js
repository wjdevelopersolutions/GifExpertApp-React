import React, { useState } from 'react';
import { AddCategories } from './components/AddCategories';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>Gif expert app</h2>
            <AddCategories setCategories={setCategories} />
            <hr />

            {
                categories.map(category => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </>
    );
}

export default GifExpertApp;
