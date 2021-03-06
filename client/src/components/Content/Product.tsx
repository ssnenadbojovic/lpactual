import * as React from 'react'
import { FormEvent } from 'react';
import { Grid,  Segment, Dropdown, Icon, Checkbox } from 'semantic-ui-react'
interface State {
    value: string;
  
  }
  
interface Iprops {
 
  } 
class Product extends React.Component<Iprops, State> {
    constructor(props: Iprops) {
      super(props)
      this.state = { value: '',   } // Value is empty by default
      this._updateValue = this._updateValue.bind(this)
      this._handleSubmit = this._handleSubmit.bind(this)
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
      this.setState({ value })
    }
  
    _handleSubmit(e: FormEvent<any>) {
      e.preventDefault()
      if (!this.state.value.trim()) {
        return
      }
  
     // this.props.handleSubmit(this.state.value)
      this.setState({ value: '' })
  
    }
  
   render() {
    /*  const { value } = this.state
      const { mytests } = this.props
      const { _updateValue, _handleSubmit } = this */
      return (
        <div  className="lenders" style={{}}>
        <Grid celled={true}>
        <Grid.Row stretched={true}  >
          <Grid.Column width={10}>
            <Segment compact={true} className="rowstyle"><h2>Standard Variable $150k $350k</h2></Segment>
            <Segment.Group horizontal={true} className="rowstyle" >
            <Segment>RATES:</Segment>
            <Segment ><p className="orange">4.10%</p></Segment>
            <Segment ><p className="orange">4.00%</p></Segment>
            <Segment >FEES</Segment>
            <Segment ><p className="red">U:  400$</p></Segment>
            <Segment ><p className="red">Pa: 200$</p></Segment>
            <Segment ><p className="red">Pm: 150$</p></Segment>
          </Segment.Group>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment compact={true} className="rowstyle"><h2>150000$ 350000$</h2></Segment>
            <Segment.Group horizontal={true} className="rowstyle">
    <Segment>   <Checkbox label={'E'} className="checkboxm"/>
    <Checkbox label={'A'} className="checkboxm"/>
    <Checkbox label={'S'} className="checkboxm"/></Segment>

  </Segment.Group>
          </Grid.Column>
         <Grid.Column 
          width={2} 
         
         >
          <Segment  >

      <Dropdown 
         style={{ marginTop: '15%', paddingTop: '10px', paddingBottom: '10px' }}
        
         button={true}
         className="ui center aligned grid icon except"
         floating={true}
         labeled={true}
         icon="world"
        
         text="Menu"
         
         // tslint:disable-next-line:jsx-alignment
      >
    
        <Dropdown.Menu>
        <Dropdown.Item><Icon  className="edit icon"/>Edit</Dropdown.Item>
    
          <Dropdown.Item><Icon  className="delete icon" style={{color: 'red'}}/>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
          </Segment>
         </Grid.Column>
        </Grid.Row>
       
      </Grid>
   </div>
      )
    }
  }
export default Product;