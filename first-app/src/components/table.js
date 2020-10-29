import React from 'react'
import Body from './body.js'




export default function CreateTable (props) {

    let name=props.name
    let department=props.department
    let level=props.level

    let data = [
        { name:name, department:department, level:level},
    ]
    return(
        <>
            <table>
                <tbody>
                    <tr>
                        <Body Data={data}/>
                    </tr>
                </tbody>
            </table>
        </>
    )
}