import React,{ Component } from 'react'
import Image from './components/Image';
import Data from "./components/Data";


class Child extends React.Component {

  // Once you click on Remove new text button, you will see the following alert.
  componentWillUnmount() {
    alert("The new text will be removed");
  }
  render() {
    return (
      <h2>New Text added</h2>
    );
  }
}



export default class App extends Component {
  constructor(props){

    console.log("Consturctor Called")
    super(props)
    this.state = {
      date:new Date(),
      title:"Title",
      displayNewText:true,
    }

  }

// After 2000ms, the text will change from Title to Changed Title.
  componentDidMount(){
    setTimeout(() => {
      this.setState({ title: 'Changed Title'});
    }, 2000);
  }
  
// for this life-cycle method -- check your console. -> as soon as title changes from Title to Changed Title
// your console will display the below text.

  componentDidUpdate(prevProps, prevState) {
    if (prevState.title !== this.state.title) {
      console.log('Title Changed from Kalvium to Kalvium Edu')
    }
  }


  render() {
    console.log("Render Called")
    let newText;
    if (this.state.displayNewText) {
      newText = <Child />;
    };
    return (
      <div>
    <header>
      <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="">
      </img>

      <h3>{this.state.date.toLocaleTimeString()}</h3>
      <h3>{this.state.title}</h3>
      {newText}
      <button onClick={()=>{this.setState({displayNewText:false})}}>Remove New Text</button>
      <button onClick={()=>{this.setState({displayNewText:true})}}>Add New Text</button>

      <h3>Kalvium Education</h3>
    </header>
    <div>
      <p>It is a long established fact that a reader will be distracted by the readable content of a 
        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
        normal distribution of letters, as opposed to using 'Content here, content here', making it look 
        like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum 
        as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in 
        their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on 
        purpose (injected humour and the like).
      </p>
    </div>
    <Image Data={Data}></Image>
  </div>
    )
  }
}
