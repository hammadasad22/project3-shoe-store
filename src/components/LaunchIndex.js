/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { shoes } from '../App'
import { Link } from 'react-router-dom'



function LaunchIndex() {
    return (
        <ul>
            {Object.entries(shoes).map(([slug, { name, img }]) =>
                <li key={slug}>
                    <Link to={`/launch/${slug}`}>
                    <h2>{name}</h2>
                    <img src={img} alt={name} width="370" height="280"/>
                    </Link>
                </li>
            )}
        </ul>
    );

}

export default LaunchIndex
