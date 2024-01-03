import { Container, Nav, Navbar} from 'react-bootstrap';
import HomePage from './pages/HomePage';

function App() {

  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>amapinxer</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">Carrinho</a>
            <a href="/signin" className="nav-link">Entrar</a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
            <HomePage />
        </Container>
      </main>
    <footer><div className="text-center">All rights reserved</div></footer>
    </div>
  );
    
  
}

export default App
