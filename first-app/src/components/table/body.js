import React from 'react'
import './body.css'


let id=1;
export default function  Body (props){    
    
     let array=props.Data
     console.log(array)
     
    return(
        <>
        
            <tbody>
            {
                    array.map(ele=>(
                       
                    <tr>
                        <td>{id++}</td>
                        <td>{ele.name}</td>
                        <td>{ele.department}</td>
                        <td>{ele.level}</td>
                    </tr> 
                   
                    ))
                }
            </tbody>
        
        </>

    )

}