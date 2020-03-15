import React from 'react'

function Wrapper(props) {
    return (
    <div id="container" className="container-fluid d-flex flex-wrap justify-content-center align-items-start align-content-start">
        <div className="row w-100 mb-0">
        <h1 id="quote-mark" className="col-12 text-center text-light mt-2 mb-3">Random Quote Machine</h1>
        </div>

        <div className="row w-100">
            <h1 className="col-10 text-white-50 ml-5 pl-5 px-0 d-block mx-auto display-1">&#8220;</h1> -->
            <div id="quote-box" className="col-sm-10 col-md-6 col-lg-4 py-3 px-4 d-block mx-auto mt-5 mb-0 rounded">
            { props.children }
            </div>
        </div>
    </div>
    )
}

export default Wrapper
