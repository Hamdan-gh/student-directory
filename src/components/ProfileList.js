import React from 'react';
import ProfileCard from './ProfileCard';

function ProfileList({ students, toggleActive }) {
  return (
    <div className="profile-list">
      {students.map((student) => (
        <ProfileCard 
          key={student.id}
          student={student}
          toggleActive={toggleActive}
        />
      ))}
    </div>
  );
}

export default ProfileList;