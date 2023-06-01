import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddVehicle.css';

const AddVehicle = ({setAllForm}) => {

    let count = 0;

    const navigate = useNavigate();

    const [formData, setFormData] = useState(
        {
            scenarios: "Select Scenario",
            vehiclename: "",
            speed: "",
            positionx: "",
            positiony: "",
            direction: "Select Direction"
        }
    )

    function changeHandeler(event) {

        setFormData( (prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    function clickAddHandeler(event) {
        event.preventDefault();
        count++;
        const newData = {
            ...formData,
            count
        }
        setAllForm(newData);
    }

    function clickReastHandeler() {
        navigate("/addvehicle");
    }

    function clickBackHandeler() {
        navigate(-1);
    }

    return (
        <div className="add_vehicle_page">
            <div>
                <p className="para_1">Vehicle / add</p>
                <p className="para_2">Add Vehicle</p>
            </div>

            <form>

                <div className="add_vehicle_form_container">

                    <label>
                        <p>Scenarios List</p>

                        <select
                            required
                            name="scenarios"
                            id="scenarios"
                            value={formData.scenarios}
                            onChange={changeHandeler}
                        >
                            <option>Select Scenario</option>
                        </select>
                    </label>

                    <label>
                        <p>Vehicle Name</p>

                        <input
                            required
                            type="text"
                            name="vehiclename"
                            id="vehiclename"
                            placeholder="Target abc"
                            onChange={changeHandeler}
                            value={formData.vehiclename}
                        />
                    </label>

                    <label>
                        <p>Speed</p>

                        <input
                            required
                            type="text"
                            name="speed"
                            id="speed"
                            placeholder="2"
                            onChange={changeHandeler}
                            value={formData.speed}
                        />
                    </label>

                    <label>
                        <p>Position X</p>

                        <input
                            required
                            type="text"
                            name="positionx"
                            id="positionx"
                            placeholder="1000"
                            onChange={changeHandeler}
                            value={formData.positionx}
                        />
                    </label>

                    <label>
                        <p>Position Y</p>

                        <input
                            required
                            type="text"
                            name="positiony"
                            id="positiony"
                            placeholder="20"
                            onChange={changeHandeler}
                            value={formData.positiony}
                        />
                    </label>

                    <label>
                        <p>Direction</p>

                        <select
                            required
                            name="direction"
                            id="direction"
                            value={formData.direction}
                            onChange={changeHandeler}
                        >
                            <option>Select Direction</option>
                            <option>Towards</option>
                            <option>Backwards</option>
                            <option>Upwards</option>
                            <option>Downwards</option>
                        </select>
                    </label>

                </div>

                <div className="buttons_AddS">
                    <button onClick={clickAddHandeler} className="buttons_AddS1">
                        Add
                    </button>
                    <button onClick={clickReastHandeler} className="buttons_AddS2">
                        Reset
                    </button>
                    <button onClick={clickBackHandeler} className="buttons_AddS3">
                        Go Back
                    </button>
                </div>

            </form>


        </div>
    );
};

export default AddVehicle;