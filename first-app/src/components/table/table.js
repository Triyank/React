import React from 'react'
import Body from './body.js'
import './table.css'
import CreateHeader from './Header'

export default function CreateTable () {
    let data = [
      { name:"Triyank", department:"Development", level:"Trainee"},
      { name:"Shivam" ,department:"Development", level:"Trainee"},
      { name:"Reema" ,department:"Testing", level:"Trainee"},
      { name:"Deepika", department:"HR", level:"Senior HR"},
      { name:"Sonu", department:"IT" ,level:"Experiece"},
      { name:"Shivani", department:"Development", level:"Trainee"}
    ]
    return(
            <table>
                <thead>
                    <tr>
                         <CreateHeader/>
                    </tr>
                </thead>
                <tbody>
                        <Body Data={data}/>
                </tbody>
            </table>
    )
}