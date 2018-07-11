import { Grid,  Segment, Icon, Dropdown, Checkbox } from 'semantic-ui-react';
import * as React from 'react'
// import { LendersLMI } from '../models/LendersLMI'
export function onlyUnique(value: any, index: any, self: any) { 
  return self.indexOf(value) === index;
}
export function getJSONfunction(url: any, callback: any) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};
export function Lenders(id: string, name: string, timestamp: string,
                        nfo: string, inforcountry: string, thelenders: any[], 
                        getProducts: (a: string, b: string) => string,
                        editLender: (a: string) => string,
                        mbTable: (a: string) => string,
                        hemTable: (a: string) => string, 
                        lmiTable: (a: string) => string,
                        sdIndex: (a: string) => string, 
                        deleteLender: (a: string) => string, 
                        Duplicate: (a: string) => string, 
                        Activate: (a: string) => string,
                        UploadLogo: (a: string) => string,
                        UploadSC: (a: string) => string,
                  
                    ) {
    var phones = 0;
    var faxes  = 0;
    var  mails = 0;
    var urls = 0;
    var m = thelenders;
  
    // tslint:disable-next-line:no-shadowed-variable
  
    m.forEach((elementx: any) => {
      
      if (elementx.id === id) {
    var countCD = elementx.contactDetails.length;
    for (var c = 0; c < countCD;  c++ ) {
  if (elementx.contactDetails[c].contacttype === 'phone') {
    phones++;
  }
  if (elementx.contactDetails[c].contacttype === 'fax') {
    faxes++;
  }
  if (elementx.contactDetails[c].contacttype === 'mail') {
    mails++;
  }
  if (elementx.contactDetails[c].contacttype === 'url') {
    urls++;
  }}
      }
    })
    // tslint:disable-next-line:radix
    var getDate = new Date( parseInt(timestamp));
    var getDate2 = getDate.toDateString();
   
    return (
    <Grid style={{}} className="lender" celled={true}>
      <Grid.Row stretched={true} >
        <Grid.Column width={10} onClick={(e: EventListener) => getProducts(id, name)} >
        <Segment compact={true} style={{display: 'none'}}className="rowstyle"><h2>{id}</h2></Segment>
          <Segment compact={true} className="rowstyle"><h2>{name}</h2></Segment>
          <Segment.Group horizontal={true} className="rowstyle" >
          <Segment>{inforcountry}</Segment>
          <Segment ><Icon name="phone" /></Segment>
          <Segment ><p className="orange">{phones}</p></Segment>
          <Segment ><Icon name="grid layout"/></Segment>
          <Segment ><p className="red">{faxes}</p></Segment>
          <Segment ><Icon name="mail"/></Segment>
          <Segment ><p className="red">{mails}</p></Segment>
          <Segment ><Icon name="world"/></Segment>
          <Segment ><p className="red">{urls}</p></Segment>
        </Segment.Group>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment compact={true} className="rowstyle"><h2>{nfo}</h2></Segment>
          <Segment.Group horizontal={true} className="rowstyle">
  <Segment>  <p>{getDate2}</p></Segment>
  
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
      <Dropdown.Item onClick={(e) => editLender(id)}><Icon  className="edit icon"/>Edit</Dropdown.Item>
      <div className="divider"/>
    
        <Dropdown.Item onClick={(e) => mbTable(id)}><Icon  className="th list icon"/>MB Parametars</Dropdown.Item>
        <Dropdown.Item onClick={(e) => hemTable(id)}><Icon  className="th list icon"/>HEM Table</Dropdown.Item>
        <Dropdown.Item onClick={(e) => lmiTable(id)}><Icon  className="th list icon"/>LMI Table</Dropdown.Item>
        <Dropdown.Item onClick={(e) => sdIndex(id)}><Icon  className="th list icon"/>SD Index</Dropdown.Item>
        <Dropdown.Item onClick={(e) => Duplicate(id)}><Icon  className="th list icon"/>Duplicate</Dropdown.Item>
        <Dropdown.Item onClick={(e) => Activate(id)}><Icon  className="th list icon"/>Activate/Disable</Dropdown.Item>
        <Dropdown.Item onClick={(e) => UploadLogo(id)}><Icon  className="th list icon"/>Upload Logo</Dropdown.Item>
        <Dropdown.Item onClick={(e) => UploadSC(id)}><Icon  className="th list icon"/>Upload SC</Dropdown.Item>
    
        <div className="divider"/>
        <Dropdown.Item onClick={(e) => deleteLender(id)}><Icon  className="delete icon" style={{color: 'red'}}/>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Segment>
       </Grid.Column>
      </Grid.Row>
     
    </Grid>
  
    )
  }
 
