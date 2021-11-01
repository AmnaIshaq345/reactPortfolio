import React from 'react';
import { Card } from 'react-bootstrap';
import AlbumIcon from '@mui/icons-material/Album';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import SchoolIcon from '@mui/icons-material/School';
import FlagIcon from '@mui/icons-material/Flag';



const containerStyle = {
    border: '1px solid silver',
    borderRadius: 'none',
    background: '#ededed'
};

const contentStyle = {
    background: '#F5BFB3',
    height: '5px',
    textAlign: 'center',
    lineHeight: '24px',
    fontFAmily: 'sans-serif'
};
const ProgressBar = ({ progress }) => {
    const state = `${progress}%`;
    return (
        <div style={containerStyle}>
            <div style={{ ...contentStyle, width: state }}>
                {progress > 5 ? state : ''}
            </div>
        </div>
    );
};
const cardStyle = {
    borderColor: '#F5BFB3',
    border: '2px solid #F5BFB3',
    marginRight: '10px',
    paddingBottom: '15px',
    marginTop: '10px'

}

function Portfolio() {
    return (
        <div>
            <div className='container my-1 text-decoration-underline'><h1>MY SKILLS</h1></div>
            <section className="container my-5 pt=4">
                <div className="row">
                    <div className="col-md-6 ">
                        <h6> HTML</h6>
                        <ProgressBar progress={80} />
                        <br />
                        <h6>Css</h6>
                        <ProgressBar progress={80} />
                        <br />
                        <h6>BootStrap</h6>
                        <ProgressBar progress={80} />
                        <br />
                        <h6>JavaScript</h6>
                        <ProgressBar progress={40} />
                        <br />
                        <h6>REACT</h6>
                        <ProgressBar progress={30} />
                    </div>
                    <div className="col-md-3">
                        <Card className="card mt-4 pb-4" style={{cardStyle}}>
                            <Card.Body>
                                <Card.Title><AlbumIcon /><h4>80 Albums Listened</h4></Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="card pb-4" style={{cardStyle}}>
                            <Card.Body>
                            <SchoolIcon />
                                <Card.Title><h4>15 Awards won</h4></Card.Title>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-3">
                        <Card className="card mt-4 py-4" style={{cardStyle}}>
                            <Card.Body>
                                <Card.Title><h4> <FreeBreakfastIcon />1000 cup of Tea</h4></Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="card py-3" style={{cardStyle}}>
                            <Card.Body >
                                <Card.Title><FlagIcon /><h4>10 Countries visited</h4></Card.Title>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Portfolio
