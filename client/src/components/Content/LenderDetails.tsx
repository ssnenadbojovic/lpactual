import * as React from 'react'
import ContactDetail from  '../../models/LenderDetail/contactdetail'
import newaction from '../../models/NewActions'
import { getJSONfunction } from '../../../src/functions/content'
import lenderId from '../../models/lenderId'
import { Grid,  /* Segment,*/ Button, Dropdown, Input, Accordion, Icon, Menu } from 'semantic-ui-react'
// import Lender from '../../models/Lender';
// dali je novi ili Id update
const SIoptions = [
  { key: 1, text: 'Yes', value: 'Yes' },
  { key: 2, text: 'No', value: 'No' },
 
]
const SIoptions2 = [
  { key: 1, text: 'Yes', value: 'Yes' },
  { key: 2, text: 'No', value: 'No' },
 
]
const SIoptions3 = [
  { key: 1, text: 'Residential', value: 'Residential' },
  { key: 2, text: 'Commercial', value: 'Commercial' },
  { key: 3, text: 'Equipment', value: 'Equipment' },
  { key: 4, text: 'Other', value: 'Other' },
 
]
const SIoptions4 = [
  { key: 1, text: 'Use Total', value: 'Use Total' },
  { key: 2, text: 'Use Max', value: 'Use Max' },
]
const SIoptions5 = [
  { key: 1, text: 'Yes', value: 'Yes' },
  { key: 2, text: 'No', value: 'No' },
]
interface State {
lender:object,
cd: string,
  contactdetails: string[],
  contactDetails: object[],
  solicitordetails: string[],
err: boolean;
    value: string;
    nuLender: string;
    activeIndex: number;
    value0: string,
    lenderId: string,
value1: string,
value2: string,
value3: string,
value4: string,
value5: string,
value6: string,
value7: string,
value8: string,
value9: string,
value10: string,
value11: string,
value12: string,
value13: string,
value14: string,
value15: string,
value16: string,
value17: string,
value18: string,
value19: string,
value20: string,
value21: string,
value22: string,
value23: string,
value24: string,
value25: string,
value26: string,
value27: string,
value28: string,
value29: string,
value30: string,
value31: string
      
  }
var m = -1;
interface Iprops {
 
  err1: boolean;
  newactions: newaction;
  lenderId: lenderId;
 
  } 

class LenderDetails extends React.Component<Iprops, State> {

    constructor(props: Iprops) {
      super(props)
      this.state = {   
        lender: [],
       cd: '',
        contactdetails: [],
        contactDetails: [],
        solicitordetails: [],
       err: false,
        lenderId: '',
      value: '', 
      value0: '',
value1: '',
value2: '',
value3: '',
value4: '',
value5: '',
value6: '',
value7: '',
value8: '',
value9: '',
value10: '',
value11: '',
value12: '',
value13: '',
value14: '',
value15: '',
value16: '',
value17: '',
value18: '',
value19: '',
value20: '',
value21: '',
value22: '',
value23: '',
value24: '',
value25: '',
value26: '',
value27: '',
value28: '',
value29: '',
value30: '',
value31: '',
      activeIndex: 0,
       nuLender: ''
       } // Value is empty by default
      this._updateValue = this._updateValue.bind(this)
      this._handleSubmit = this._handleSubmit.bind(this)
      this.ddHandleClick = this.ddHandleClick.bind(this)
      // contact
      this.addCD = this.addCD.bind(this)

    }


