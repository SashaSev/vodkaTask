import React from 'react';
import Background from '../image/Armat_circle_texture-(3).png';
import Hask from '../image/Image 28.png';
import Bottle from '../image/whet-min@2x.png';
import '../styles/wheat.css';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate'


const Wheat = (props) => {
  return (
    <div >
      <Bounce bottom opposite cascade when={props.when}>
      <div className={"wheat"} >WHEAT</div>
      <div className={"wheat_vodka"} >VODKA</div>
      </Bounce>
      <div className={'circle'} >
        <img className={"circle_img"} src={`${Background}`} style={{
          // position: 'absolute',left:"1533px", top: '-668px',
         clipPath: 'circle(550px at center)',

          maxWidth: 'initial',height: '1700px'}} />
      </div>
      <div><img src={`${Hask}`} className={"hask"} /></div>

      <div> <Rotate bottom left opposite when={props.when}><img src={`${Bottle}`} className={"bottle"} />
      </Rotate></div>
      <div className={"timer"} ></div>
      <div></div>
    </div>
  );
};


export default Wheat;