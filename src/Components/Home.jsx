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


function Home() {
    return (
        <div>
            <section className="container my-5 pt=4">
                <div className="row">
                    <div className="col-md-5 mt-5">
                        <h5 className="display 5 mb-4 text-">Hello, there...</h5>
                        <h1 className="display5 mb-4">Amna Ishaq</h1>
                        <h2 className="display5">I'm Passionate Developer</h2>
                        <p className='lead mb-4'>
                            "This is my official portfolio website to show all details and work experience."
                        </p>
                        <a href="/services" target="_blank">
                            <Button  className='btn' style= {styles}> MY WORK </Button>
                        </a>
                        <a href="/contact" target="_blank">
                            <Button className='btn' style= {styles} > HIRE ME </Button>
                        </a>
                    </div>
                    <div className="col-md-7 d-flex justify-content-center align-item-center">
                        <img src="Assets/Amna.jpg" alt="portfolio pic" height="400px" width="300px" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home
