import React, {Component} from 'react';
import Rotate from 'react-reveal/Rotate';
import Bottle from "./image/whet-min@2x.png";



import './App.css';
// import Wheat from "./components/Wheat";
import Timer from "./components/Timer";
import Strawberry from "./components/Strawberry";
import Wheat from "./components/Wheat";
import Background from "./image/Armat_circle_texture-(3).png";

class App extends Component {

  constructor(props) {
    super(props);
    this.imageRef = React.createRef()
    this.state = {
      show: false,
      vodka: "wheat",

    };
    this.myFunction = this.myFunction.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.myFunction);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.myFunction);
  }

  myFunction() {

    if (window.scroll === 0) {
      this.setState({show: false});
    } else if (window.scroll !== 0) {
      this.setState({show: true});
    }
  }

  render() {


    if (this.state.show) {



      switch (this.state.vodka) {
        case 'wheat':
          return (
            <div><Wheat when={!this.state.show}/>
              <Strawberry when={this.state.show}/>
              <div className={'circle'}>

              </div>
            </div>
          );

      }
      return (
        <div>
          {/*<Wheat when={!this.state.show} />*/}


          <Rotate bottom right>


          </Rotate></div>)
    }

    // console.log(this.state.show);
    return (
      <div className="App">


        <Wheat/>

        {this.myFunction}


        <Timer/>
      </div>
    );
  }
}


export default App;
