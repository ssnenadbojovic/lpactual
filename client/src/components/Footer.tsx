import * as React from 'react'
import { Button, Menu, Modal, Header, Icon } from 'semantic-ui-react'
import newactions from '../models/NewActions'
import activecomponent from '../models/ActiveComponent'
 import { LendersLMI } from '../models/LendersLMI'
import lenderId from '../models/lenderId'
import { LendersHem } from '../models/LendersHEM';
// import Refresh from '../models/Refresh';
interface State {
  getText: string;
  value: string;
  lpaction: newactions

}
interface Iprops {
  useAction: (value: string, value2: string ) => void
  refreshScreen: (valuer: boolean, valuer2: string) => void
  activecomponents: activecomponent[];
  idLenders: lenderId
  

}
let getcomponent: string = '';
let getaction: string = '';

export default class Footer extends React.Component<Iprops, State> {

  constructor(props: Iprops) {
    super(props)
    this.state = { value: '', lpaction:  new newactions, getText: 'No Action'  } // Value is empty by default
    this._updateValue = this._updateValue.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }
  componentDidUpdate() {
    
   if (getaction !== this.props.activecomponents[this.props.activecomponents.length - 1 ].actiontype) {
     getcomponent = this.props.activecomponents[this.props.activecomponents.length - 1 ].component;
   
     getaction = this.props.activecomponents[this.props.activecomponents.length - 1 ].actiontype;
     this.setState({getText : getaction});
      
    }
    }
   

/* add hem actual */
addHemactual() {
  var  Lmis= [];
   var elemscd = document.getElementsByClassName('scrollwrapper');
   var that= this;
  
    var elemsncd = elemscd.length;
    alert(elemsncd);
   for (var i = 0; i < elemsncd; i++) {
    
   var elem = elemscd[i];
   var lmiInputs: string[] = [];
 var elemChildren = elem.children.length;
 for (var j = 0; j < elemChildren; j++) {
 // var html1 = elem.children[j].children[0] as HTMLInputElement;
 var html2 = elem.children[j].children[1].children[0] as HTMLInputElement;
try { lmiInputs.push(html2.value);


   }
   catch {}
 }
   
   var modelLmi= new LendersHem (
     lmiInputs[0],
     lmiInputs[1],
     lmiInputs[2],
     lmiInputs[3],
     lmiInputs[4],
     lmiInputs[5],
     lmiInputs[6],
     lmiInputs[7],
     lmiInputs[8],
     lmiInputs[9],
     lmiInputs[10],
     lmiInputs[11],
   
    );
     Lmis.push(modelLmi) ;}
var lId = this.props.idLenders.lenderId;
   const nbody = JSON.stringify({
 lenderId: lId,
    Hems: Lmis
 
   });
   alert(nbody);
   fetch('addHem', {  
     method: 'POST',  
     headers: {  
       'Content-Type': 'application/json'
     },   
      body: nbody
 })
 .then(function (data: any) {  

   that.props.refreshScreen(true, 'Lmi');
 })  
 .catch(function (error: any) {  
   alert('Request failure: ' + error);  
 }); 
  }
/* add hem actual */

    addLmiactual() {
     var  Lmis= [];
      var elemscd = document.getElementsByClassName('scrollwrapper');
      var that= this;
     
       var elemsncd = elemscd.length;
       alert(elemsncd);
      for (var i = 0; i < elemsncd; i++) {
       
      var elem = elemscd[i];
      var lmiInputs: string[] = [];
    var elemChildren = elem.children.length;
    for (var j = 0; j < elemChildren; j++) {
    // var html1 = elem.children[j].children[0] as HTMLInputElement;
    var html2 = elem.children[j].children[1].children[0] as HTMLInputElement;
 try { lmiInputs.push(html2.value);


      }
      catch {}
    }
      
      var modelLmi= new LendersLMI (lmiInputs[0],
        lmiInputs[1],
        lmiInputs[2],
        lmiInputs[3],
        lmiInputs[4],
        lmiInputs[5],
        lmiInputs[6],
        lmiInputs[7],
        lmiInputs[8],
        lmiInputs[9],
        lmiInputs[10],
        lmiInputs[11],
        lmiInputs[12],
        lmiInputs[13],
        lmiInputs[14],
        lmiInputs[15],
        lmiInputs[16],
        lmiInputs[17],
        lmiInputs[18],
        lmiInputs[19],
        lmiInputs[20],
        lmiInputs[21],
        lmiInputs[22],
        lmiInputs[23],
        lmiInputs[24],
        lmiInputs[25],
        lmiInputs[26],
        lmiInputs[27],
        lmiInputs[28],
        lmiInputs[29],
        lmiInputs[30],
        lmiInputs[31],
        lmiInputs[32],
        lmiInputs[33],
        lmiInputs[34],
        lmiInputs[35],
        lmiInputs[36],
        lmiInputs[37],
        lmiInputs[38],
        lmiInputs[39],
        lmiInputs[40],
        lmiInputs[41],
        lmiInputs[42]);
        Lmis.push(modelLmi) ;}
var lId = this.props.idLenders.lenderId;
      const nbody = JSON.stringify({
    lenderId: lId,
       Lmis: Lmis
    
      });
      alert(nbody);
      fetch('addLmi', {  
        method: 'POST',  
        headers: {  
          'Content-Type': 'application/json'
        },   
         body: nbody
    })
    .then(function (data: any) {  

      that.props.refreshScreen(true, 'Lmi');
    })  
    .catch(function (error: any) {  
      alert('Request failure: ' + error);  
    }); 
     }
    
   
  _updateValue(value: string) {
    this.setState({ value })
  }

  _handleSubmit() {

    if (getcomponent.length !== 0 ) {
if (getaction=="Lmi") {getaction="Lmi Save changes" }
   this.props.useAction(getcomponent, getaction )
  // var elemscd = document.getElementsByClassName('scrollwrapper');
  // var elemsncd = elemscd.length;
  if (getaction=="Lmi"){
   this.addLmiactual(); }
   if (getaction=="Hem"){
    this.addHemactual(); }
    }
  } 
 
  render() {
    const { getText } = this.state

    return (
      <div>
      <Menu className="footer" fluid={true} widths={3}>
      <Menu.Item className="ui center aligned">
 
      <Modal trigger={<Button>{getText}</Button>} closeIcon={true}>
      <Header icon="archive" content="Confirm This data Entry" />
      <Modal.Content>
        <p> Are you sure  </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red">
          <Icon name="remove" /> No
        </Button>
        <Button color="green" onClick={this._handleSubmit} >
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
    </Menu.Item>

    <Menu.Item className="ui center aligned">
      <Button >Tax</Button>
    </Menu.Item>
    </Menu>
 </div>
    )
  }
}