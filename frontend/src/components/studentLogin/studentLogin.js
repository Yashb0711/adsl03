import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./studentLogin.css";

function StudentLogin() {
    const navigate = useNavigate();
    return (
        <div style={{ textAlign: "center", fontFamily: "verdana" }}>
            <h1 style={{ fontFamily: "verdana" }}>Login</h1>
            <div className="studentLogin" style={{ backgroundColor: "#3fb1fc" }}>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        console.log(event.target.studentId.value);
                        axios
                            .post("http://localhost:5000/login/user", {
                                username: event.target.studentId.value,
                                password: event.target.password.value,
                            })
                            .then((res) => {
                                console.log("Res", res);
                                if (res.data.userType === 'Student') {
                                    console.log('student logged');
                                    navigate("/StudentView/" + event.target.studentId.value);
                                }
                                else if (res.data.userType === 'Faculty') {
                                    console.log("facality staff enterd");
                                    // navigate("/StudentView/" + event.target.studentId.value);
                                    // navigate("/Home");
                                    navigate("/FacultyRegister/");


                                }

                            })
                            .catch((err) => {
                                alert("Invalid Credentials");

                                console.log("Err", err);

                            });
                    }}
                >
                    <h3 className="studentLoginH3">Username :</h3>
                    <input type="text" name="studentId" />
                    <br />
                    <h3 className="studentLoginH3">Password</h3>
                    <input type="password" name="password" />
                    <br />
                    <button className="studentLoginButton" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default StudentLogin;