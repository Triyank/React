import React from 'react'


let id=0;
export default function  Body (props){

    let name,department,level 
    
    id++
     let array=props.Data
     array.forEach(element => {
        name=element.name
        department=element.department
        level=element.level

    });
    return(
        <>

            <td>{id}</td>
            <td> {name}</td>
           <td>{department}</td>
           <td>{level}</td>
        </>

    )

}