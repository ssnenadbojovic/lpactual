import * as React from 'react'
import { getJSONfunction } from '../../functions/content'
import newaction from '../../models/NewActions'
import lenderId from '../../models/lenderId'
import { LendersLMI } from '../../models/LendersLMI'
import { Grid,  /* Segment,Button,Dropdown */ Input, Icon } from 'semantic-ui-react'
// import ProductDetails from '../../containers/ProductDetails';
// import Lender from '../../models/Lender';
var m: number | string;
interface State {
   
    nuLender: string;
    activeIndex: number;
    lmis: LendersLMI[];
   myNews: string[];
    isNew: string;
  }
// var m: number;
interface Iprops {
  newactions: newaction;
  lenderIds: lenderId;
  
  } 
var news: string[] = [];
class LMITable extends React.Component<Iprops, State> {

    constructor(props: Iprops) {
      super(props)
      this.state = { 
        myNews: [],
        isNew : 'false',
        lmis: [], 
        nuLender: '',
        activeIndex: 0

       } // Value is empty by default

    }
    handleChange(e: HTMLInputElement) {
  
      let change = {}
     
      change[e.name] = e.value
     
      this.setState(change)
    
    }
   componentDidMount() {
     var getId = this.props.lenderIds.lenderId;
    this.getLmis(getId);
   }
   componentWillReceiveProps(nextProps: Iprops) {
    if (this.props.newactions.component !== nextProps.newactions.component) {
      alert(nextProps.newactions.component);
    }
  }
      componentDidUpdate() {
        var that = this;
         
        if (that.props.newactions.component === 'Create Lmi') {
          if (m !== that.props.newactions.id) {
            if (that.props.newactions.actiontype === 'new') { 

this.setState({ isNew: 'false' });
m = that.props.newactions.id; 
var newsa = 'z';
news.push(newsa);
this.setState({myNews: news});
alert(news[0]);
}
}
}
if (that.props.newactions.component === 'Lmi Save Changes') {
  if (m !== that.props.newactions.id) {
    if (that.props.newactions.actiontype === 'new') { 
alert('Ok')
m = that.props.newactions.id; 
}
}
}
          
}

getLmis(theId: string) {
    
        var that = this;
        that.setState(
          { 
       lmis: []
          });
       
        getJSONfunction('/getLmis?id=' + theId, function(err: any, data: LendersLMI[]) {
        
          if (err !== null) {
            alert('Something went wrong: ' + err);
          } else {
            if (data !== null) {
         that.setState( {  lmis : data  });
          
        };
    
      } 
       
        });
       
       return  'test' ;
          }
RemoveLmi (r: HTMLObjectElement) {
 
            r.parentElement.parentElement.remove();
} 
newLMI () {
  return (
  <Grid style={{width: '95%', margin: '0'}} >
   
  <Grid.Row  >
  <Grid.Column width={14} className="scrollwrapper">
  <div className="scrollrow"><p>lower
  </p><Input  Placeholder="lower" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>upper</p>
  <Input  
    Placeholder="upper" 
    className="myinputs" 
    type="text" 
    value=""
  />
    </div>
  <div className="scrollrow"><p>fhog</p><Input  Placeholder="fhog" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>propertyType:
  </p><Input  Placeholder="propertyType:" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>
  minimumLmi</p><Input  Placeholder="minimumLmi" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>
  investementIndex
  </p><Input  Placeholder="investementIndex" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>
  lmirequiredOver</p><Input  
    Placeholder="lmirequiredOver"
    className="myinputs" 
    type="text" 
    value="" 
  />
    </div>
  <div className="scrollrow"><p>d60</p><Input  Placeholder="d60" className="myinputs" type="text" value="" /></div>
  <div className="scrollrow"><p>d61</p><Input  Placeholder="d61" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d62</p><Input  Placeholder="d62" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d63</p><Input  Placeholder="d63" className="myinputs" type="text" value="" /></div>
  <div className="scrollrow"><p>d64</p><Input  Placeholder="d64" className="myinputs" type="text" value="" /></div>
  <div className="scrollrow"><p>d65</p><Input  Placeholder="d65" className="myinputs" type="text" value="" /></div>
  <div className="scrollrow"><p>d66</p><Input  Placeholder="d66" className="myinputs" type="text" value="" /></div>
  <div className="scrollrow"><p>d67</p><Input  Placeholder="d67" className="myinputs" type="text" value="" /></div>
  <div className="scrollrow"><p>d68</p><Input  Placeholder="d68" className="myinputs" type="text" value="" /></div>
  <div className="scrollrow"><p>d69</p><Input  Placeholder="d69" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d70</p><Input  Placeholder="d70" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d71</p><Input  Placeholder="d71" className="myinputs" type="text" value="" /></div>
  <div className="scrollrow"><p>d72</p><Input  Placeholder="d72" className="myinputs" type="text" value="" /></div>
  <div className="scrollrow"><p>d73</p><Input  Placeholder="d73" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d74</p><Input  Placeholder="d74" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d75</p><Input  Placeholder="d75" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d76</p><Input  Placeholder="d76" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d77</p><Input  Placeholder="d77" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d78</p><Input  Placeholder="d78" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d79</p><Input  Placeholder="d79" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d80</p><Input  Placeholder="d80" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d81</p><Input  Placeholder="d81" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d82</p><Input  Placeholder="d82" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d83</p><Input  Placeholder="d83" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d84</p><Input  Placeholder="d84" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d85</p><Input  Placeholder="d85" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d86</p><Input  Placeholder="d86" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d87</p><Input  Placeholder="d87" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d88</p><Input  Placeholder="d88" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d89</p><Input  Placeholder="d89" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d90</p><Input  Placeholder="d90" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d91</p><Input  Placeholder="d91" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d92</p><Input  Placeholder="d92" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d93</p><Input  Placeholder="d93" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d94</p><Input  Placeholder="d94" className="myinputs" type="text" value=""/></div>
  <div className="scrollrow"><p>d95</p><Input  Placeholder="d95" className="myinputs" type="text" value=""/></div>
  </Grid.Column >
  <Grid.Column >
  <Icon  onClick={( e: any ) => this.RemoveLmi(e.currentTarget)}  name="trash"/>
  </Grid.Column>
  </Grid.Row>
  </Grid>
  
  )
  }

