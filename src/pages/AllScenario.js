import React from "react";
import './AllScenario.css';
import { AiFillPlusCircle } from "react-icons/ai"
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AllScenario = () => {

    const navigate = useNavigate();

    function newScenarioHandeler() {
        navigate("/addscenario");
    }

    function addVehicleHandeler() {
        navigate("/addvehicle");
    }

    return (
        <div className="allscenario_container">
            
            <div className="allscenario_container_items">
                <div>
                    <p className="allscenario_container_firstitem">All Scenarios</p>
                </div>
                <div className="allscenario_container_buttons">
                    <button className="newScenario_button"
                    onClick={newScenarioHandeler}
                    >
                        New Scenario
                    </button>
                    <button className="addVehicle_button"
                    onClick={addVehicleHandeler}
                    >
                        Add Vehicle
                    </button>
                    <button className="delete_button">
                        Delete All
                    </button>
                </div>
            </div>

            <div className="allScenario_lists">
                <div className="allScenario_headding">
                    <p>Scenario Id</p>
                    <p>Scenario Name</p>
                    <p>Scenario Time</p>
                    <p>Number of Vehicle</p>
                    <p>Add Vehicle</p>
                    <p>Edit</p>
                    <p>Delete</p>
                </div>

                <div className="allScenario_headdings">
                    <p>1</p>
                    <p>Test Scenario</p>
                    <p>2s</p>
                    <p>1</p>
                    <AiFillPlusCircle/>
                    <BsFillPencilFill/>
                    <FaTrashAlt/>
                </div>

                <div className="allScenario_headdings">
                    <p>2</p>
                    <p>My Scenario</p>
                    <p>10s</p>
                    <p>3</p>
                    <AiFillPlusCircle/>
                    <BsFillPencilFill/>
                    <FaTrashAlt/>
                </div>

                <div className="allScenario_headdings">
                    <p>3</p>
                    <p>Scenario ABC</p>
                    <p>12s</p>
                    <p>0</p>
                    <AiFillPlusCircle/>
                    <BsFillPencilFill/>
                    <FaTrashAlt/>
                </div>
            </div>

        </div>
    );
};

export default AllScenario;