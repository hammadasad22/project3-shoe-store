import React from 'react'
import { useParams } from 'react-router'
import { shoes } from '../App'


function LaunchShoe() {
    const { slug } = useParams();
    const shoe = shoes[slug]
    if(!shoe) {
        return <h2>Not Found</h2>
    }
    const { name, img } = shoe;

    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} width="370" height="280"/>
        </div>
    )
}

export default LaunchShoe
