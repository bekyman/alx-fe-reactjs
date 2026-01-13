function Header() {
  return (
    <header
      style={{
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
        backgroundColor: 'navy',
        textAlign: 'center'
      }}
    >
      <h1
        style={{
          color: 'white',
          fontWeight: 'bold',
          margin: 0
        }}
      >
        My Favorite Cities
      </h1>
    </header>
  );
}

export default Header;
