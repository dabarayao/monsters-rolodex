import React from "react";
import { Card } from "../card/card.component";
import './card-list.style.css';


export const CardList = props => {
    return <div className='card-list'>
        {   
            props.monsters.length > 0 ? (
            props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            )) ) : ( <h1 style={{fontSize: 50, width: "100%", textAlign: "center"}}> 0 monster found 😭</h1>)
    
        }
    </div>;
}