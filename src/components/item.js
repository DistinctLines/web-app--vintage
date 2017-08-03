import React, { Component } from 'react';
import $ from 'jquery';
import ImageGallery from 'react-image-gallery';
import { getImage } from '../services/data';

require('../../node_modules/react-image-gallery/styles/scss/image-gallery.scss')
require('../css/item.scss');

class Item extends Component{

  constructor(props){
    super(props);

    this.state = {
      _imgID: null
    }

    this.handleImage.bind(this);
  }

  componentWillMount(){
    const { itemId } = this.props.params; 
    this.setState({ _imgID: itemId})
  }

  handleImage(token){
    let image = getImage(token);
    Promise.resolve(image)
      .then(data => {
        this.setState({ _imgID: data[0]._id});
        console.log(data[0])
      }).catch(err => {
        console.log(err);
      });
  }

  render(){

     const images = [
      {
        original: this.state._imgID + '.jpg',
        thumbnail: this.state._imgID + '.jpg',
      },
      {
        original: this.state._imgID + '.jpg',
        thumbnail: this.state._imgID + '.jpg',
      },
      {
        original: this.state._imgID + '.jpg',
        thumbnail: this.state._imgID + '.jpg',
      },
      {
        original: this.state._imgID + '.jpg',
        thumbnail: this.state._imgID + '.jpg',
      }
    ]

    console.log(this.props);

    const { token, items } = this.props;
    const param = this.props.params.itemId;

    // items.filter(item => {
    //   if(item._id === param){
    //     return this.setState({item: item});
    //   }
    // });

    if(items.length === 0)
      return (<div></div>);

    const item = items.find(item => {
      if(item._id === param)
        return item;
    })

    console.log(item);

    return (

      <div className="container product">
        <div className="row">
          <div className="image-column">
            <div className="main-nav">
              {/*<img src="/img/shoes.jpg"/>*/}
              <ImageGallery 
                items={images}
                thumbnailPosition={'left'}
                showPlayButton={false}
                showFullscreenButton={false}
              />
              {/*<ul className="bxslider">
                <li><img src="/img/shoes.jpg" /></li>
                <li><img src="/img/shoes.jpg" /></li>
                <li><img src="/img/shoes.jpg" /></li>
                <li><img src="/img/shoes.jpg" /></li>
              </ul>*/}
            </div>
          </div>
          <div className="image-info">
            <div className="image-inner">
              <h1>{item.name}</h1>
              <div className="image-description">
                <p>Gold Leather Converse Trainers. SIZING: Size 
                  5UK. Super cool unique converse in gold leather.
                   These are second hand so a little warn and 
                   lots of life left in them.</p>
              </div>
              <ul>
                <li><strong>Size:</strong>{item.size}</li>
                <li><strong>Material:</strong> {item.material}</li>
                <li><strong>Colour:</strong> {item.color}</li>
                <li><strong>Condition:</strong> {item.condition}</li>
                <li><strong>Vintage Era:</strong> {item.era}</li>
              </ul>
              <h1>£29.00</h1>
              <div className="button-container">
                <button className="add-basket">
                  <i className="fa fa-shopping-basket"></i>
                  <span>Add To Basket</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

//<button className="add-basket" onClick={() => { this.handleImage(token) }}>

export default Item;
