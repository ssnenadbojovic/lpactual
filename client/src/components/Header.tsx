import * as React from 'react'
import { FormEvent } from 'react';
import { Dropdown,  Menu } from 'semantic-ui-react'
/* interface Props {
  handleSubmit: (value: string) => void
} */
interface State {
  value: string;

}
interface Iprops {
  handleSubmit: (value: string) => void

}
export default class Header extends React.Component<Iprops, State> {
  constructor(props: Iprops) {
    super(props)
    this.state = { value: '',   } // Value is empty by default
    this._updateValue = this._updateValue.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }
  componentWillReceiveProps() {
  
    }
   /* componentDidMount() {
      var that = this;
      fetch('/hello').then((Response) => Response.text()).then((myres: any) => {
    // tslint:disable-next-line:no-console
   
    if (myres.length === 0) {
      // tslint:disable-next-line:no-console
      console.log('nema');
      setTimeout( function() { that.componentDidMount(); } , 1000);
    
    }}); }*/
  _updateValue(value: string) {
    this.setState({ value })
  }

  _handleSubmit(e: FormEvent<any>) {
    e.preventDefault()
    if (!this.state.value.trim()) {
      return
    }

    this.props.handleSubmit(this.state.value)
    this.setState({ value: '' })

  }

                                                              render() {
  /*  const { value } = this.state
    const { mytests } = this.props
    const { _updateValue, _handleSubmit } = this */
    return (
      <div className="headerx">
      <Menu attached="top" style={{paddingRight: '5%', paddingLeft: '5%', margin: '0', height: '60px' }}>
     
     <Menu.Menu position="right">
        <div className="ui right aligned category search item">
          <div className="ui transparent icon input">
            <input className="prompt" type="text" placeholder="Search " />
            <i className="search link icon" />
          </div>
          <div className="results" />
        </div>
      </Menu.Menu>
      
      <Dropdown  item={true} text="Arrange By" style={{marginRight: '5.5%'}} >
        <Dropdown.Menu >
 <Dropdown.Item>By Date</Dropdown.Item>
          <Dropdown.Item>By Name</Dropdown.Item>
          <Dropdown.Item>By Interest Rate</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown  item={true} text="MyAccount" style={{marginRight: '5.5%'}} >
        <Dropdown.Menu >
 <Dropdown.Item>By Date</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
          <Dropdown.Item>Create Account</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
   
      </div>
    )
  }
}