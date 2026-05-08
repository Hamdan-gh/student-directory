import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProfileList from './components/ProfileList';
import Footer from './components/Footer';

function App() {
  // Student data array with 6 unique profiles
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Abdul Hafiz",
      track: "Frontend Development",
      bio: "Learning React and building interfaces",
      skillLevel: "Beginner",
      isActive: true,
    },
    {
      id: 2,
      name: "Hamdan",
      track: "Backend Development",
      bio: "Working with APIs and databases",
      skillLevel: "Intermediate",
      isActive: false,
    },
    {
      id: 3,
      name: "Tiisu",
      track: "Full Stack Development",
      bio: "Building complete web applications from frontend to backend",
      skillLevel: "Advanced",
      isActive: true,
    },
    {
      id: 4,
      name: "Sharrif",
      track: "Data Science",
      bio: "Analyzing data and building machine learning models",
      skillLevel: "Intermediate",
      isActive: true,
    },
    {
      id: 5,
      name: "Okaha",
      track: "Mobile Development",
      bio: "Creating mobile apps for iOS and Android platforms",
      skillLevel: "Beginner",
      isActive: false,
    },
    {
      id: 6,
      name: "Kamil",
      track: "DevOps Engineering",
      bio: "Managing cloud infrastructure and deployment pipelines",
      skillLevel: "Advanced",
      isActive: true,
    }
  ]);

  // Function to toggle the active status of a student
  function toggleActive(id) {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, isActive: !student.isActive }
          : student
      )
    );
  }

  return (
    <div className="App">
      <Header />
      <ProfileList students={students} toggleActive={toggleActive} />
      <Footer totalStudents={students.length} />
    </div>
  );
}

export default App;
