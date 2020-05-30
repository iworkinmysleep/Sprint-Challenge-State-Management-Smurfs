import React, { useContext } from "react";
import smurfContext from "../context/smurfContext";

const Smurfs = () => {
	const { smurf } = useContext(smurfContext);
	console.log("smurf", { smurf });

	const smurfList = smurf.map((i) => (
		<div className="smurf_container">
			<div className="smurf" key={i.id}>
				<h3>Name: {i.name}</h3>
				<h4>Age: {i.age}</h4>
				<h4>Height: {i.height}</h4>
			</div>
		</div>
	));

	return <div>{smurfList}</div>;
};

export default Smurfs;
