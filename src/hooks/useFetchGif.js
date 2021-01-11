import { useState, useEffect } from 'react';
import helpers from '../helpers';

export const useFetchGif = (category) => {

    const [ state, setState ] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        helpers.getGif(category)
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, [ category ]);

    return state;
}
