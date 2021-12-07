import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from './assets/logo.jpg';
import web3CommunityIll from './assets/02.svg';
import manifestoIll from './assets/23.svg';
import github from './assets/github.svg';
import twitter from './assets/twitter.svg';
import discord from './assets/discord.svg';
import './App.css';

function App() {
  return (
    <div className="App container">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>
          <img src={logo} width="128" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="navbar-links">
            <Nav.Link href="#manifesto">Manifesto</Nav.Link>
            <Nav.Link as="a" href="https://handbook.wgmi.community" target="_blank">Handbook</Nav.Link>
            <Nav.Link as="a" href="https://discord.gg/z7uvKJjSC9" target="_blank">Discord</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="main">
        <Row>
          <Col xs={12} lg={6} className="pitch">
            <div>
              <h1 className="pitch-header">Go from ngmi -&gt; wgmi</h1>
              <h4 className="pitch-content">We help educate newcomers on Community management skills in the web3 space</h4>
            </div>
          </Col>
          <Col xs={12} lg={6}><Image src={web3CommunityIll} class alt="web3 community" fluid /></Col>
        </Row>
      </Container>

      <Container id="manifesto">
        <Row>
          <Col xs={12} lg={6}><Image src={manifestoIll} class alt="web3 community" fluid /></Col>
          <Col xs={12} lg={6} className="pitch">
            <div>
              <h2 className="manifesto-header">Manifesto</h2>
              <h5 className="manifesto-content">Community Development is a growing field in web3. There is a huge demand for online community moderators, community Managers, community directors, community leads or more technical developer evangelists, developer advocates.</h5>
              <h5 className="manifesto-content">Being a vital aspect to the success of web3 projects, community roles are a growing trend that we’re looking to help you with. This community was built for educating up and coming Community leaders. We’ll be sharing resources, pro-tips, templates and industry best practices.</h5>
            </div>
          </Col>
        </Row>
      </Container>

      <Container id="footer">
        <Row>
          <Col xs={{ span: 4, offset: 2 }} lg={{ span: 2, offset: 4 }} className="social-link-github">
            <a href="https://github.com/wgmi-community" target="_blank" rel="noreferrer">
              <Image src={github} width="64" class alt="wgmi github" fluid />
            </a>
          </Col>
          <Col xs={{ span: 4 }} lg={{ span: 2 }} className="social-link-twitter">
            <a href="https://twitter.com/wgmicommunity" target="_blank" rel="noreferrer">
              <Image src={twitter} width="64" alt="wgmi twitter" fluid />
            </a>
          </Col>
          <Col xs={{ span: 4 }} lg={{ span: 2 }} className="social-link-discord">
            <a href="https://discord.com/invite/z7uvKJjSC9" target="_blank" rel="noreferrer">
              <Image src={discord} width="64" alt="wgmi twitter" fluid />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
