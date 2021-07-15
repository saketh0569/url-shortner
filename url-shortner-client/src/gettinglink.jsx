import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Thetable from "./thetable";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const qs = require("querystring");
export default function Gettinglink() {
	const [newmyurl, settheurl] = useState(0);
	const [enteredUrl, setEnteredUrl] = useState("");

	function addnewurl() {
		const config = {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
		};
		axios
			.post(
				"https://ul-sh.herokuapp.com/link",
				qs.stringify({ url: enteredUrl }),
				config
			)
			.then(res =>
				settheurl("ul-sh.herokuapp.com/" + res.data)
			);
	}

	function handleChange(event) {
		setEnteredUrl(event.target.value);
	}

	function formfun(event) {
		event.preventDefault();
	}

	return (
		<div>
			<Form onSubmit={formfun}>
				<Form.Group className="forms">
					<Form.Control
						size="lg"
						type="text"
						placeholder="Large text"
						onChange={handleChange}
						value={enteredUrl}
						type="text"
						placeholder="PAST THE LINK HERE"
					/>

					<Button variant="primary" type="submit" onClick={addnewurl}>
						GET LINK
					</Button>

					{newmyurl != 0 && (
						<h1>
							<a href={"https://" + newmyurl}>{newmyurl}</a>
						</h1>
					)}
				</Form.Group>
			</Form>

			<Thetable />
		</div>
	);
}
