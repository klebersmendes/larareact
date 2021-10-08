import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import image1 from '../../images/instruct1.png';
import image2 from '../../images/instruct2.png';
import image3 from '../../images/instruct3.png';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#333',
  },
  slide1: {
    backgroundColor: '#fff',
  },
  slide2: {
    backgroundColor: '#fff',
  },
  slide3: {
    backgroundColor: '#fff',
  },
};

function slideRenderer(params) {
  const { index, key } = params;

  let style;
  let image;

  switch (mod(index, 3)) {
    case 0:
      style = styles.slide1;
      image = image1;
      break;
    case 1:
      style = styles.slide2;
      image = image2;
      break;
    case 2:
      style = styles.slide3;
      image = image3;
      break;
    default:
      break;
  }

  return (
    <div style={Object.assign({}, styles.slide, style)} key={key}>
        <img className="instruct" src={image} alt="1" />
    </div>
  );
}

class First extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
        }
    }

    addActiveClass = (e) => {
        const clicked = e.target.dataset.id
        this.setState({
            index: parseInt(clicked)
        });
    }

    handleClickPrev = () => {
        this.setState({
            index: this.state.index - 1,
        });
    };

    handleClickNext = () => {
        if(this.state.index == 2){
            this.props.history.push('/home');
        }
        this.setState({
            index: this.state.index + 1,
        });
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
        // if(index == 2){
        //     this.props.history.push('/home');
        // }
    };

    render(){
        return (
            <div>
                <div className="slider">
                    <VirtualizeSwipeableViews
                        index={this.state.index}
                        onChangeIndex={this.handleChangeIndex}
                        slideRenderer={slideRenderer}
                        slideCount={3}>
                    </VirtualizeSwipeableViews>
                </div>
                <div className="col-md-8 first-navigation mt-5">
                    <div className={`btn btn-primary btn-sm mb-3 navigation ${this.state.index == 0 ? 'disabled': ''}`}
                    onClick={this.handleClickPrev}>Prev</div>
                    <div className="d-flex">
                    <ul className="dots">
                        <li className={`dots__item ${this.state.index == 0 ? 'active': ''}`}
                            onClick={this.addActiveClass} data-id="0"></li>
                        <li className={`dots__item ${this.state.index == 1 ? 'active': ''}`}
                            onClick={this.addActiveClass} data-id="1"></li>
                        <li className={`dots__item ${this.state.index == 2 ? 'active': ''}`}
                            onClick={this.addActiveClass} data-id="2"></li>
                    </ul>
                    </div>
                    <div className='btn btn-primary btn-sm mb-3 navigation' onClick={this.handleClickNext}>
                        {`${this.state.index >= 2 ? 'Ok': 'Next'}`}
                    </div>
                </div>
            </div>
        );
    }
}

export default First;

if (document.getElementById('first')) {
    ReactDOM.render(<First />, document.getElementById('first'));
}
