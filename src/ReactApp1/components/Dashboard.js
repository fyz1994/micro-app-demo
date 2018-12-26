import React, { Component } from 'react'
import { Link } from 'react-router'

class Dashboard extends Component {
  render() {
    const { courses } = this.props

    return (
      <div>
        <h2>微应用1</h2>

        <h2>Courses</h2>{' '}
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <Link to={`/react/course/${course.id}`}>{course.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Dashboard
