import React from 'react'
import ShoeCard from './ShoeCard'
import { Grid } from '@material-ui/core'
import { NikeShoes } from './App'

const Content = () => {
    return (
        <Grid container spacing={4}>
            
                {Object.entries(NikeShoes).map(([slug, {name, img, price}]) => {
                    return (
                        <Grid item xs={12} sm={6}>
                            <ShoeCard name={name} img={img} price={price}/>
                        </Grid>
                    )
                })}


        </Grid>
    )
}

export default Content
