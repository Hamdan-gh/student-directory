import React from 'react';

function ProfileCard({ student, toggleActive }) {
  const { id, name, track, bio, skillLevel, isActive } = student;

  return (
    <div className="profile-card">
      <h3 className="student-name">{name}</h3>
      <p className="student-track"><strong>Track:</strong> {track}</p>
      <p className="student-bio"><strong>Bio:</strong> {bio}</p>
      <p className="student-skill"><strong>Skill Level:</strong> {skillLevel}</p>
      
      {/* Conditional rendering for status */}
      <div className="student-status">
        {isActive ? (
          <p className="status active">Active</p>
        ) : (
          <p className="status inactive">Inactive</p>
        )}
      </div>
      
      {/* Toggle button */}
      <button 
        className="toggle-button"
        onClick={() => toggleActive(id)}
      >
        {isActive ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  );
}

export default ProfileCard;