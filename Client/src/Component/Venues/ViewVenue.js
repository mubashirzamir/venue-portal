import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';
import AddReview from "./AddReview";
import ReviewList from "./ReviewList";

const ViewVenue = () => {

    const { venue_id } = useParams();

    const [venue, setVenue] = useState({
        venue_name: "",
        venue_type: "",
        halls: "",
        description: "",
        latitude: "",
        longitude: "",
        location_name: "",
        price_per_head: "",
        min_cap: "",
        max_cap: "",
        city: "",
        area: "",
    })

    const { venue_name, venue_type, halls, description, latitude, longitude, location_name, price_per_head, min_cap, max_cap, city, area } = venue;

    useEffect(() => {
        loadVenue()
    }, [])


    const loadVenue = async () => {
        const result = await axios.post("http://localhost:3001/api/venue/getSingleVenue", {
            venue_id: venue_id
        })

        setVenue(result.data);

        //console.log(result.data)

    }


    return (
        <div class="container">

            <div className="py-4">

                <h1>View Venue</h1>

                <div class="row mb-3">
                    <label for="inputText3" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputText3" name="venue_name" value={venue_name} readOnly />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="inputText3" class="col-sm-2 col-form-label">Type</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputText3" name="venue_type" value={venue_type} readOnly />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="inputText3" class="col-sm-2 col-form-label">Halls</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="inputText3" name="halls" value={halls} readOnly />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="exampleFormControlTextarea1" class="col-sm-2 col-form-label">Description</label>
                    <div class="col-sm-10">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" name="description" value={description} readOnly ></textarea>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="inputText3" class="col-sm-2 col-form-label">Latitude</label>
                    <div class="col-sm-10">
                        <input type="number" step="any" class="form-control" id="inputText3" name="latitude" value={latitude} readOnly />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="inputText3" class="col-sm-2 col-form-label">Longitude</label>
                    <div class="col-sm-10">
                        <input type="number" step="any" class="form-control" id="inputText3" name="longitude" value={longitude} readOnly />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="inputText3" class="col-sm-2 col-form-label">City</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputText3" name="city" value={city} readOnly />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="inputText3" class="col-sm-2 col-form-label">Area</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputText3" name="area" value={area} readOnly />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="inputText3" class="col-sm-2 col-form-label">Address</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputText3" name="location_name" value={location_name} readOnly />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="inputText3" class="col-sm-2 col-form-label">Price Per Head</label>
                    <div class="col-sm-10">
                        <input type="number" step="any" class="form-control" id="inputText3" name="price_per_head" value={price_per_head} readOnly />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="inputText3" class="col-sm-2 col-form-label">Minimum Capacity</label>
                    <div class="col-sm-10">
                        <input type="number" step="any" class="form-control" id="inputText3" name="min_cap" value={min_cap} readOnly />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="inputText3" class="col-sm-2 col-form-label">Maximum Capacity</label>
                    <div class="col-sm-10">
                        <input type="number" step="any" class="form-control" id="inputText3" name="max_cap" value={max_cap} readOnly />
                    </div>
                </div>

                {/*<div class="col-12">
                    <Link class="btn btn-primary" type="submit" to={"/"}>Back</Link>
    </div>*/}

                <br />
                <ReviewList />

            </div>

        </div >
    )

}

export default ViewVenue;