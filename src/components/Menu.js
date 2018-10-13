import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class Menu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selectedDish : null
        };
    }

    /* update selectedDish state to the clicked dish  */
    onDishSelected(dish) {
        this.setState( {selectedDish : dish} );
    }

    /* render selected dish with its details */
    renderSelectedDish(dish) {
        if(dish != null) {
            {/* return dish details of clicked one*/}
            return(
                <Card onClick={() => this.onDishSelected(dish)}>
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

        /* create dishes list */
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelected(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">

                {/* this div to display all dishes  */}
                <div className="row">
                    {menu}
                </div>

                {/* this div to display selectedDish details if user click on a dish */}
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderSelectedDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;