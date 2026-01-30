function About() {
  const cardStyle = {
    padding: '20px',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
  };

  return (
    <div style={cardStyle}>
      <h1 style={{ marginBottom: '8px' }}>About Us</h1>
      <p>
        Our company has been providing top-notch services since 1990. We specialize in various fields
        including technology, marketing, and consultancy.
      </p>
    </div>
  );
}

export default About;
