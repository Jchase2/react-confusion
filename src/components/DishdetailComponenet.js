import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return <div></div>
        }
    }

    // The long toDateString stuff is to more closely match the date based on the examples prof. provided...
    renderComments(comments) {
        const retMe = comments.map((commentObj) =>
            <li key={commentObj.id}>
                <p>{commentObj.comment}</p>
                <p>-- {commentObj.author}, {new Date(commentObj.date).toDateString().split(' ').slice(1).join(' ')}</p>    
            </li>
        );
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {retMe}
                </ul>
            </div>
        );
    }

    render() {

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.props.dish ? this.renderComments(this.props.dish.comments) : <div></div>}
                </div>
            </div>
        );
    }
}

export default DishDetail;