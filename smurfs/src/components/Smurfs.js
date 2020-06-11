import React, { useContext } from "react";
import smurfContext from "../context/smurfContext";

const Smurfs = () => {
	const { smurf } = useContext(smurfContext);
	console.log("smurf", { smurf });

	const smurfList = smurf.map((i) => (
		<div className="row" key={i.id}>
			<div className="col-lg-6">
				<div className="card mb-2 shadow-lg">
					<div className="card-body">
						<h2>{i.name}</h2>
						<p>Age: {i.age}</p>
						<p>Height: {i.height}</p>
					</div>
				</div>
			</div>
		</div>
	));

	return <div>{smurfList}</div>;
};

export default Smurfs;
