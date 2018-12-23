import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  axios from 'axios';
import {Button, Card, CardBody, CardTitle, Col, Container, Jumbotron, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";


class MovieList extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            movies : []
        }
    }

    componentDidMount() {
        axios.get('https://api.tvmaze.com/search/shows?q=robin%20hood')
            .then(res => {

                this.setState({movies: res.data});
            })
    }


    render() {
        const liste= this.state.movies;
        return (
            <div>
                <Container>
                <nav className="navbar navbar-dark sticky-top bg-dark">
                    <div className="navbar-brand">NoboProject</div>
                </nav>

                    <Jumbotron>
                        <h1>Liste des films</h1>
                <div className="album text-muted">

                    <Row>

                        { liste.map((films,i) =>
                            <Col sm={"3"} key={i}>
                                <Card>

                                <CardBody>
                                    <Image src="http://chittagongit.com/images/default-profile-icon/default-profile-icon-6.jpg" thumbnail />
                                    <CardTitle> <strong>{films.show.name}</strong></CardTitle>
                                    <Link to={`/${films.show.id}`}>
                                        <Button  outline color="success">
                                            <strong> See details</strong>
                                        </Button>
                                    </Link>
                                </CardBody>
                            </Card>
                            </Col>
                        )}
                    </Row>

                </div>

                    </Jumbotron>
                    <footer  className="font-small pt-4 mt-4 fixed-bottom bg-dark container">
                        <div className="footer-copyright text-center py-3 text-light">

                                &copy; {new Date().getFullYear()} Copyright

                        </div>
                    </footer>
                </Container>

            </div>
        );
    }
}

export default MovieList;
