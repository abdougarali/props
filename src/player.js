import React from 'react';
import {Card} from 'react-bootstrap/';
// import { Players } from './players';



 export const Lecteur=({player})=>{

    const {imageurl,name,team,nationality,jerseynumber,age}=player;
    
 return(

     <div style={{display : "flex" , justifyContent :"space-around" , marginTop:"10%"}}> 
       
              <Card  style={{ width: '18rem' }}>
              <Card.Img variant="top"  src={imageurl}  alt={name} />
              <Card.Body>
              <p>{name}</p> 
               <p>equipe:{team} </p>
               <p>nationalité:{nationality} </p>
               <p>numéro de mallot:{jerseynumber} </p>
               <p>age: {age}ans</p>
              </Card.Body>
            </Card>
      
    </div>
    
        
    )}

 //export default Player;