    getLender(theId: string) {

    
  
    var that = this;
      this.setState(
    
        { 
         lender: [] });
    
      getJSONfunction('/getLender?id=' + theId, function(err: any, data: object) {
    
    
    
        if (err !== null) {
          alert('Something went wrong: ' + err);
        } else {
    
       
       if (data !== null) {
    
        var inObject= data as Object;
        var inObjectL= JSON.stringify(inObject);
        var inObjectL= inObjectL.substring(1, inObjectL.lastIndexOf("]"));
        inObject=JSON.parse(inObjectL);
     
        if (inObjectL.length!==0) {
       
       that.setState(
    
    { 
     lender: inObject });
    }
   
    }
    //
    that.setState({
      value8: that.state.lender['information']['name'],
      value11: that.state.lender['information']['country'],
      value10: that.state.lender['information']['type'],
      value9: that.state.lender['information']['shorthand'],
      value12: that.state.lender['information']['livingExpenses'],
      value13: that.state.lender['information']['turnaround'],
      value14: that.state.lender['information']['digitalPlatform'],
      value16: that.state.lender['information']['phone'],
      value17: that.state.lender['information']['fax'],
      value18: that.state.lender['information']['email'],
      value19: that.state.lender['information']['url'],
      value20: that.state.lender['notes'],
      value1: that.state.lender['applyOnlineDetails']['brokerIdPrimaryTitle'],
      value2: that.state.lender['applyOnlineDetails']['brokerIdPrimaryPattern'],
      value3: that.state.lender['applyOnlineDetails']['brokerIdSecondaryRequired'],
      value4: that.state.lender['applyOnlineDetails']['brokerIdSecondaryTitle'],
      value5: that.state.lender['applyOnlineDetails']['brokerIdSecondaryPattern'],
      value6: that.state.lender['applyOnlineDetails']['additionalInformationRequired'],
      value7: that.state.lender['applyOnlineDetails']['additionalInformationTitle'],
 contactDetails: that.state.lender['contactDetails'],
value21: that.state.lender['solicitorDetails']['name'],
      value22: that.state.lender['solicitorDetails']['phone'],
      value23: that.state.lender['solicitorDetails']['fax'],
      value24: that.state.lender['solicitorDetails']['email'],
    value25: that.state.lender['solicitorDetails']['url'],
      value26: that.state.lender['solicitorDetails']['notes'],

    })
 
   // 
  } 
  });
  var t= this.state.contactDetails;
  alert(JSON.stringify(t));

}
componentDidMount() {

  this.getLender(this.props.lenderId.lenderId);
}
 addCD(e: HTMLObjectElement) {
      var name = e.name;
      this.setState(
  
  { 
   contactdetails: [...this.state.contactdetails, name]})
    }
   
    ddHandleClick = (e: any, titleProps: any) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }
   RemoveCD (r: HTMLObjectElement) {
 
    r.parentElement.parentElement.remove();
   }
  
  handleChange(e: HTMLInputElement) {
  
    let change = {}
   
    change[e.name] = e.value
   
    this.setState(change)
  
  }
  handleChangedd(e: HTMLInputElement) {
    var that = this;
   
    // If you are using babel, you can use ES 6 dictionary syntax
    // let change = { [e.target.name] = e.target.value }
    let change = {}
   
    change[e.parentElement.parentElement.parentElement.id] = e.children[0].innerHTML;
   
    that.setState(change)
  /*  setTimeout(function() {
    alert( that.state.value3);
  },
               100); */
  
  }
