import React from 'react';
import Button from '@restart/ui/esm/Button';
import styled from 'styled-components';

const styles= {
    'background-color': '#F5BFB3 ',
    'color': 'white',
    'margin-right': '5px',
    'padding': '5px 15px',
    'border-radius': '0px',
    'border': 'none'
    
}
function About() {
    return (
        <div className='bg-secondary'>
            <div className='container my-1 text-decoration-underline'><h1>About Me</h1></div>
            <section className="container my-5 pt=4">
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center align-item-center">
                        <img src="Assets/Amna.jpg" alt="portfolio pic" height="400px" width="300px" />
                    </div>
                    <div className="col-md-7 mt-5">
                        <h3 className="display 5 mb-4 text-">I'm Amna Ishaq</h3>
                        <h4 className="display5 mb-4">Junior Full Stack Developer</h4>
                        <p className='lead mb-4 fw-light'>
                            My name is Amna Ishaq. I'm from Chakwal. I've done my BSCS from Virtual University
                            Pakistan. I'm Junior Full Stack Developer.Artist turned software developer, hoping to
                            share my knowledge & help other dev newbies out. I learnt to code during 2021 by
                            self-teaching and bootcamp. I am now employed as a junior stack developer. I've completed my
                            3 projects successfully till now. You can check my projects details in projects section.
                            Currently I've catched new projects.
                        </p>
                        <a href="https://docs.google.com/document/d/1M5pey2xIGBA-YsmkLTjKmeBCEKbKAm93GAdPKd4FNlM/edit" target="_blank">
                            <Button className='btn' style={styles}> DOWNLOAD CV </Button>
                        </a>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default About
