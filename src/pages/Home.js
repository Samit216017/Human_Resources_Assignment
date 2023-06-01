import React, { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { VscBlank } from "react-icons/vsc";
import './Home.css';

const Home = ({allForm, setAllForm}) => {

    const val = allForm.count;

    console.log(val);

    const [formData, setFormData] = useState(
        {
            scenario: "Test Scenario"
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
    

    return (
        <div className="home_wrapper">
            
            <div className="home_contents">

                <div className="scenario_content">
                    <label className="scenario_option_list">
                        <span>Scenario</span>
                        <select
                            required
                            name="scenario"
                            id="scenario"
                            value={formData.scenario}
                            onChange={changeHandeler}
                        >
                            <option>Test Scenario</option>
                            <option>My Scenario</option>
                        </select>
                    </label>
                </div>

                <div className="scenario_table">

                    <div className="scenario_table_contents">
                        <p>Vehicle Id</p>
                        <p>Vehicle Name</p>
                        <p>Position X</p>
                        <p>Position Y</p>
                        <p>Speed</p>
                        <p>Direction</p>
                        <p>Edit</p>
                        <p>Delete</p>
                    </div>

                    <div className="scenario_table_content">
                        <p>{allForm.count}</p>
                        <p>{allForm.vehiclename}</p>
                        <p>{allForm.positionx}</p>
                        <p>{allForm.positiony}</p>
                        <p>{allForm.speed}</p>
                        <p>{allForm.direction}</p>
                        {/* {
                            val !== "" ? (<VscBlank/>) : (<BsFillPencilFill/>)
                        } */}
                        {/* {
                            val !== 0 ? (<VscBlank/>) : (<FaTrashAlt/>)
                        } */}
                        <BsFillPencilFill/>
                        <FaTrashAlt/>
                    </div>

                    {/* <div className="scenario_table_content">
                        <p>1</p>
                        <p>Bus</p>
                        <p>30</p>
                        <p>215</p>
                        <p>3</p>
                        <p>Towards</p>
                        <BsFillPencilFill/>
                        <FaTrashAlt/>
                    </div>

                    <div className="draw_line"></div>

                    <div className="scenario_table_content">
                        <p>2</p>
                        <p>Car</p>
                        <p>500</p>
                        <p>500</p>
                        <p>5</p>
                        <p>Upwards</p>
                        <BsFillPencilFill/>
                        <FaTrashAlt/>
                    </div> */}

                </div>

                <div className="home_buttons">
                    <button className="home_buttons_stop">
                    Stop Simulation
                    </button>
                    <button className="home_button_start">
                        Start Simulation
                    </button>
                </div>

                <div className="square_boxes">
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box_29">
                        <div className="circle_1">
                            1
                        </div>
                    </div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box_80">
                        <div className="circle_2">
                            2
                        </div>
                    </div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                    <div class="square_box"></div>
                </div>

            </div>

        </div>
    );
};

export default Home;