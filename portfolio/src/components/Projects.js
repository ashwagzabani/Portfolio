import React, { Component } from 'react';
import '../style/Projects.css'
import logo from '../logo.png'

class Projects extends Component {
    render() {
        const projects = [
            {
                logo: '',
                name: 'TeachMe',
                description: '',
                github: '',
                link: ''
            },
            {
                logo: '',
                name: 'Blogy',
                description: 'Blogy It is an online diary or journal located that shows you a list of posts in different categories you can filter the post by any category you want. Also, you can create your own account and shares your opinions and ideas in your specialty or anything you want with others. In addition, you can engage with others posts by add comments or like their posts.Users cannot post anything without admin permission to publish and users can report any inappropriate content so Blogy Admin can check and solved it.Implementation using HTML, CSS, Bootstrap, Python, Ajax, Django, and Postgres.                ',
                github: 'https://github.com/ashwagzabani/Blogy',
                link: ''
            },
            {
                logo: '',
                name: 'Mini-Twitter',
                description: '',
                github: '',
                link: ''
            }
        ]

        const viewMyProjects = projects.map(project => {
            return (
                <div className="card">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={project.logo} alt="logo" />
                        </div>
                        <div className="col-md-9">
                            <h5>{project.name}</h5>
                            <p>{project.description}</p>
                            <a>Github Link</a>

                            project.name == 'TeachMe' ?
                            <p>Websit Link not aveilabe yet</p>
                            :
                            <a href={project.link}>Websit Link</a>
                        </div>
                    </div>
                </div>
            );
        })
        return (
            <div className="container projects">
                <h1>Projects</h1>
                {viewMyProjects}
            </div>
        );
    }
}

export default Projects;
