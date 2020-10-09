import React, {useState} from 'react';

import AddEmployee from './subcomponents/AddEmployee';

let myObjArray = [{
    Name: "Eirik",
    Proffesion: "Developer",
    Projects: "NorTel"
},]

export const Home = (props) => {

   const [myObj, createMyObj] = useState(myObjArray)

   createMyObj= () => {
       var Name = props.name,
        var Proffesion = props.proffesion,
        var Projects = props.projects
   }

    
    return (
        <div>

        <button onClick={createMyObject}>Add to array</button>
        {console.log(myObjArray)}
        </div>
        
    )
        
}

