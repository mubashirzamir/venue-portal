import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Home = () => {

    const [venues, setVenue] = useState([]);

    useEffect(() => {
        loadVenues();
        //console.log("Hello")
    }, []);

    const loadVenues = async () => {
        const result = await axios.get("http://localhost:3001/api/venue/getvenue");
        console.log(result.data)
        console.log("Hi")
        setVenue(result.data.venue)
        console.log(result.data.venue);
    }

    const deleteVenue = async venue_id => {
        const result = axios({
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + String(sessionStorage.getItem("accessToken"),),
            },
            url: 'http://localhost:3001/managerAPI/deleteVenue',
            data: {
                venue_id: venue_id
            }
        });
        console.log(result)
        loadVenues();

        console.log("Hello")

    }

    return (
        <div class="container">
            <div className="py-4">
                <h1>Home</h1>

                <table class="table shadow">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Type</th>
                            <th scope="col">Halls</th>
                            <th scope="col">Price per head</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            venues.map((venue, index) => (

                                <tr>
                                    <th scope="row">{venue.venue_id}</th>
                                    <td>{venue.venue_name}</td>
                                    <td>{venue.location_name}</td>
                                    <td>{venue.venue_type}</td>
                                    <td>{venue.halls}</td>
                                    <td>{venue.price_per_head}</td>
                                    <td>
                                        <Link class="btn btn-primary me-2" to={`/venue/${venue.venue_id}`}>View</Link>
                                        <Link class="btn btn-outline-primary me-2" to={`/venue/edit/${venue.venue_id}`}>Edit</Link>
                                        <button class="btn btn-danger" onClick={() => deleteVenue(venue.venue_id)}>Delete</button>

                                    </td>
                                </tr>

                            ))

                        }


                    </tbody>
                </table>

            </div>
        </div >

    )

}


export default Home