import React, { useState } from "react";

const AddSmurf = ({ formSubmit }) => {
	const [smurfVillage, setSmurfVillage] = useState({
		name: "",
		age: "",
    height: "",
	});
	const handleChanges = (e) => {
		setSmurfVillage({
			...smurfVillage,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		formSubmit(smurfVillage);
		setSmurfVillage({
			name: "",
			age: "",
      height: "",
      id: 1,
		});
	};

	return (
		<div className='smurf_form'>
			<h2>Add Smurf to Village!</h2>
				<label htmlFor="name">
					Name:
					<input
            type="text"
            name='name'
						placeholder="Smurf Name.."
						onChange={handleChanges}
						value={smurfVillage.name}></input>
				</label>
				<label htmlFor="age">
					Age:
					<input
            type="text"
            name='age'
						placeholder="Smurf Age.."
						onChange={handleChanges}
						value={smurfVillage.age}></input>
				</label>
				<label htmlFor="height">
					Height:
					<input
            type="text"
            name='height'
						placeholder="Smurf Height.."
						onChange={handleChanges}
						value={smurfVillage.height}></input>
				</label>
				<button type="submit" onClick={handleSubmit}>
					Add Smurf
				</button>
		</div>
	);
};

export default AddSmurf;