// tslint:disable-next-line:member-ordering

       componentDidUpdate() {
      var contactdetails = [];
    /*  var phones: string[];
      var mails: string[];
      var faxes: string[];
      var urls: string[]; */
    //  var solicitordetails = [];
      var that =  this;
      if (that.props.newactions.component === 'Create Lender') {
      if (m !== that.props.newactions.id) {
        // contactdetails array
        var elemscd = document.getElementsByClassName('contactdetails');
        var elemsncd = elemscd.length;
        for (var i = 0; i < elemsncd; i++) {
        var elem = elemscd[i];
     
        // tslint:disable-next-line:jsx-wrap-multiline
        var firstType = elem.children[0].children[0].children[0] as HTMLInputElement;
        var firstChild = elem.children[1].children[0].children[0] as HTMLInputElement;
        var secondChild = elem.children[2].children[0].children[0] as HTMLInputElement;
        var cdx = new ContactDetail;
        cdx.contacttype = firstType.value;
        cdx.name = firstChild.value;
        cdx.information = secondChild.value;
        contactdetails.push(cdx);
        }
 
     //   var genId = Math.floor(Math.random() * 10000000);
        var getTime = Math.floor(Date.now());
        m = that.props.newactions.id;
       // alert(this.state.value0);
        const nbody = JSON.stringify({
        //  id: genId,
    //      idApplyOnline:  this.state.value0,
         information: {
           logo: '',
          name: this.state.value8,
          country: this.state.value11,
          type: this.state.value10,
          shorthand: this.state.value9,
          livingExpenses: this.state.value12,
          turnaround: this.state.value13,
          digitalPlatform: this.state.value14,
          phone: this.state.value16,
          fax: this.state.value17,
          email: this.state.value18,
          url: this.state.value19,
          notes: this.state.value20
         } ,
         lmis: {},
         hems: {},
          applyOnlineDetails: {
          brokerIdPrimaryTitle: this.state.value1,
          brokerIdPrimaryPattern: this.state.value2,
          brokerIdSecondaryRequired: this.state.value3,
          brokerIdSecondaryTitle: this.state.value4,
          brokerIdSecondaryPattern: this.state.value5,
          additionalInformationRequired: this.state.value6,
          additionalInformationTitle: this.state.value7,
          },
          contactDetails: contactdetails ,
     
         solicitorDetails: {
          name: this.state.value21,
          phone: this.state.value22,
          fax: this.state.value23,
          email: this.state.value24,
          url: this.state.value25,
          notes: this.state.value26,
         
        },
          timeStamp: getTime	
        });
       
        fetch('addLender', {  
          method: 'POST',  
          headers: {  
            'Content-Type': 'application/json'
          },   
           body: nbody
      })
      .then(function (data: any) {  
        alert('Request success: ' + data);  
      })  
      .catch(function (error: any) {  
        alert('Request failure: ' + error);  
      });
    /*    if (this.state.err === false) {
        this.setState ({ err : true}); } else { this.setState ({ err : false})} */
        }
    }
    } 
    _updateValue(value0: string) {
      this.setState({ value0 });
    
    }
  
    _handleSubmit() {
    
      if (!this.state.nuLender) {
        return
      } else {
     // this.props.handleSubmit(this.state.value)

     this.setState({ 
        nuLender: 'trest'
    })}
  }
  // ide u map. oko 430
  ContactDetails(contacttype: string, purpuse: string, myindex: number) {
  
    var cdkey: string;
    cdkey = 'key' + myindex.toString;

    if (contacttype === 'phone' || contacttype === 'fax' || contacttype === 'mail' || contacttype === 'globe' ) {
return (
  <Grid.Row  stretched={true} className="contactdetails" key={cdkey}>

  <Grid.Column width={1}><Input type="text" value={contacttype} style={{display: 'none'}}  />
  <Icon name={contacttype} style={{float: 'left'}} /> </Grid.Column>
  <Grid.Column width={6}>
  
<Input type="text" value={purpuse} name= {purpuse}  />
  
  </Grid.Column>
  <Grid.Column width={7}> 
  <Input type="text" />
  </Grid.Column>
  <Grid.Column width={2}>
  <Icon 
    color="red"  
    style={{cursor: 'pointer'}} 
    onClick={( e: any ) => this.RemoveCD(e.currentTarget)} 
    name="trash"
  />
  </Grid.Column>
  </Grid.Row>

)
}
  
    return(
       null
      )
}
/*
SolicitorDetails(contacttype: string) {

  if (contacttype === 'phone' || contacttype === 'fax' || contacttype === 'mail' || contacttype === 'globe' ) {
      return (
        <Grid.Row  stretched={true} className="solicitordetails" >
      
        <Grid.Column width={1}><Input type="text" value={contacttype} style={{display: 'none'}}  />
        <Icon name={contacttype} style={{float: 'left'}} /> </Grid.Column>
        <Grid.Column width={6}>
        
      <Input type="text"  />
        
        </Grid.Column>
        <Grid.Column width={7}> 
        <Input type="text" />
        </Grid.Column>
        <Grid.Column width={2}>
        <Icon 
          color="red"  
          style={{cursor: 'pointer'}} 
          onClick={( e: any ) => this.RemoveCD(e.currentTarget)} 
          name="trash"
        />
        </Grid.Column>
        </Grid.Row>
      
      ) 
    }

{
  this.state.solicitordetails.map((item, index ) => 
  <Grid key={index}>{this.SolicitorDetails(item)}</Grid>)}
  return(
             null
            )
 
  } */
   render() {
   // const { value } = this.state;
   const { activeIndex } = this.state;
  // const {  _updateValue } = this;
 
   const {

err,
//    value0,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    value13,
    value14,
    value15,
    value16,
    value17,
    value18,
    value19,
    value20,
    value21, 
value22,
value23,
value24,
value25,
value26,
value27,
value28,
value29,
value30,
value31
  
  } = this.state;
 
   return (
        <div  className="lenders" style={{}}>
        <Grid>
        <Grid.Row stretched={true} columns="2" style={{ paddingLeft: '15px'}}  >
<Grid.Column width={4}>Lender Name
</Grid.Column>
<Grid.Column width={4}>Lender ShortHand
</Grid.Column>
</Grid.Row>
<Grid.Row stretched={true} columns="2" style={{ paddingLeft: '15px'}}   >
<Grid.Column width={4}>
<Input 
  placeholder="Lender Name" 
  className="myinputs"
  type="text"
  value={value8}
  name="value8"
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="Lender Shorthand" 
  className="myinputs"
  type="text"
  value={value9}
  name="value9"
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
</Grid.Row>
</Grid>
        <Accordion>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.ddHandleClick}>
          <Icon name="dropdown" />
          API CONNECTIONS
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
      
        <Grid celled={true}>
      
<Grid.Row stretched={true}  >
<Grid.Column width={8}>Primary Broker ID title
</Grid.Column>
<Grid.Column width={8}>Primary Broker ID entry pattern
</Grid.Column>
<Grid.Column width={8}>
<Input 
  placeholder="Primary Broker ID title" 
  className="myinputs"
  type="text"
  
  name="value1"
  value={value1}
  error={err}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column width={8}>
<Input 
  placeholder="Primary Broker ID entry pattern" 
  className="myinputs"
  type="text"
  name="value2"
  value={value2}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
</Grid.Row>
<Grid.Row  stretched={true}>
<Grid.Column width={4}>Secondary Broker ID required
</Grid.Column>
<Grid.Column width={4}>Secondary Broker ID title
</Grid.Column>
<Grid.Column width={8}>Secondary Broker ID entry pattern
</Grid.Column>
<Grid.Column width={4}>
<Menu   
  className="except myinputs addborder" 
  id="value3"
>
<Dropdown 

  floating={true}
  labeled={true}
  placeholder="Secondary Broker ID required"
  options={SIoptions}
  value={value3}
  tagName="dd"
  name="value3"
  onChange={( e: any ) => this.handleChangedd(e.currentTarget)} 
// tslint:disable-next-line:jsx-alignment
/>
</Menu>
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="Secondary Broker ID title" 
  className="myinputs"
  type="text" 
  // error={true}
  style={{paddingTop: 0, paddingBottom: 0}}
  value={value4}
  name="value4"
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column width={8}>
<Input 
  placeholder="Secondary Broker ID entry pattern" 
  className="myinputs"
  type="text"
  value={value5}
  name="value5"
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
</Grid.Row>
<Grid.Row stretched={true}  >
<Grid.Column width={8}>Additional Information Required
</Grid.Column>
<Grid.Column width={8}>Additional Information Title
</Grid.Column>
</Grid.Row>
<Grid.Row stretched={true}  >
<Grid.Column width={8}>
<Menu   
  className="except myinputs addborder" 
  type="text" 
  id="value6"
>
<Dropdown 

  floating={true}
  labeled={true}
  placeholder="Additional Information Required"
  options={SIoptions2}
  value={value6}
  name="value6"
  onChange={( e: any ) => this.handleChangedd(e.currentTarget)} 
// tslint:disable-next-line:jsx-alignment
/>
</Menu>
</Grid.Column>
<Grid.Column width={8}>
<Input 
  placeholder="Additional Information Title" 
  className="myinputs"
  type="text"
  style={{paddingTop: 0, paddingBottom: 0}}
  value={value7}
  name="value7"
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
</Grid.Row>
</Grid>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.ddHandleClick}>
          <Icon name="dropdown" />
          LENDER DETAILS
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
        <Grid celled={true}>
        <Grid.Row stretched={true}  >

