import React from 'react';
import {Lecteur} from './player';


const PlayList=({x})=>{
    console.log("Players : " , x)
return(<div>
  
 
      <h2 style={{marginTop:"10%"}}>Liste des Joueurs</h2>
      <div className="player-list">
        {x.map(player => (
          <Lecteur key={player.id}  player={player} />
        ))}
      
    </div>
  </div>
)}

export default PlayList;