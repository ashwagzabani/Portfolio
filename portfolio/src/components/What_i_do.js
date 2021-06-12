import React, { Component } from 'react';
import '../style/What_i_do.css'

class What_i_do extends Component {
    render() {
        return (
            <div className="container what-i-do">
                <h1>What I Do ?</h1>
                <div className="card">
                    <div className="card-body">
                        <i class="fa fa-code" aria-hidden="true"></i>
                        <br />
                        <h5>Software Engineer</h5>
                        <p>A software engineer with extensive knowledge in different front-end and back-end development techniques, responsive frameworks, databases, and best coding practices. Looking to grow by learning from seasoned software developers, and continuous professional development.</p>
                        <div className="skills">
                            <div className="row">
                                <div className="col-md-6">
                                    <div id="html-skill" className="skill">
                                        <p>HTML, CSS</p>
                                        <div className="progress">
                                            <div className="mybar"></div>
                                        </div>
                                    </div>
                                    <div id="css-skill" className="skill">
                                        <p>REACT</p>
                                        <div className="progress">
                                            <div className="mybar"></div>
                                        </div>
                                    </div>
                                    <div id="html-skill" className="skill">
                                        <p>JAVASCRIPT</p>
                                        <div className="progress">
                                            <div className="mybar"></div>
                                        </div>
                                    </div>
                                    <div id="css-skill" className="skill">
                                        <p>MONGODB</p>
                                        <div className="progress">
                                            <div className="mybar"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div id="html-skill" className="skill">
                                        <p>PYTHON</p>
                                        <div className="progress">
                                            <div className="mybar"></div>
                                        </div>
                                    </div>
                                    <div id="css-skill" className="skill">
                                        <p>DJANGO</p>
                                        <div className="progress">
                                            <div className="mybar"></div>
                                        </div>
                                    </div>
                                    <div id="html-skill" className="skill">
                                        <p>EXPRESS</p>
                                        <div className="progress">
                                            <div className="mybar"></div>
                                        </div>
                                    </div>
                                    <div id="css-skill" className="skill">
                                        <p>POSTGRES SQL</p>
                                        <div className="progress">
                                            <div className="mybar"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default What_i_do;
