import React from 'react';
import ImportantDevicesSharpIcon from '@mui/icons-material/ImportantDevicesSharp';
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import MobileFriendlyRoundedIcon from '@mui/icons-material/MobileFriendlyRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';



const style= {
    backGround: '#ECF0F1',
}
function Services() {
    return (
        <div style= {{style}}>
            <h1 className="heading py-5 px-5">MY SERVICES</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div class="card py-4 px-1 ">
                            <div class="card-body" >
                            <ImportantDevicesSharpIcon />
                                <h3>Unique Design</h3>
                                <p>I design and developed services for customers of all
                                    sizes, specialising in creating stylish websites.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="card py-4 px-1">
                            <div class="card-body">
                                <CreateSharpIcon />
                                <h3>Different Layout</h3>
                                <p>I design and developed services for customers of all
                                    sizes, specialising in creating stylish websites.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="card py-4 px-1">
                            <div class="card-body">
                            <ForumRoundedIcon />
                            <h3>Make It Simple</h3>
                            <p>I design and developed services for customers of all
                                    sizes, specialising in creating stylish websites.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div class="card py-4 px-1 my-4">
                            <div class="card-body">
                                <MobileFriendlyRoundedIcon />
                                <h3>Responsiveness</h3>
                                <p>I design and developed services for customers of all
                                    sizes, specialising in creating stylish websites.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="card py-4 px-1 my-4">
                            <div class="card-body">
                                <SpeedRoundedIcon />
                                <h3>Testing for perfection</h3>
                                <p>I design and developed services for customers of all
                                    sizes, specialising in creating stylish websites.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="card py-4 px-1 my-4">
                            <div class="card-body">
                                <HourglassEmptyRoundedIcon />
                            <h3>Advanced options</h3>
                            <p>I design and developed services for customers of all
                                    sizes, specialising in creating stylish websites.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
