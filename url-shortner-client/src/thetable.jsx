import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Thetable() {
	const [urls, seturl] = useState([]);

	useEffect(() => {
		axios.get("https://ul-sh.herokuapp.com/").then(res => {
			seturl(res.data.reverse());
		});
	}, [urls]);

	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>OLD URL</th>
						<th>NEW URL</th>
						<th>Clicks</th>
					</tr>
				</thead>
				<tbody>
					{urls.map((item, ind) => {
						const redirectlink =
							"https://ul-sh.herokuapp.com/" + item.new;
						const red =
							"ul-sh.herokuapp.com/" + item.new;
						return (
							<tr>
								<td> {ind + 1}</td>
								<td> {item.old} </td>
								<td>
									<a href={redirectlink}>{red}</a>
								</td>
								<td> {item.count}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
}
