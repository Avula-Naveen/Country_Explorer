import ToggleMode from "../Toggle/ToggleMode"



const NavBar=()=>{
    return(
        <>
        
        <nav className="navbar navbar-light bg-dark fixed ">
  <div className="container-fluid">
    
    <Link to={"/"}>
    <h2><a className="navbar-brand">Coutry Expolrer</a> </h2>
    </Link>
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>
        </>
    )
} 


export default NavBar