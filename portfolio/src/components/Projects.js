import React, { Component } from 'react';
import '../style/Projects.css'
import blogy_logo from '../images/blogy_logo.png'
import logo from '../images/logo.png'
import teach_me_logo from '../images/teach_me_logo.png'


class Projects extends Component {
    render() {
        const projects = [
            {
                logo: teach_me_logo,
                name: 'TeachMe',
                description: 'Deployed this project using: HTML, CSS, Bootstrap, Python, Django, and Postgres. It is a website allowed the instructor to create a new course and add their content, and allowed the learner to enrollment to these courses and download download course attachment files',
                github: 'https://github.com/ashwagzabani/TeachMe',
                link: ''
            },
            {
                logo: blogy_logo,
                name: 'Blogy',
                description: 'Deployed this project using: HTML, CSS, Bootstrap, Python, Django, and Postgres. It is a website where a writer share their views on an individual subject. It allows the logged-in user to create their own post, interact with published posts by sharing their opinion and report a post',
                github: 'https://github.com/ashwagzabani/Blogy',
                link: 'https://blogyproject.herokuapp.com/'
            },
            {
                logo: logo,
                name: 'Mini-Twitter',
                description: 'Deployed this project using: HTML, CSS, React Js, React Bootstrap and Axsios. This project allowed the user to add new tweets and managed them using their account',
                github: 'https://github.com/ashwagzabani/Mini-Twitter',
                link: 'https://mini-twitter-react-app.herokuapp.com/'
            }
        ]

        const viewMyProjects = projects.map(project => {
            return (
                <div className="card">
                    <div className="row">
                        <div className="col-md-3 logo">
                            <img src={project.logo} alt={project.logo} width="80px" />
                        </div>
                        <div className="col-md-9 details">
                            <div className="project-details">
                                {project.name == 'TeachMe' ?
                                    <h5>{project.name}</h5>
                                    :
                                    <h5><a href={project.link} target="_blanck">{project.name}</a></h5>}

                                <a href={project.github} target="_blanck"><i className="fa fa-github"></i></a>
                            </div>
                            <p>{project.description}</p>
                            {/* <a>Github Link</a> */}


                        </div>
                    </div>
                </div>
            );
        })
        return (
            <div className="container projects overflow-auto">
                <h1>Projects</h1>
                {viewMyProjects}
            </div>
        );
    }
}

export default Projects;
