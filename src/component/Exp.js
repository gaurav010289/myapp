import React from 'react'

let val = [{x : 5 , y : 7} , {x : 8, y : 7} , {x : 9 , y : 10} ];

export default function Exp() {
  return (
    <div>
         <h1>Evaluating Expression</h1>
         {val.map(
            (obj) => {
                return (<h3>{obj.x} {">"} {obj.y} : {obj.x > obj.y ? "True" : "False"}</h3>);
            }
         )}
        
    </div>
  );
}
