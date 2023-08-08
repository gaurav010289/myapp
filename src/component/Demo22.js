import React from 'react'

let arr = [{Name : "Gaurav" , Branch : "CSE"} , {Name : "Anmol" , Branch : "IT"} , {Name : "Ankit" , Branch : "CS-DS"} , {Name : "Pal" , Branch : "CS-AI"} , {Name : "Gupta" , Branch : "Civil"} , {Name : "Arvind" , Branch : "Mechanical"}];

export default function Demo22() {
  return (
    <div>
        {
            arr.map(
                (obj) => {
                    return (<p>Name is : {obj.Name} . Branch is : {obj.Branch}</p>)
                }
            )
        }
    </div>
  )
}
