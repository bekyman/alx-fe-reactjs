function Services() {
  const cardStyle = {
    padding: '20px',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
  };

  const listStyle = {
    marginTop: '12px',
    lineHeight: 1.8
  };

  return (
    <div style={cardStyle}>
      <h1>Our Services</h1>
      <ul style={listStyle}>
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
