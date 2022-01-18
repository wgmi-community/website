import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from './assets/wgmi.png';
import web3CommunityIll from './assets/02.svg';
import manifestoIll from './assets/23.svg';
import { SocialIcon } from 'react-social-icons';
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
            <Nav.Link as="a" href="//snapshot.org/#/wgmicommunity.eth" target="_blank">Governance</Nav.Link>
            <Nav.Link as="a" href="//forum.wgmi.community" target="_blank" rel="noreferrer">Wiki</Nav.Link>
            <Nav.Link as="a" href="//handbook.wgmi.community" target="_blank" rel="noreferrer">Community</Nav.Link>
            <a class="btn btn-primary" href="https://discord.gg/aazprhs4xY" target="_blank" rel="noreferrer">&nbsp; Join Discord</a>
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
              <h5 className="manifesto-content">“Building a community is helping people, help others.”</h5>

              <h5 className="manifesto-content">Being vital to the success of web3 projects, there is a huge demand online for Community Moderators, Community Managers, Community Directors, Community Leads or more technical positions like Developer Evangelists, Developer Advocates.</h5>

              <h5 className="manifesto-content">This community was built for educating up and coming community professionals and leaders in the web3 space. To meet this talent gap in our current state—our aim is to:</h5>

              <h5 className="manifesto-content">*Open source resources such as standards, strategies and tools that will support this future workforce *Design bootcamps and workshops that help grow the talent pool of the space overall *Be the leading DAO-as-a-Service for Community development in web3</h5>

              <h5 className="manifesto-content"><a href="https://github.com/wgmi-community/mission" target="_blank" rel="noreferrer">Read More</a></h5>
            </div>
          </Col>
        </Row>
      </Container>

      <Container id="footer">
        <Row>
          <Col xs={{ span: 4, offset: 2 }} lg={{ span: 2, offset: 3 }}>
            <SocialIcon network="github" style={{ height: 25, width: 25 }} url="https://github.com/wgmi-community" target="_blank" />
          </Col>
          <Col xs={{ span: 4 }} lg={{ span: 2 }}>
          <SocialIcon network="twitter" style={{ height: 25, width: 25 }} url="https://twitter.com/wgmicommunity" target="_blank" />
          </Col>
          <Col xs={{ span: 4 }} lg={{ span: 2 }}>
          <SocialIcon network="discord" style={{ height: 25, width: 25 }} url="https://discord.gg/aazprhs4xY" target="_blank" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
