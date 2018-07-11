import * as React from 'react'

import { Grid,  /* Segment,Button,Dropdown */ Input, Icon } from 'semantic-ui-react'
interface State {
   
  lower: string , upper: string,
  adults: string , additionaladultcouple: string, 
  single1: string , single2: string , single3: string, 
  single31: string , couple1: string , couple2: string, 
  couple3: string , couple31: string
}
// var m: number;
interface Iprops {
  nuLender: string,
  lower: string , upper: string,
  adults: string , additionaladultcouple: string, 
  single1: string , single2: string , single3: string, 
  single31: string , couple1: string , couple2: string, 
  couple3: string , couple31: string

} 
export class HEM extends React.Component<Iprops, State> { 
  constructor(props: Iprops) {
    super(props)
    this.state = { 
      lower:this.props.lower,
      upper:this.props.upper,
     adults:this.props.adults,
      additionaladultcouple: this.props.additionaladultcouple,
     single1: this.props.single1, 
     single2: this.props.single2, 
     single3: this.props.single3, 
     single31:this.props.single31,
     couple1:this.props.couple1,
     couple2: this.props.couple2, 
     couple3:this.props.couple3,
     couple31: this.props.couple31 


     }} 
     handleChange(e: HTMLInputElement) {
  
      let change = {}
     
      change[e.name] = e.value
     
      this.setState(change)
    
    }
     render() {
const {lower,
  upper,
   adults,
    additionaladultcouple, 
 single1, 
   single2, 
   single3, 
   single31,
   couple1,
   couple2, 
   couple3,
   couple31} = this.state;
   
        return (
          <Grid style={{width: '95%', margin: '0'}} >
         
        <Grid.Row  >
        <Grid.Column width={14} className="scrollwrapper">
        
        
        <div className="scrollrow"><p>Lower</p><Input name="lower"  Placeholder="Lower" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={lower}/></div>
        <div className="scrollrow"><p>Upper</p><Input name="upper" Placeholder="Upper" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={upper}/></div>
        <div className="scrollrow"><p>1 Adult (Single)</p><Input name="adults"  Placeholder="1 Adult (Single)" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={adults}/></div>
        <div className="scrollrow"><p>Additional adult (Couple)</p><Input name="additionaladultcouple"  Placeholder="Additional adult (Couple)" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={additionaladultcouple}/></div>
        <div className="scrollrow"><p>Single +1</p><Input name="single1" Placeholder="Single +1" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={single1}/></div>
        <div className="scrollrow"><p>Single +2</p><Input name="single2"  Placeholder="Single +2" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={single2}/></div>
        <div className="scrollrow"><p>Single +3</p><Input name="single3"  Placeholder="Single +3" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={single3}/></div>
        <div className="scrollrow"><p>Single with 3+</p><Input name="single31"  Placeholder="Single with +3" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={single31}/></div>
        <div className="scrollrow"><p>Couple +1</p><Input name="couple1"  Placeholder="Couple +1" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={couple1}/></div>
        <div className="scrollrow"><p>Couple +2</p><Input name="couple2"  Placeholder="Couple +2" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={couple2}/></div>
        <div className="scrollrow"><p>Couple +3</p><Input name="couple3"  Placeholder="Couple +3" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={couple3}/></div>
        <div className="scrollrow"><p>Couple with 3+</p><Input name="couple31"  Placeholder="Couple with +3" onChange={( e: any ) => this.handleChange(e.currentTarget)}   className="myinputs" type="text" value={couple31}/></div>
</Grid.Column >
        <Grid.Column >
        <Icon   name="trash"/>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        
        )

     }

  }