export function Product (id: string, productName: string,
                         rates1: string, rates2: string, fees1: string, 
                         fees2: string, fees3: string, valuef: string, checked1: boolean, 
                         checked2: boolean, checked3: boolean, 
                         deleteProduct: ( a: string) => string,
                         editProduct: ( a: string) => string,
                         copyProduct: ( a: string) => string,
                        ) {
 
        return (
        
          <Grid celled={true} style={{}} className="lender">
          <Grid.Row stretched={true}  >
            <Grid.Column width={10}>
            <Segment compact={true} style={{display: 'none'}} className="rowstyle">{id}</Segment>
              <Segment compact={true} className="rowstyle"><h2>{productName}</h2></Segment>
              <Segment.Group horizontal={true} className="rowstyle" >
              <Segment>RATES:</Segment>
              <Segment ><p className="orange">{rates1}</p></Segment>
              <Segment ><p className="orange">{rates2}</p></Segment>
              <Segment >FEES</Segment>
              <Segment ><p className="red">{fees1}</p></Segment>
              <Segment ><p className="red">{fees2}</p></Segment>
              <Segment ><p className="red">{fees3}</p></Segment>
            </Segment.Group>
            </Grid.Column>
            <Grid.Column width={4}>
              <Segment compact={true} className="rowstyle"><h2>{valuef}</h2></Segment>
              <Segment.Group horizontal={true} className="rowstyle">
      <Segment>   <Checkbox label={'E'} checked={checked1} className="checkboxm"/>
      <Checkbox label={'A'} checked={checked2} className="checkboxm"/>
      <Checkbox label={'S'} checked={checked3} className="checkboxm"/></Segment>
  
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
          <Dropdown.Item onClick={() => editProduct (id)}><Icon  className="edit icon"/>Edit</Dropdown.Item>
          <Dropdown.Item onClick={() => copyProduct (id)}><Icon  className="edit icon"/>Copy Product</Dropdown.Item>
      
            <Dropdown.Item onClick={() => deleteProduct (id)}><Icon  className="delete icon" style={{color: 'red'}}/>Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
            </Segment>
           </Grid.Column>
          </Grid.Row>
         
        </Grid>
     
        )
      }
      /*
      export function LMIS (lmi: LendersLMI) {
        function myfn(e: HTMLInputElement, event: Event) {
          setTimeout(function() { e.value = e.value }, 100);
          
event.preventDefault();
   
        }
      
        return (
        <Grid style={{width: '95%', margin: '0'}} >
         
        <Grid.Row  >
        <Grid.Column width={14} className="scrollwrapper">
        <div className="scrollrow" ><p>lower
        </p><Input placeholder="lower" onChange={( e: any ) => myfn(e.currentTarget, e.event)}  className="myinputs" type="text" value={lmi.lower}/></div>
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
        <Icon   name="trash"/>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        
        )
        }
     export function Hem (id: string, lenderId: string, lower: string , upper: string,
        adults: string , additionaladultcouple: string, 
        single1: string , single2: string , single3: string, 
        single31: string , couple1: string , couple2: string, 
        couple3: string , couple31: string, deleteHem: (a: string) => string) {
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
<Icon onClick={() => deleteHem(id)} name="trash"/>
</Grid.Column>"

  </Grid.Row>

)

  } */
 