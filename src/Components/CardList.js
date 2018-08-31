import React from 'react';
import Card from './Card';

const CardList = ({ kitties }) => {
    return (
        <div>
        {
        kitties.map((user,i) => {
        return (
        <Card 
        key={kitties[i].id} 
        id={kitties[i].id} 
        name={kitties[i].name} 
        email={kitties[i].email}/>
        );
        })
        }
    </div>
    )
}
export default CardList;