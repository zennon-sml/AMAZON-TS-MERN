import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Link to={"/"}>
              <Navbar.Brand>amapinxer</Navbar.Brand>
            </Link>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Carrinho
            </a>
            <a href="/signin" className="nav-link">
              Entrar
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
          {/* is where the routes we define will apear */}
        </Container>
      </main>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
