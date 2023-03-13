import { Link } from "react-router-dom";

export function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-black navbarmenu">
            <div class="container justify-content-center">
        <>
        <Link to="/" class="navbar-brand">VIRA SIMON-NIKULINA</Link>
            <button 
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                class="navbar-toggler"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class=" bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                    </svg>
            </button>
        </>
        <div 
            class="collapse navbar-collapse flex-grow-0" 
            id="navbarNav">
                <ul class="navbar-nav text-center">
                    <li class="nav-item active">
                        <Link to="/food" class="nav-link active">FOOD</Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/portraits" class="nav-link active">LIFE STYLE</Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/cosmetics" class="nav-link active">COSMETICS</Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/about" class="nav-link active">ABOUT</Link>
                    </li>
                </ul>   
        </div>
    </div>
    </nav>
    )
}