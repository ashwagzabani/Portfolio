import React, { Component } from 'react';
import '../style/About_me.css'

class About_me extends Component {
    render() {
        return (
            <div className="container about_me">
                <h1>About Me</h1>
                <h6 className="mystory">MY STORY</h6>
                <p>I’m graduate of Computer Science from King Abdulaziz University in 2018. Recently I finished a full-time internship in the Software Engineer immersive program from General Assembly. </p>
                <p>My internship at General Assembly afforded me the crucial skills that I learned from some of the best professionals in web development. During the course of my three months internship,
                    I developed enthusiasm and passion for web development. Where I learned some web techniques, and I executed some projects individually and collaboratively.</p>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <h6>Age: <span>26</span></h6>
                        <h6>Start work: <span>immediatly</span></h6>
                    </div>
                    <div className="col-md-6">
                        <h6>Location: <span>Jeddah</span></h6>
                        <h6>Email: <span>ashwag.amz@gmail.com</span></h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default About_me;
