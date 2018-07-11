import * as React from 'react'

import { Grid,  /* Segment,Button,Dropdown */ Input, Icon } from 'semantic-ui-react'
interface State {
   
  nuLender: string;
  lower: string;
  upper: string;
  fhog:  string;
  propertyType: string;
  minimumLmi: string;
  investementIndex: string;
  lmirequiredOver: string;
  d60: string;
  d61: string;
  d62: string;
  d63: string;
  d64: string;
  d65: string;
  d66: string;
  d67: string;
  d68: string;
  d69: string;
  d70: string;
  d71: string;
  d72: string;
  d73: string;
  d74: string;
  d75: string;
  d76: string;
  d77: string;
  d78: string;
  d79: string;
  d80: string;
  d81: string;
  d82: string;
  d83: string;
  d84: string;
  d85: string;
  d86: string;
  d87: string;
  d88: string;
  d89: string;
  d90: string;
  d91: string;
  d92: string;
  d93: string;
  d94: string;
  d95: string;
}
// var m: number;
interface Iprops {
  nuLender: string;
  lower: string;
  upper: string;
  fhog:  string;
  propertyType: string;
  minimumLmi: string;
  investementIndex: string;
  lmirequiredOver: string;
  d60: string;
  d61: string;
  d62: string;
  d63: string;
  d64: string;
  d65: string;
  d66: string;
  d67: string;
  d68: string;
  d69: string;
  d70: string;
  d71: string;
  d72: string;
  d73: string;
  d74: string;
  d75: string;
  d76: string;
  d77: string;
  d78: string;
  d79: string;
  d80: string;
  d81: string;
  d82: string;
  d83: string;
  d84: string;
  d85: string;
  d86: string;
  d87: string;
  d88: string;
  d89: string;
  d90: string;
  d91: string;
  d92: string;
  d93: string;
  d94: string;
  d95: string;

} 
export class LMI extends React.Component<Iprops, State> { 
  constructor(props: Iprops) {
    super(props)
    this.state = { 
      lower: this.props.lower,
      upper: this.props.upper,
      fhog: this.props.fhog,
 propertyType: this.props.propertyType,
 minimumLmi: this.props.minimumLmi,
 investementIndex: this.props.investementIndex,
 lmirequiredOver: this.props.lmirequiredOver,
 d60: this.props.d60,
 d61: this.props.d61,
 d62: this.props.d62,
 d63: this.props.d63,
 d64: this.props.d64,
 d65: this.props.d65,
 d66: this.props.d66,
 d67: this.props.d67,
 d68: this.props.d68,
 d69: this.props.d69,
 d70: this.props.d70,
 d71: this.props.d71,
 d72: this.props.d72,
 d73: this.props.d73,
 d74: this.props.d74,
 d75: this.props.d75,
 d76: this.props.d76,
 d77: this.props.d77,
 d78: this.props.d78,
 d79: this.props.d79,
 d80: this.props.d80,
 d81: this.props.d81,
 d82: this.props.d82,
 d83: this.props.d83,
 d84: this.props.d84,
 d85: this.props.d85,
 d86: this.props.d86,
 d87: this.props.d87,
 d88: this.props.d88,
 d89: this.props.d89,
 d90: this.props.d90,
 d91: this.props.d91,
 d92: this.props.d92,
 d93: this.props.d93,
 d94: this.props.d94,
 d95: this.props.d95,
 nuLender: this.props.nuLender,

     }} 
     handleChange(e: HTMLInputElement) {
  
      let change = {}
     
      change[e.name] = e.value
     
      this.setState(change)
    
    }
     render() {
const {
  lower, 
  upper,   
  fhog,  
  propertyType,   
  minimumLmi,   
  investementIndex,   
  lmirequiredOver,   
  d60,   
  d61,   
  d62,   
  d63,   
  d64,   
  d65,   
  d66,   
  d67,   
  d68,   
  d69,   
  d70,   
  d71,   
  d72,   
  d73,   
  d74,   
  d75,   
  d76,   
  d77,   
  d78,   
  d79,   
  d80,   
  d81,   
  d82,   
  d83,   
  d84,   
  d85,   
  d86,   
  d87,   
  d88,   
  d89,   
  d90,   
  d91,   
  d92,   
  d93,   
  d94,   
  d95  } = this.state;
      return (
        <Grid style={{width: '95%', margin: '0'}} >
         
        <Grid.Row  >
        <Grid.Column width={14} className="scrollwrapper">
        <div className="scrollrow" ><p>lower
        </p><Input placeholder="lower" name="lower" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={lower}/></div>
        <div className="scrollrow"><p>upper</p>
        <Input  
          Placeholder="upper" 
          name="upper" 
          className="myinputs" 
          type="text" 
          value={upper} 
          onChange={( e: any ) => this.handleChange(e.currentTarget)}
        />
          </div>
        <div className="scrollrow"><p>fhog</p><Input onChange={( e: any ) => this.handleChange(e.currentTarget)} Placeholder="fhog" name="fhog" className="myinputs" type="text" value={fhog}/></div>
        <div className="scrollrow"><p>propertyType:
        </p><Input  Placeholder="propertyType" name="propertyType" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={propertyType}/></div>
        <div className="scrollrow"><p>
        minimumLmi</p><Input  Placeholder="minimumLmi" name="minimumLmi" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={minimumLmi}/></div>
        <div className="scrollrow"><p>
        investementIndex
        </p><Input  Placeholder="investementIndex" name="investementIndex" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs"  type="text" value={investementIndex}/></div>
        <div className="scrollrow"><p>
        lmirequiredOver</p><Input  
          Placeholder="lmirequiredOver"
          className="myinputs" 
          name="lmirequiredOver"
          type="text" 
          value={lmirequiredOver} 
          onChange={( e: any ) => this.handleChange(e.currentTarget)} 
        />
          </div>
        <div className="scrollrow"><p>d60</p><Input name="d60"  Placeholder="d60" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d60}/></div>
        <div className="scrollrow"><p>d61</p><Input name="d61" Placeholder="d61" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d61}/></div>
        <div className="scrollrow"><p>d62</p><Input name="d62"  Placeholder="d62" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d62}/></div>
        <div className="scrollrow"><p>d63</p><Input name="d63"  Placeholder="d63" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d63}/></div>
        <div className="scrollrow"><p>d64</p><Input name="d64" Placeholder="d64" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d64}/></div>
        <div className="scrollrow"><p>d65</p><Input name="d65"  Placeholder="d65" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d65}/></div>
        <div className="scrollrow"><p>d66</p><Input name="d66"  Placeholder="d66" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d66}/></div>
        <div className="scrollrow"><p>d67</p><Input name="d67"  Placeholder="d67" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d67}/></div>
        <div className="scrollrow"><p>d68</p><Input name="d68"  Placeholder="d68" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d68}/></div>
        <div className="scrollrow"><p>d69</p><Input name="d69"  Placeholder="d69" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d69}/></div>
        <div className="scrollrow"><p>d70</p><Input name="d70"  Placeholder="d70" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d70}/></div>
        <div className="scrollrow"><p>d71</p><Input name="d71"  Placeholder="d71" onChange={( e: any ) => this.handleChange(e.currentTarget)}   className="myinputs" type="text" value={d71}/></div>
        <div className="scrollrow"><p>d72</p><Input name="d72"  Placeholder="d72" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d72}/></div>
        <div className="scrollrow"><p>d73</p><Input name="d73"  Placeholder="d73" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d73}/></div>
        <div className="scrollrow"><p>d74</p><Input name="d74"  Placeholder="d74" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d74}/></div>
        <div className="scrollrow"><p>d75</p><Input name="d75"  Placeholder="d75" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d75}/></div>
        <div className="scrollrow"><p>d76</p><Input name="d76"   Placeholder="d76" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d76}/></div>
        <div className="scrollrow"><p>d77</p><Input name="d77"   Placeholder="d77" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d77}/></div>
        <div className="scrollrow"><p>d78</p><Input name="d78"   Placeholder="d78" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d78}/></div>
        <div className="scrollrow"><p>d79</p><Input name="d79"   Placeholder="d79" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d79}/></div>
        <div className="scrollrow"><p>d80</p><Input name="d80"  Placeholder="d80" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d80}/></div>
        <div className="scrollrow"><p>d81</p><Input name="d81"  Placeholder="d81" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d81}/></div>
        <div className="scrollrow"><p>d82</p><Input name="d82"  Placeholder="d82" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d82}/></div>
        <div className="scrollrow"><p>d83</p><Input name="d83"  Placeholder="d83" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d83}/></div>
        <div className="scrollrow"><p>d84</p><Input name="d84"  Placeholder="d84" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d84}/></div>
        <div className="scrollrow"><p>d85</p><Input name="d85"  Placeholder="d85" onChange={( e: any ) => this.handleChange(e.currentTarget)}  className="myinputs" type="text" value={d85}/></div>
        <div className="scrollrow"><p>d86</p><Input name="d86" Placeholder="d86" onChange={( e: any ) => this.handleChange(e.currentTarget)} className="myinputs" type="text" value={d86}/></div>
        <div className="scrollrow"><p>d87</p><Input name="d87"  Placeholder="d87" onChange={( e: any ) => this.handleChange(e.currentTarget)} className="myinputs" type="text" value={d87}/></div>
        <div className="scrollrow"><p>d88</p><Input name="d88"  Placeholder="d88" onChange={( e: any ) => this.handleChange(e.currentTarget)} className="myinputs" type="text" value={d88}/></div>
        <div className="scrollrow"><p>d89</p><Input name="d89"  Placeholder="d89" onChange={( e: any ) => this.handleChange(e.currentTarget)} className="myinputs" type="text" value={d89}/></div>
        <div className="scrollrow"><p>d90</p><Input name="d90" Placeholder="d90" onChange={( e: any ) => this.handleChange(e.currentTarget)} className="myinputs" type="text" value={d90}/></div>
        <div className="scrollrow"><p>d91</p><Input name="d91"  Placeholder="d91" onChange={( e: any ) => this.handleChange(e.currentTarget)} className="myinputs" type="text" value={d91}/></div>
        <div className="scrollrow"><p>d92</p><Input name="d92" Placeholder="d92" onChange={( e: any ) => this.handleChange(e.currentTarget)} className="myinputs" type="text" value={d92}/></div>
        <div className="scrollrow"><p>d93</p><Input name="d93" Placeholder="d93" onChange={( e: any ) => this.handleChange(e.currentTarget)} className="myinputs" type="text" value={d93}/></div>
        <div className="scrollrow"><p>d94</p><Input name="d94" Placeholder="d94" onChange={( e: any ) => this.handleChange(e.currentTarget)} className="myinputs" type="text" value={d94}/></div>
        <div className="scrollrow"><p>d95</p><Input name="d95" Placeholder="d95" onChange={( e: any ) => this.handleChange(e.currentTarget)} className="myinputs" type="text" value={d95}/></div>
        </Grid.Column >
        <Grid.Column >
        <Icon   name="trash"/>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        
        )

     }

  }
