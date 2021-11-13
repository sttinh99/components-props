import React from 'react'
import PropTypes from 'prop-types'
import Course from './Course';
import HOCs from './HOCs';

function Courses({ item, name = "B" }) {
    return (
        <div className="container">
            <h3>{item.type}</h3>
            <div className="courses">
                {
                    item.courses.map((item, index) =>
                        <Course course={item} key={index} />
                    )
                }
            </div>
        </div>
    );
}

Courses.propTypes = {
    item: PropTypes.object
};

Courses.defaultProps = {
    item: {}
}
export default HOCs(Courses)