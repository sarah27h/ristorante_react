import React, {Component} from 'react';
import Dishdetail from './Dishdetail';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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

                <Dishdetail selectedDish={this.state.selectedDish}/>

            </div>
        );
    }
}

export default Menu;