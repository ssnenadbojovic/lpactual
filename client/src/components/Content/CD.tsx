import * as React from 'react'

import { /* Segment,Button,Dropdown */ Grid, Icon, Input } from 'semantic-ui-react'
interface State {
   
  nuLender: string;
  purpuse: string,
  information:string;
  contacttype: string;
}
// var m: number;
interface Iprops {
  nuLender: string,
  purpuse: string,
  information:string,
  contacttype:string,
  removeCD: (a: HTMLInputElement)=> void
} 
export default class lContactDetails extends React.Component<Iprops, State> { 
  constructor(props: Iprops) {
    super(props)
    this.state = { 
      purpuse:this.props.purpuse,
      information:this.props.information,
      contacttype: this.props.contacttype,
     
  
 
 nuLender: this.props.nuLender,

     }
    
    } 
     handleChange(e: HTMLInputElement) {
  
      let change = {}
     
      change[e.name] = e.value
     
      this.setState(change)
    
    }
     render() {
const { purpuse, information, contacttype } = this.state;
const {removeCD } = this.props;
  if (contacttype === 'phone' || contacttype === 'fax' || contacttype === 'mail' || contacttype === 'globe' ) {

      return (

  
  <Grid.Row  stretched={true} className="contactdetails" >

  <Grid.Column width={1}><Input type="text" value={contacttype} style={{display: 'none'}}  />
  <Icon name={contacttype} style={{float: 'left'}} /><input name='contacttype' value={contacttype} style={{display:  'none'}} /> </Grid.Column>

  <Grid.Column width={6}>
  
<Input type="text"   name="purpuse" value= {purpuse} onChange={( e: any ) => this.handleChange(e.currentTarget)}    />
  
  </Grid.Column>
  <Grid.Column width={7}> 
  <Input type="text"  name="information" value= {information}  onChange={( e: any ) => this.handleChange(e.currentTarget)}  />
  </Grid.Column>
  <Grid.Column width={2}>
  <Icon 
    color="red"  
    style={{cursor: 'pointer'}} 
    onClick={( e: any ) => removeCD(e.currentTarget)} 
    name="trash"
  />
  </Grid.Column>
  </Grid.Row>
        
        )

     }
     else {return ""}
    }
  }
