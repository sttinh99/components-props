import React from 'react'
import PropTypes from 'prop-types'

export default function Course({ course }) {
    return (
        <div key={course.id} className="course">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
        </div>
    );
}
Course.propTypes = {
    course: PropTypes.object
};

Course.defaultProps = {
    course: {}
}