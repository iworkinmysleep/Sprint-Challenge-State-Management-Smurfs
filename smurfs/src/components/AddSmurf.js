import React, { useState } from "react";

const AddSmurf = () => {
	const [smurfVillage, setSmurfVillage] = useState({
		name: "",
		age: "",
		height: "",
	});
	const handleChanges = (e) => {
		e.preventDefault();
		setSmurfVillage({
			...smurfVillage,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div>
			<h2>Add Smurf to Village!</h2>
			<form>
				<label htmlFor="name">
					Name:
					<input
						type="text"
						placeholder="Smurf Name.."
						onChange={handleChanges}
						value={smurfVillage.name}></input>
				</label>
				<label htmlFor="age">
					Age:
					<input
						type="text"
						placeholder="Smurf Age.."
						onChange={handleChanges}
						value={smurfVillage.age}></input>
				</label>
				<label htmlFor="height">
					Height:
					<input
						type="text"
						placeholder="Smurf Height.."
						onChange={handleChanges}
						value={smurfVillage.height}></input>
				</label>
				<button type="submit">Add Smurf</button>
			</form>
		</div>
	);
};

export default AddSmurf;
