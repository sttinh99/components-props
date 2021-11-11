import React from 'react'
import PropTypes from 'prop-types'
import Course from './Course';

export default function Courses({ item }) {
    console.log(item);
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
    course: PropTypes.object
};

Courses.defaultProps = {
    course: {}
}