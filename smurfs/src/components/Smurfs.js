import React, { useContext } from "react";
import smurfContext from "../context/smurfContext";

const Smurfs = () => {
	const { smurf } = useContext(smurfContext);
	console.log("smurf", { smurf });

	const smurfList = smurf.map((i) => (
		<div className="smurf" key={i.id}>
			<h2>{i.name}</h2>
			<p>Age: {i.age}</p>
			<p>Height: {i.height}</p>
		</div>
	));

	return <div>{smurfList}</div>;
};

export default Smurfs;
