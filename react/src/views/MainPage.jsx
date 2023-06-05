import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('API_URL'); // API_URL, ders bilgilerini döndüren bir API adresine karşılık gelmelidir
      setCourses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Eğitim Web Sitesi</h1>
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <img src={course.image} alt={course.title} />
          <div className="instructor-info">
            <img src={course.instructorImage} alt={course.instructorName} />
            <p>{course.instructorName}</p>
          </div>
          <button>Katıl</button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

