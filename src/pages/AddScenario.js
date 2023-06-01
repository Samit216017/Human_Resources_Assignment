import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddScenario.css';

const AddScenario = ({setAllForm}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(
        {
            scenarioname: "",
            scenariotime: ""
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
        setAllForm(formData);
    }

    function clickReastHandeler() {
        navigate("/addscenario");
    }

    function clickBackHandeler() {
        navigate(-1);
    }

    return (
        <div className="add_scenario_page">

            <div>
                <p className="para_1">Scenario / add</p>
                <p className="para_2">Add Scenario</p>
            </div>

            <form>

                <div className="add_scenario_form_container">
                    <label>
                        <p>Scenario Name</p>

                        <input
                            required
                            type="text"
                            name="scenarioname"
                            id="scenarioname"
                            placeholder="Test Scenario"
                            value={formData.scenarioname}
                            onChange={changeHandeler}
                        />

                    </label>

                    <label>
                        <p>Scenario Time (seconds)</p>

                        <input
                            required
                            type="text"
                            name="scenariotime"
                            id="scenariotime"
                            placeholder="10"
                            color="white"
                            onChange={changeHandeler}
                            value={formData.scenariotime}
                        />

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

export default AddScenario;