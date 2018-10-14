import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'


class Dishdetail extends Component {

    constructor(props) {
        super(props);

    }

    /* render selected dish with its details */
    renderSelectedDish(dish) {
        if(dish != null) {
            {/* return dish details of clicked one*/}
            return(
                <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            )
        } else {
            {/* return empty div when user didn't click any dish initial case*/}
            return(
                <div></div>
            )
        }
    }

    render() {
        
        {/* this div to display selectedDish details if user click on a dish */}
        return (
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                {this.renderSelectedDish(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Dishdetail;