import React, { useState } from 'react'

export default function CreateForm() {
        const [fname, setfname]= useState("")
        const [lname, setlname]= useState("")
        const [aname, setaname]= useState("")
        const [state, setstate]= useState("")
    return (
        <div>
            <form type="submit">
            <h1>Form</h1>
            First Name:<input type="text" value={fname} onChange={(e)=>setfname(e.target.value)} required ></input><br />
            {console.log(fname)}
            Last Name:<input type="text" value={lname} onChange={(e)=>setlname(e.target.value)} required></input><br />
            Address:<input type="text" value={aname} onChange={(e)=>setaname(e.target.value)} required></input><br/>
            Gender: <input type="radio" name="gender" value="male"/>Male
                    <input type="radio" name="gender" value="female"/>FeMale <br/>
            state<select  onChange={(e)=>setstate(e.target.value)} required >
                <optgroup label="State">
                <option>Select</option>
                <option>Delhi</option>
                <option>Meerut</option>
                <option>Rohtak</option>
                </optgroup>
            </select><br/>
            <button type="submit" onClick={ ()=>(alert(`Name: ${fname} add: ${aname} LastNmae: ${lname} State: ${state}` ))}>SUBMIT</button>
            </form>
        </div>
    )
              
}
