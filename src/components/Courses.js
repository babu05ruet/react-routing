import React from 'react';
import {
  Route,
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom';

// Courses component
import CourseContainer from './courses/CoursContainer';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';
import NotFound from './NotFound';

// 'match' keyword is an object of props
const Courses = ({ match }) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    <Switch>
      <Route exact path={match.path} component={ () => <Redirect to={`${match.path}/html`} /> } />
      <Route path={`${match.path}/html`} render={ () => <CourseContainer data={HTMLCourses} />} />
      <Route path={`${match.path}/css`} render={ () => <CourseContainer data={CSSCourses} />} />
      <Route path={`${match.path}/javascript`} render={ () => <CourseContainer data={JSCourses} />} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Courses;