<Grid.Column width={8}>
Type of Lender
</Grid.Column>
<Grid.Column width={8}>
Country of Operation
</Grid.Column>

<Grid.Column width={8}>
<Menu   
  className="except myinputs addborder" 
  type="text" 
  id="value10"
>
<Dropdown 

  floating={true}
  labeled={true}
  placeholder="Type of Lender"
  options={SIoptions3}
  value={value10}
  name="value10"
  onChange={( e: any ) => this.handleChangedd(e.currentTarget)} 
// tslint:disable-next-line:jsx-alignment
/>
</Menu>
</Grid.Column>
<Grid.Column width={8}>
<Input 
  placeholder="Country of Operation" 
  className="myinputs"
  type="text"
  value={value11}
  name="value11"
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
</Grid.Row>

<Grid.Row stretched={true}  >
<Grid.Column width={8}>Living expenses
</Grid.Column>
<Grid.Column width={4}>Turnaround days
</Grid.Column>
<Grid.Column width={4}>
Digital platform
</Grid.Column>

<Grid.Column width={8}>
<Menu   
  className="except myinputs addborder" 
  type="text" 
  id="value12"
>
<Dropdown 

  floating={true}
  labeled={true}
  placeholder="Living expenses"
  options={SIoptions4}
  value={value12}
  name="value12"
  onChange={( e: any ) => this.handleChangedd(e.currentTarget)} 
