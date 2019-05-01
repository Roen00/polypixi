import React from 'react';
import './App.css';
import {MapStage} from "./components/MapStage";
import './grid.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Collapse, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import 'pixi-heaven';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 100,
            height: 200,
            open: false
        }
    }

    showMenu = () => this.setState({open: !this.state.open});

    updateDimensions = () => {
        const mapHandler = document.getElementById("map_handler");
        const mapHandlerHeight = mapHandler.offsetHeight;
        const mapHandlerWidth = mapHandler.offsetWidth;
        this.setState(
            {
                width: mapHandlerWidth - 3, // just to make sure that width will be always within window width.
                height: mapHandlerHeight
            }
        );
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render(){
        return <div className='container-fluid container_css'>
            <div className="row">
                <div className="col">
                    <Navbar bg="dark" className="navbar-dark bg-dark" expand="lg">
                        <Navbar.Brand href="#home">Soldat Polypixi map editor</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <NavDropdown title="File" id="file-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Edit" id="edit-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="View" id="view-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Help" id="help-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
            <div className="row container_content">
                <div className="col-sm-2 container_menu">
                    <div className='row container_menu_split bg-dark sidebar'>
                        <div className="sidebar-sticky ">
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/home">1</Nav.Link>
                                <Nav.Link eventKey="link-1">2</Nav.Link>
                                <Nav.Link eventKey="link-2">3</Nav.Link>
                                <Nav.Link eventKey="link-3">4</Nav.Link>
                            </Nav>
                        </div>
                    </div>
                    <div className='row container_menu_split bg-dark sidebar'>
                        <Button className="menu_button" onClick={this.showMenu} aria-controls="propsMenu" aria-expanded={this.state.open}>
                            Show menu
                        </Button>
                        <Collapse in={this.state.open}>
                            <div className="sidebar-sticky ">
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link href="/home">1</Nav.Link>
                                    <Nav.Link eventKey="link-1">2</Nav.Link>
                                    <Nav.Link eventKey="link-2">3</Nav.Link>
                                    <Nav.Link eventKey="link-3">4</Nav.Link>
                                </Nav>
                            </div>
                        </Collapse>

                    </div>
                </div>
                <div className="col-sm bg-secondary container_map" id='map_handler'>
                    <MapStage w={this.state.width} h={this.state.height}/>
                </div>
            </div>
            <div className="row container_footer bg-dark">
                <div className="col">
                    Rafal Zelek
                </div>
            </div>
    </div>
    }

}

export default App
