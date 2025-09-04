// src/components/AdminPortal.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPortal.css';

const courses = [
  { title: 'AWS', image: '/images/aws.jpg' },
  { title: 'Azure', image: '/images/azure.jpg' },
  { title: 'DevOps', image: '/images/devops.jpg' },
  { title: 'AI', image: '/images/ai.jpg' },
  { title: 'ML Ops', image: '/images/mlops.jpg' },
  { title: 'Python', image: '/images/python.jpg' },
  { title: 'Data Engg', image: '/images/dataengg.png' },
  { title: 'Java', image: '/images/java.jpg' },
  { title: 'ReactJS', image: '/images/reactjs.jpg' }
];

const AdminPortal = () => (
  <div className="admin-portal-container">
    <Link to="/" className="home-button">HOME</Link>

    <h1 className="admin-title">Edify Courses</h1>

    <div className="course-grid">
      {courses.map((course, index) => (
        <div className="course-card" key={index}>
          <img src={course.image} alt={course.title} className="course-image" />
          <div className="course-title">{course.title}</div>
        </div>
      ))}
    </div>
  </div>
);

export default AdminPortal;