// tslint:disable-next-line:jsx-alignment
/>
</Menu>
</Grid.Column>

<Grid.Column width={4}>
<Input 
  placeholder="Turnaround days" 
  className="myinputs"
  type="text"
  value={value13}
  name="value13"
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column width={4}>
<Menu   
  className="except myinputs addborder" 
  type="text" 
  id="value14" 
>
<Dropdown 

  floating={true}
  labeled={true}
  placeholder="Additional Information Required"
  options={SIoptions5}
  value={value14}
  name="value14"
  onChange={( e: any ) => this.handleChangedd(e.currentTarget)} 
// tslint:disable-next-line:jsx-alignment
/>
</Menu>
</Grid.Column>

</Grid.Row>
<Grid.Row stretched={true}  >
<Grid.Column width={16}>Servicing Calculator File Name
</Grid.Column>
<Grid.Column width={16}>
<Input 
  placeholder="Servicing Calculator File Name" 
  className="myinputs"
  type="text"
  value={value15}
  name="value15"
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
</Grid.Row>
<Grid.Row stretched={true}  >
<Grid.Column width={4}>Phone Number
</Grid.Column>
<Grid.Column width={4}>Fax Number
</Grid.Column>
<Grid.Column width={4}>
E-Mail address
</Grid.Column>
<Grid.Column width={4}>
Website Url
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="Phone Number" 
  className="myinputs"
  type="text"
  value={value16}
  name="value16"
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="Fax Number" 
  className="myinputs"
  type="text"
  value={value17}
  name="value17"
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="E-Mail address" 
  className="myinputs"
  type="text"
  value={value18}
  name="value18"
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="Website Url" 
  className="myinputs"
  type="text"
  value={value19}
  name="value19"
  onChange={( e: any ) => this.handleChange(e.currentTarget)}
/>
</Grid.Column>
</Grid.Row>
<Grid.Row stretched={true}  >
<Grid.Column width={16}>Notes
</Grid.Column>
<Grid.Column width={16}>
<Input 
  placeholder="Notes" 
  className="myinputs"
  type="text"
  value={value20}
  name="value20"
  onChange={( e: any ) => this.handleChange(e.currentTarget)}
/>
</Grid.Column>
</Grid.Row>
</Grid>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.ddHandleClick}>
          <Icon name="dropdown" />
          CONTACT DETAILS
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
        
          <Grid celled={true}>
          <Grid.Row stretched={true}  >
<Grid.Column width={4}> 
<Button icon={true} name="phone"  onClick={( e: any ) => this.addCD(e.currentTarget)}  labelPosition="left">
<Icon name="phone"  />
Add Phone Number
</Button>
</Grid.Column>
<Grid.Column width={4}>
<Button icon={true} name="fax"   onClick={( e: any ) => this.addCD(e.currentTarget)}  labelPosition="left">
<Icon name="fax" />
Add Fax Number
</Button>
</Grid.Column>
<Grid.Column width={4}>
<Button icon={true}  name="mail" labelPosition="left"  onClick={( e: any ) => this.addCD(e.currentTarget)} >
<Icon name="mail" />
Add E-Mail Address
</Button>
</Grid.Column>
<Grid.Column width={4}>
<Button icon={true} name="globe" labelPosition="left" onClick={( e: any ) => this.addCD(e.currentTarget)} >
<Icon name="globe" />
Website Url
</Button>

</Grid.Column>
</Grid.Row>

