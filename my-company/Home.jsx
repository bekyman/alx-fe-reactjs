function Home() {
  const heroStyle = {
    padding: '20px',
    background: 'linear-gradient(135deg, #e0f2fe 0%, #f5f3ff 100%)',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
  };

  return (
    <div style={heroStyle}>
      <h1 style={{ marginBottom: '8px' }}>Welcome to Our Company</h1>
      <p>We are dedicated to delivering excellence in all our services.</p>
    </div>
  );
}

export default Home;
