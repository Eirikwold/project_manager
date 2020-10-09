import React from 'react';


class AddEmployee extends React.Component {

    constructor() {
        super()

        this.state = {
            Name: this.props.Name,
            Proffesion: this.props.Proffesion,
            Projects: this.props.Projects
        }
    }



    render() {
        return (
            <div>

            </div>
        );
    }
}

export default AddEmployee;




/* const AddEmployee = (props) => {

    const [newEmployee, addNewEmployee] = useState("");

    const handleName = (e) => {
        addNewEmployee(e.target.value);
    }
    const handleProffesion = (e) => {
        addNewEmployee(e.target.value);
    }
    const handleProjects = (e) => {
        addNewEmployee(e.target.value);
    }

    const handleClick = () => {
        props.addEmployeeToArray(newEmployee);
    }
    return (
        <section>
            <h3>Legg til ny ansatt</h3>
            <label>Navn:</label>
            <input onChange={handleName} type="text"></input>
            <label>Proffesion:</label>
            <input onChange={handleProffesion} type="text"></input>
            <label>Project(s):</label>
            <input onChange={handleProjects} type="text"></input>
            <input onClick={handleClick} type="button" value="Bekreft"></input>
            <p>{props.employees.length}</p>
        </section>
    )
} */