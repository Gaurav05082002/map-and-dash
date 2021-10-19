import React from 'react';
import './Dashboard.css';
<script src="https://kit.fontawesome.com/1999aa8c37.js" crossorigin="anonymous"></script>;

const Dashboard = () => {
    return (
        <div>



            <div class="cards">

                <div class="profile-card">

                    <h4 class="profile-card-heading">
                        Pratyush Garg
                    </h4>

                    <div class="profile-card-college">
                        <i class="fas fa-graduation-cap"> </i>
                        IIT Kharagpur (2024)</div>
                    <h3 class="profile-sf-id">NWP13398</h3>
                    <hr></hr>
                    <div class ="profile-card-text">
                    <div class ="profile-card-text-title">Place: </div>
                    <div class ="profile-card-text-content">Jaipur, Rajasthan</div>
                    </div>

                    <div class ="profile-card-text">
                    <div class ="profile-card-text-title">Date of Birth: </div>
                    <div class ="profile-card-text-content">20/04/2002</div>
                    </div>

                    <div class ="profile-card-text">
                    <div class ="profile-card-text-title">Email: </div>
                    <div class ="profile-card-text-content">gargpratyush999 @gmail.com</div>
                    </div>

                    <div class ="profile-card-text">
                    <div class ="profile-card-text-title">Phone: </div>
                    <div class ="profile-card-text-content">9530152915</div>
                    </div>
                </div>

                <div class="events-registered-card">
                    <h4 class="events-registered-card-heading">
                        Registered Events
                    </h4>

                    <div class="event-div-group">
                        <div class="event-heading-line">
                            <h3 class="event-div-group-eventname">Two for a tango (Group Event)</h3>
                            <div class="event-link">Submission Page &rarr;</div>
                        </div>
                        <div class="event-div-group-text">Team Members: <ul><li>Pratyush Garg</li>
                            <li>Gaurav Patidar</li><li>Somya Gupta</li></ul></div>
                        <div class="event-deregister-button">
                            <button type="button" class="btn btn-outline-dark">DE-REGISTER</button>
                        </div>
                    </div>

                    <div class="event-div-solo">
                        <div class="event-heading-line">
                            <h3 class="event-div-solo-eventname">SF Idol (Solo Event)</h3>
                            <div class="event-link">Submission Page &rarr;</div>
                        </div>
                        <div class="event-deregister-button">
                            <button type="button" class="btn btn-outline-dark">DE-REGISTER</button>
                        </div>
                    </div>

                </div>

                <div class="certificate-card">
                    <h4 class="certificate-card-heading">
                        Certificates
                    </h4>

                    <div class="certificate-div">
                        <h3 class="certificate-div-eventname">Two for a tango</h3>
                        <div class="certificate-div-text">Certificate is not available</div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Dashboard
