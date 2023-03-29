import React from "react";

function Landing() {
    return (
        <div>
            <div style={{ float: "right", padding: "5px" }}>
                <button style={{ margin: "7px", backgroundColor: "#1a56d9", color: "white", borderRadius: "5px" }}><a href="/studentLogin">Login</a></button>

            </div>
            <h1 style={{ textAlign: "center", paddingTop: "70px" }}>WCE, SANGLI ONLINE SFMP</h1>
            <div className="homeImg">
                <img
                    // src="WceLogo.jpg"
                    // src="WceLogo.jpg"
                    src="http://localhost:8000/WceLogo.jpg"
                    alt="WCE"
                />
                <br /><br /><br />
                <p>Walchand College of Engineering is situated midway between Sangli and Miraj cities at Vishrambag, Sangli. The WCE campus is located on about 90 acres of land on southern side of Sangli – Miraj road.

                    In 1947, the college made a modest beginning as New Engineering College, with a single program leading to B.E. (Civil) degree. In the year 1955, the College was renamed as Walchand College of Engineering as part of the new arrangements and pursuant to the Rehabilitation and Development Program mainly funded by Seth Walchand Hirachand Memorial Trust and the Government. The Government appointed an Ad Hoc Committee for conducting the college from May 1955, later replaced by the Administrative Council in 1956. The Ad Hoc Committee added two more degree programs in B.E. (Mechanical) and B.E. (Electrical) in 1955 with the intake of 20 each. Three Diploma programs also started in 1955 – Civil (40 intake), Mechanical (20) and Electrical (20).</p>
            </div>
        </div>
    );
}

export default Landing;