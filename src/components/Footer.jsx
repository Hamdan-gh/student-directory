import React from 'react';

function Footer({ totalStudents }) {
  return (
    <footer className="footer">
      <p>Total Students: {totalStudents}</p>
      <p>© 2026 Student Profile Directory</p>
    </footer>
  );
}

export default Footer;