          LMIS (lmi: LendersLMI ) {
            return (
            <Grid style={{width: '95%', margin: '0'}} >
             
            <Grid.Row  >
            <Grid.Column width={14} className="scrollwrapper">
            <div className="scrollrow"><p>lower
            </p><Input  Placeholder="lower" className="myinputs" type="text" value={lmi.lower}/></div>
            <div className="scrollrow"><p>upper</p>
            <Input  
              Placeholder="upper" 
              className="myinputs" 
              type="text" 
              value={lmi.upper} 
            />
              </div>
            <div className="scrollrow"><p>fhog</p><Input  Placeholder="fhog" className="myinputs" type="text" value={lmi.fhog}/></div>
            <div className="scrollrow"><p>propertyType:
            </p><Input  Placeholder="propertyType:" className="myinputs" type="text" value={lmi.propertyType}/></div>
            <div className="scrollrow"><p>
            minimumLmi</p><Input  Placeholder="minimumLmi" className="myinputs" type="text" value={lmi.minimumLmi}/></div>
            <div className="scrollrow"><p>
            investementIndex
            </p><Input  Placeholder="investementIndex" className="myinputs" type="text" value={lmi.investementIndex}/></div>
            <div className="scrollrow"><p>
            lmirequiredOver</p><Input  
              Placeholder="lmirequiredOver"
              className="myinputs" 
              type="text" 
              value={lmi.lmirequiredOver} 
            />
              </div>
            <div className="scrollrow"><p>d60</p><Input  Placeholder="d60" className="myinputs" type="text" value={lmi.d60}/></div>
            <div className="scrollrow"><p>d61</p><Input  Placeholder="d61" className="myinputs" type="text" value={lmi.d61}/></div>
            <div className="scrollrow"><p>d62</p><Input  Placeholder="d62" className="myinputs" type="text" value={lmi.d62}/></div>
            <div className="scrollrow"><p>d63</p><Input  Placeholder="d63" className="myinputs" type="text" value={lmi.d63}/></div>
            <div className="scrollrow"><p>d64</p><Input  Placeholder="d64" className="myinputs" type="text" value={lmi.d64}/></div>
            <div className="scrollrow"><p>d65</p><Input  Placeholder="d65" className="myinputs" type="text" value={lmi.d65}/></div>
            <div className="scrollrow"><p>d66</p><Input  Placeholder="d66" className="myinputs" type="text" value={lmi.d66}/></div>
            <div className="scrollrow"><p>d67</p><Input  Placeholder="d67" className="myinputs" type="text" value={lmi.d67}/></div>
            <div className="scrollrow"><p>d68</p><Input  Placeholder="d68" className="myinputs" type="text" value={lmi.d68}/></div>
            <div className="scrollrow"><p>d69</p><Input  Placeholder="d69" className="myinputs" type="text" value={lmi.d69}/></div>
            <div className="scrollrow"><p>d70</p><Input  Placeholder="d70" className="myinputs" type="text" value={lmi.d70}/></div>
            <div className="scrollrow"><p>d71</p><Input  Placeholder="d71" className="myinputs" type="text" value={lmi.d71}/></div>
            <div className="scrollrow"><p>d72</p><Input  Placeholder="d72" className="myinputs" type="text" value={lmi.d72}/></div>
            <div className="scrollrow"><p>d73</p><Input  Placeholder="d73" className="myinputs" type="text" value={lmi.d73}/></div>
            <div className="scrollrow"><p>d74</p><Input  Placeholder="d74" className="myinputs" type="text" value={lmi.d74}/></div>
            <div className="scrollrow"><p>d75</p><Input  Placeholder="d75" className="myinputs" type="text" value={lmi.d75}/></div>
            <div className="scrollrow"><p>d76</p><Input  Placeholder="d76" className="myinputs" type="text" value={lmi.d76}/></div>
            <div className="scrollrow"><p>d77</p><Input  Placeholder="d77" className="myinputs" type="text" value={lmi.d77}/></div>
            <div className="scrollrow"><p>d78</p><Input  Placeholder="d78" className="myinputs" type="text" value={lmi.d78}/></div>
            <div className="scrollrow"><p>d79</p><Input  Placeholder="d79" className="myinputs" type="text" value={lmi.d79}/></div>
            <div className="scrollrow"><p>d80</p><Input  Placeholder="d80" className="myinputs" type="text" value={lmi.d80}/></div>
            <div className="scrollrow"><p>d81</p><Input  Placeholder="d81" className="myinputs" type="text" value={lmi.d81}/></div>
            <div className="scrollrow"><p>d82</p><Input  Placeholder="d82" className="myinputs" type="text" value={lmi.d82}/></div>
            <div className="scrollrow"><p>d83</p><Input  Placeholder="d83" className="myinputs" type="text" value={lmi.d83}/></div>
            <div className="scrollrow"><p>d84</p><Input  Placeholder="d84" className="myinputs" type="text" value={lmi.d84}/></div>
            <div className="scrollrow"><p>d85</p><Input  Placeholder="d85" className="myinputs" type="text" value={lmi.d85}/></div>
            <div className="scrollrow"><p>d86</p><Input  Placeholder="d86" className="myinputs" type="text" value={lmi.d86}/></div>
            <div className="scrollrow"><p>d87</p><Input  Placeholder="d87" className="myinputs" type="text" value={lmi.d87}/></div>
            <div className="scrollrow"><p>d88</p><Input  Placeholder="d88" className="myinputs" type="text" value={lmi.d88}/></div>
            <div className="scrollrow"><p>d89</p><Input  Placeholder="d89" className="myinputs" type="text" value={lmi.d89}/></div>
            <div className="scrollrow"><p>d90</p><Input  Placeholder="d90" className="myinputs" type="text" value={lmi.d90}/></div>
            <div className="scrollrow"><p>d91</p><Input  Placeholder="d91" className="myinputs" type="text" value={lmi.d91}/></div>
            <div className="scrollrow"><p>d92</p><Input  Placeholder="d92" className="myinputs" type="text" value={lmi.d92}/></div>
            <div className="scrollrow"><p>d93</p><Input  Placeholder="d93" className="myinputs" type="text" value={lmi.d93}/></div>
            <div className="scrollrow"><p>d94</p><Input  Placeholder="d94" className="myinputs" type="text" value={lmi.d94}/></div>
            <div className="scrollrow"><p>d95</p><Input  Placeholder="d95" className="myinputs" type="text" value={lmi.d95}/></div>
            </Grid.Column >
            <Grid.Column >
            <Icon  onClick={( e: any ) => this.RemoveLmi(e.currentTarget)}  name="trash"/>
            </Grid.Column>
            </Grid.Row>
            </Grid>
            
            )
            }
   render() {
const {myNews} = this.state
   return (
        <div  className="lenders" style={{overflowX: 'auto', width: '100%'}}>
           {myNews.map((item, index ) => 
  <div key={index}>{this.newLMI}</div>)}

     {
   this.state.lmis.map((item, index ) => 
  <div key={index}>{this.LMIS(item)}</div>)}

   </div>
      )
    }
  }
export default LMITable;