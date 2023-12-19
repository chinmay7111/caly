import "bootstrap/dist/css/bootstrap.min.css"

const Navbar = () => {
  


  return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <p className="navbar-brand" href="#">Calculator</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <p className="nav-link active" aria-current="page" href="#">Home</p>
        </li>
        <li className="nav-item">
          <p className="nav-link" href="#">Contact</p>
        </li>
        <li className="nav-item">
          <p className="nav-link " >About</p>
        </li>
      </ul>
    </div>
  </div>
</nav>

</>
  )
}

export default Navbar