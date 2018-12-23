import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  axios from 'axios';
import {Jumbotron, Row, Col, Container, Button} from "reactstrap";
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";








class MovieData extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            donnee : {}
        }
    }

    componentDidMount() {
        const ide= this.props.match.params.iden;
        axios.get('http://api.tvmaze.com/shows/'+ide).then(res => {
            this.setState({donnee: res.data});
            })
    }


    render() {
        const mov= this.state.donnee;

        console.log(mov);

        return (
            <div>
                <Container>

                    <nav className="navbar navbar-dark bg-dark sticky-top">
                        <div className="navbar-brand">NoboProject</div>
                    </nav>
                    <header>

                    </header>
                    <Jumbotron>
                        <h2>{mov["name"]}</h2><br/>
                        <Row>
                            <Col xs="4">
                                <Image src="http://chittagongit.com/images/default-profile-icon/default-profile-icon-6.jpg" thumbnail />
                                <Link to={'/'}><Button outline color="info" > Back to the list </Button></Link>
                            </Col>
                            <Col xs="4">
                                <Row> <h5> Type :  <span>{mov.type}</span></h5></Row><br/>
                                <Row><h5> Language : <span> {mov.language}</span></h5></Row><br/>
                                <Row><h5> First Broadcast: <span>{mov.premiered}</span></h5> </Row><br/>
                                <Row><h5> Description  </h5>:<i> {mov.summary}</i> </Row>
                            </Col>
                        </Row>
                    </Jumbotron>
                    <div  className="font-small pt-4 mt-4 fixed-bottom bg-dark container">
                        <div className="footer-copyright text-center py-3 text-light">
                            &copy; {new Date().getFullYear()} Copyright
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default MovieData;
