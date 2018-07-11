import * as React from 'react'
import { FormEvent } from 'react';
import { Grid,  /* Segment,*/Button, Dropdown, Input, Accordion, Icon } from 'semantic-ui-react'
// import Lender from '../../models/Lender';
const SIoptions = [
  { key: 1, text: 'Data1', value: 'Data1' },
  { key: 2, text: 'Data2', value: 'Data2' },
 
]

interface State {
    value: string;
    nuLender: string;
    activeIndex: number;
      
  }
  
interface Iprops {
  handleSubmit: (myLender: string) => void
  } 
class HEMTable extends React.Component<Iprops, State> {

    constructor(props: Iprops) {
      super(props)
      this.state = { value: '', activeIndex: 0, nuLender: '' } // Value is empty by default
      this._updateValue = this._updateValue.bind(this)
      this._handleSubmit = this._handleSubmit.bind(this)
      this.ddHandleClick = this.ddHandleClick.bind(this)
      
    }
  
    ddHandleClick = (e: any, titleProps: any) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }
    componentWillReceiveProps() {
     alert('new props');
      }
      componentDidMount() {
        var that = this;
        fetch('/hello').then((Response) => Response.text()).then((myres: any) => {
      // tslint:disable-next-line:no-console
     
      if (myres.length === 0) {
        // tslint:disable-next-line:no-console
        console.log('nema');
        setTimeout( function() { that.componentDidMount(); } , 1000);
      
      }}); }
    _updateValue(value: string) {
      this.setState({ value });
      alert(value );
    }
  
    _handleSubmit(e: FormEvent<any>) {
    
      e.preventDefault()
      if (!this.state.nuLender) {
        return
      } else {
     // this.props.handleSubmit(this.state.value)
     alert(this.state.nuLender);
     this.setState({ 
        nuLender: 'trest'
    })}
  }
  // ide u map. oko 430
  HEMs (lower: string , upper: string,
        adults: string , additionaladultcouple: string, 
        single1: string , single2: string , single3: string, 
        single31: string , couple1: string , couple2: string, 
        couple3: string , couple31: string) {
return (
  <Grid.Row  columns={13}>
  <Grid.Column >Lover</Grid.Column>
<Grid.Column >Upper</Grid.Column>
<Grid.Column >1 Adult (Single)</Grid.Column>
<Grid.Column >Additional adult (Couple)</Grid.Column>
<Grid.Column >Single +1</Grid.Column>
<Grid.Column >Single +2</Grid.Column>
<Grid.Column >Single +3</Grid.Column>
<Grid.Column >Single with 3+</Grid.Column>
<Grid.Column >Couple +1</Grid.Column>
<Grid.Column >Couple +2</Grid.Column>
<Grid.Column >Couple +3</Grid.Column>
<Grid.Column >Couple with 3+</Grid.Column>
<Grid.Column >
<Input 
  Placeholder="Single +3" 
  className="myinputs"
  type="text"

/>
</Grid.Column>
<Grid.Column >
<Input 
  Placeholder="Single with 3+" 
  className="myinputs"
  type="text"

/>
</Grid.Column>
<Grid.Column >
<Input 
  Placeholder="	Couple +1" 
  className="myinputs"
  type="text"

/>
</Grid.Column>
<Grid.Column >
<Input 
  Placeholder="Couple +2" 
  className="myinputs"
  type="text"

/>
</Grid.Column>
<Grid.Column >
<Input 
  Placeholder="Couple +3" 
  className="myinputs"
  type="text"

/>
</Grid.Column>
<Grid.Column >
<Input 
  Placeholder="Couple with 3+" 
  className="myinputs"
  type="text"

/>
</Grid.Column>"
<Grid.Column >
<Icon name="trash"/>
</Grid.Column>"

  </Grid.Row>

)

  }
   render() {
   // const { value } = this.state;
   const { activeIndex } = this.state;
   const {_handleSubmit } = this
   // const { _updateValue } = this;
   return (
        <div  className="lenders" style={{}}>
        <form onSubmit={_handleSubmit}>
        <Accordion>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.ddHandleClick}>
          <Icon name="dropdown" />
          Income
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
      
        <Grid>
        <Grid.Row stretched={true}  >
<Grid.Column width={10}>
<Button icon={true} labelPosition="left">
<Icon name="times" />
Add Hem Table
</Button>
</Grid.Column>
<Grid.Column width={4}>
<Dropdown 
  style={{ marginTop: '15%', paddingTop: '10px', paddingBottom: '10px' }}

  button={true}
  className="ui center aligned grid icon except"
  floating={true}
  labeled={true}
  icon="times"

  text="Import Hem Table"
  options={SIoptions}
// tslint:disable-next-line:jsx-alignment
/>

</Grid.Column>

</Grid.Row>

</Grid>
</Accordion.Content>

 </Accordion>

 </form>
   </div>
      )
    }
  }
export default HEMTable;