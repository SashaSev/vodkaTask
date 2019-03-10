import React from 'react';
import Background from "../image/Armat_circle_texture-(3).png";
import Strawberry_food from '../image/Group 1590.png';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate'
import Bottle from "../image/whet-min@2x.png";
import '../styles/Strawberry.css';
import '../styles/Global.css';

const Strawberry = (props) => {



  return (
    <div>
      <Bounce bottom opposite cascade when={props.when}>
      <div className={"strawberry"}>STRAWBERRY</div>
      <div className={"strawberry_vodka"}>VODKA</div>
      </Bounce>
      <div className={'circle'}>
        <img  className={"circle_img"} src={`${Background}`} style={{
          // position: 'absolute',left:"1533px", top: '-668px',
          clipPath: 'circle(550px at center)',
          backgroundColor: '#002850',
          maxWidth: 'initial', height: '1700px'
        }}/>
      </div>
      <div><img src={`${Strawberry_food}`} className={"strawberry_food"}/></div>
      <div>
        <Rotate bottom right><img src={`${Bottle}`} className={"bottle"}/>
        </Rotate>
        </div>
      <div className={"timer"}></div>

    </div>

  );
};

export default Strawberry;