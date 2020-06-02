import React, { useState, useEffect } from "react";
import axios from "axios";
import AddSmurf from "../components/AddSmurf";
import Smurfs from "../components/Smurfs";
import smurfContext from "../context/smurfContext";

import "./App.css";

const App = () => {
	const [smurf, setSmurf] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3333/smurfs")
			.then((res) => {
				console.log(res);
				setSmurf(res.data);
			})
			.catch((err) => console.log(err.res));
	}, []);

	const formSubmit = (smurf) => {
		axios
			.post("http://localhost:3333/smurfs", smurf)
			.then((res) => {
				setSmurf(res.data);
			})
			.catch((err) => console.log(err.res));
	};

	return (
		<div className="App">
			<smurfContext.Provider value={{ smurf }}>
				<h1>SMURFS! 2.0 W/ Redux</h1>
				<div>Welcome to your state management version of Smurfs!</div>
				<div>Start inside of your `src/index.js` file!</div>
				<div>Have fun!</div>
				<br />
				
				<div className="container container-primary">
					<img className='image-thumbnail'src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZBLsHAUCYfY3MKFKZL4C6ZtltagMm2xEtHIkmecpkitdm_wwd&usqp=CAU' alt='smurf village'></img>
					<Smurfs />
					<img  className='image-thumbnail' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk1pnqTzWKjz_SnoXCeAG3RhOX2KI1Whp_r1yfl86md9w9Tez6&usqp=CAU' alt=''></img>
					<AddSmurf formSubmit={formSubmit} />
				</div>
				
			</smurfContext.Provider>
		</div>
	);
};

export default App;
