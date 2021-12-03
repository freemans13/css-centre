function Option1() {
  return (
    <div 
      style={{
        width:"100px",
        height:"100px",
        backgroundColor:"red",
        top:"50%",
        left:"50%",
        position:"fixed"
      }}>
      Nearly but not quite, a little squiff
    </div>
  );
}

function Option2() {
  return (
    <div 
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"red",
        height:"100vh"
      }}>
      Use height:100vh (view height)
    </div>
  );
}

function Option3() {
  return (
    <div 
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
      }}>
      <div style={{
        backgroundColor:"red"
      }}>
        Ta da
      </div>
    </div>
  );
}


export { Option1, Option2, Option3 };