</Grid>
{
   this.state.contactDetails.map((item, index ) => 
  <Grid key={index}>{this.ContactDetails(item['contactType'],item['name'], index)}</Grid>)}
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.ddHandleClick}>
          <Icon name="dropdown" />
          SOLICITER DETAILS
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
         <Grid celled={true}>
         <Grid.Row stretched={true}>
         <Grid.Column width={16}> Solicitor Name
</Grid.Column>
<Grid.Column width={16}>
<Input 
  placeholder="Solicitor Name" 
  className="myinputs"
  type="text"
  value={value21}
  name="value21"
  onChange={( e: any ) => this.handleChange(e.currentTarget)}
/>
</Grid.Column>
         </Grid.Row>
         <Grid.Row  stretched={true}>
<Grid.Column width={4}>Phone Number
</Grid.Column>
<Grid.Column width={4}>Fax Number
</Grid.Column>
<Grid.Column width={4}>E-Mail address
</Grid.Column>
<Grid.Column width={4}>Website Url
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="Phone Number" 
  className="myinputs"
  type="text"
  value={value22}
  name="value22"
  onChange={( e: any ) => this.handleChange(e.currentTarget)}
/>
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="Fax Number" 
  className="myinputs"
  type="text"
  value={value23}
  name="value23"
  onChange={( e: any ) => this.handleChange(e.currentTarget)}
/>
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="E-Mail address" 
  className="myinputs"
  type="text"
  name="value24"
  onChange={( e: any ) => this.handleChange(e.currentTarget)}
  value={value24}
/>
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="Website Url" 
  className="myinputs"
  type="text"
  name="value25"
  onChange={( e: any ) => this.handleChange(e.currentTarget)}
  value={value25}
/>
</Grid.Column>
</Grid.Row>
<Grid.Row stretched={true}>
         <Grid.Column width={16}>
         Notes
</Grid.Column>
<Grid.Column width={16}>
<Input 
  placeholder="Notes" 
  className="myinputs"
  type="text"
  name="value26"
  onChange={( e: any ) => this.handleChange(e.currentTarget)}
  value={value26}
/>
</Grid.Column>
         </Grid.Row>
</Grid>
        </Accordion.Content>
      
      <Accordion.Title active={activeIndex === 5} index={5} onClick={this.ddHandleClick}>
        <Icon name="dropdown" />
        DA DETAILS
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 5}>
       <Grid>
       
       <Grid.Row  stretched={true}>
<Grid.Column width={4}>Phone Number
</Grid.Column>
<Grid.Column width={4}>Fax Number
</Grid.Column>
<Grid.Column width={4}>E-Mail address
</Grid.Column>
<Grid.Column width={4}>Website Url
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="Phone Number" 
  className="myinputs"
  type="text"
  name="value27"
  onChange={( e: any ) => this.handleChange(e.currentTarget)}
  value={value27}
/>
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="Fax Number" 
  className="myinputs"
  type="text"
  name="value28"
  onChange={( e: any ) => this.handleChange(e.currentTarget)}
  value={value28}
/>
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="E-Mail address" 
  className="myinputs"
  type="text"
  name="value29"
  onChange={( e: any ) => this.handleChange(e.currentTarget)}
  value={value29}
/>
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="Website Url" 
  className="myinputs"
  type="text"
  name="value30"
  onChange={( e: any ) => this.handleChange(e.currentTarget)}
  value={value30}
/>
</Grid.Column>
</Grid.Row>
<Grid.Row stretched={true}>
       <Grid.Column width={16}> 
       Notes
</Grid.Column> </Grid.Row>
<Grid.Row stretched={true}>
<Grid.Column width={16}>
<Input 
  placeholder="Notes" 
  className="myinputs"
  type="text"
  name="value31"
  onChange={( e: any ) => this.handleChange(e.currentTarget)}
  value={value31}
/>

</Grid.Column>
       </Grid.Row>
</Grid>
        </Accordion.Content>
 </Accordion>

   </div>
      )
    }
  }
export default LenderDetails;
/*
  <Grid.Row stretched={true}  >
          <Grid.Column width={16}>
          <p>ApplyOnline ID</p>
          </Grid.Column>
          <Grid.Column width={16}>
     <!--     <Input 
            placeholder="ApplyOnline ID" 
            className="myinputs"
            type="text"
            name="value0"
            value={value0}
            onChange={( e: any ) => this.handleChange(e.currentTarget)} 
          /> -->
          </Grid.Column>
        
</Grid.Row>

*/