import React from 'react';

function Blog() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">

                        <img src="Assets/work1.jpg" className="card-img-top" alt="first Project" style={{ height: '20rem' }} />

                    </div>
                    <div className="col-md-4">
                        <img src="Assets/work2.jpg" className="card-img-top" alt="Second Project" style={{ height: '20rem' }} />
                    </div>
                    <div className="col-md-4">
                        <img src="Assets/work3.jpg" className="card-img-top" alt="third Project" style={{ height: '18rem' }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img src="Assets/work4.jpg" className="card-img-top" alt="first Project" style={{ height: '15rem' }} />
                    </div>
                    <div className="col-md-4">
                        <img src="Assets/work5.jpg" className="card-img-top" alt="Second Project" style={{ width: '23rem', height: '15rem' }} />
                    </div>
                    <div className="col-md-4">
                        <img src="Assets/work6.jpg" className="card-img-top" alt="third Project" style={{ width: '20rem', height: '15rem' }} />

                    </div>
                </div>
                </div>
            </>
            )
}

            export default Blog;
