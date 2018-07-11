import * as React from 'react'
import { FormEvent } from 'react';
import newaction from '../../models/NewActions'
import lenderId from '../../models/lenderId'
import { Grid,  /* Segment,Button, */Dropdown, Input, Accordion, Icon, Menu } from 'semantic-ui-react'
// import ProductDetails from '../../containers/ProductDetails';
// import Lender from '../../models/Lender';
const SIoptions = [
  { key: 1, text: 'Non Essential', value: 'Non Essential' },
  { key: 2, text: 'Yes', value: 'Yes' },
  { key: 3, text: 'No', value: 'No' },
 
]
const SIoptions2 = [
 
  { key: 1, text: 'Yes', value: 'Yes' },
  { key: 2, text: 'No', value: 'No' },
 
]
const SIoptions3 = [
  { key: 1, text: 'Owner Occupied', value: 'Owner Occupied' },
  { key: 2, text: 'Residential Investement', value: 'Residential Investement' },

]
const SIoptions4 = [
  { key: 1, text: 'Full Doc', value: 'Full Doc' },
  { key: 2, text: 'Low Doc', value: 'Low Doc' },

]
const SIoptions5 = [
  { key: 1, text: 'Fixed', value: 'Fixed' },
  { key: 2, text: 'Variable', value: 'Variable' },

]
/*
const SIoptions6 = [
  { key: 1, text: 'P&I', value: 'P&I' },
  { key: 2, text: 'Interest Only', value: 'Interest Only' },
  { key: 2, text: 'IO in Advance', value: 'IO in Advance' },

] */
interface State {
    value: string;
    nuLender: string;
    activeIndex: number;
    value0: string,
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
value31: string,
value32: string
value33: string,
value34: string,
value35: string,
value36: string,
value37: string,
value38: string,
value39: string,
value40: string,
value41: string,
value42: string,
value43: string
      
  }
var m: number;
interface Iprops {
  newactions: newaction;
  lenderIds: lenderId;

  } 

class ProductDetails extends React.Component<Iprops, State> {

    constructor(props: Iprops) {
      super(props)
      this.state = { value: '', 
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
value32: '',
value33: '',
value34: '',
value35: '',
value36: '',
value37: '',
value38: '',
value39: '',
value40: '',
value41: '',
value42: '',
value43: '',
      
      activeIndex: 0, nuLender: '' } // Value is empty by default
      this._updateValue = this._updateValue.bind(this)
      this._handleSubmit = this._handleSubmit.bind(this)
      this.ddHandleClick = this.ddHandleClick.bind(this)
      
    }
    handleChange(e: HTMLInputElement) {
  
      let change = {}
     
      change[e.name] = e.value
     
      this.setState(change)
    
    }
    handleChangedd(e: HTMLInputElement) {
      var that = this;
    
      let change = {}
     
      change[e.parentElement.parentElement.parentElement.id] = e.children[0].innerHTML;
     
      that.setState(change)
  
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
      componentDidUpdate() {

      //  var solicitordetails = [];
        var that =  this;
      //  var lenderid = '7495446';
      //  alert('gotlenderId' + this.props.lenderIds.lenderId);
        var genId = Math.floor(Math.random() * 10000000);
        var getTime = new Date();
        if (that.props.newactions.component === 'Create Product') {
        if (m !== that.props.newactions.id) {
          if (that.props.newactions.actiontype === 'new') {
            const nbody = JSON.stringify({
              id: genId,
              idLender: this.props.lenderIds,
              eLodgeId: this.state.value0,
              nextGenId: this.state.value1,
              simpologyId: this.state.value2,
              name: this.state.value3, /*validacija */
              impaired: this.state.value4,
              whiteLabel: this.state.value9,
              proPack: this.state.value10,
              upfrontFee: this.state.value5,
              initialRate: this.state.value6,
              revertRate: this.state.value7,
              comparisonRate: this.state.value8,
              propertyUse: this.state.value12,
              lineOfCredit: this.state.value13,
              loanType: this.state.value14,
              construction: this.state.value15,
              repaymentType: this.state.value20,
              interestOnlyMaxPeriod: this.state.value21,
              lmiCapitalization: this.state.value22,
              lmiRequiredOver: this.state.value27,
              smsf: this.state.value23,
              rateType: this.state.value16,
              fixedTerm: this.state.value17,
              minLvr: this.state.value18,
              maxLvr: this.state.value19,
              minLoan: this.state.value24,
              maxLoan: this.state.value25,
              maxTerm: this.state.value26, /* obavezno */
              redrawFacility: this.state.value28,
              additionalRepayments: this.state.value29,
              offset: this.state.value30,
              abilityToSplitLoan: this.state.value31,
              application: this.state.value32,
              valuation: this.state.value33,
              legal: this.state.value34,
              settlement: this.state.value35,
              packageMonthly: this.state.value36,
              packageAnnual: this.state.value37,
              rateLock: this.state.value38,
              other: this.state.value39,
              notes: this.state.value40,
              hasRewards: this.state.value41,
              description: this.state.value43,
              points: this.state.value42,
              timeStamp: getTime
            });

            fetch('addProduct', {  
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
        }}}
      }
   
    _updateValue(value: string) {
      this.setState({ value });
     
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
  
   render() {
   // const { value } = this.state;
   const { activeIndex } = this.state;
   const {

        value0,
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
    value31,
    value32,
    value33,
    value34,
    value35,
    value36,
    value37,
    value38,
    value39,
    value40,
    value41,
    value42,
    value43
      
      } = this.state;
   // const {_handleSubmit } = this
   // const { _updateValue } = this;
   return (
        <div  className="lenders" style={{}}>
    
        <Accordion>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.ddHandleClick}>
          <Icon name="dropdown" />
          API CONNECTIONS
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
      
        <Grid celled={true}>
        <Grid.Row stretched={true} columns={3}  >
          <Grid.Column>
          eLodge ID
          </Grid.Column>
          <Grid.Column>
          NextGen ID
          </Grid.Column>
          <Grid.Column>
          Simpology ID
          </Grid.Column>
          <Grid.Column>
          <Input 
            placeholder="eLodge ID" 
            className="myinputs"
            type="text"
            name="value0"
            onChange={( e: any ) => this.handleChange(e.currentTarget)}
            value={value0}
            
          />
          </Grid.Column>
          <Grid.Column>
          <Input 
            placeholder="NextGen ID" 
            className="myinputs"
            type="text"
            name="value1"
            onChange={( e: any ) => this.handleChange(e.currentTarget)}
            value={value1}
            
          />
          </Grid.Column>
          <Grid.Column>
          <Input 
            placeholder="Simpology ID" 
            className="myinputs"
            type="text"
            name="value2"
            onChange={( e: any ) => this.handleChange(e.currentTarget)}
            value={value2}
          />
          </Grid.Column>
        
</Grid.Row>

</Grid>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.ddHandleClick}>
          <Icon name="dropdown" />
          PRODUCT INFORMATION
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
    
        <Grid celled={true}>
        <Grid.Row stretched={true} columns={2}  >
        <Grid.Column width={8}>
          Product Name
          </Grid.Column>
          <Grid.Column width={4}>
          Credit Impaired
          </Grid.Column>
     </Grid.Row> 
          <Grid.Row stretched={true} columns={2}>
          <Grid.Column width={8}>
          <Input 
            placeholder="Product Name" 
            className="myinputs"
            type="text"
            name="value3"
            onChange={( e: any ) => this.handleChange(e.currentTarget)}
            value={value3}
          />
          </Grid.Column>
          <Grid.Column width={4}>
          <Menu   
            className="except myinputs addborder" 
            type="text" 
            id="value4"
          >
          <Dropdown 

            floating={true}
            labeled={true}
            placeholder="Credit Impaired"
            options={SIoptions}
            name="value4"
            onChange={( e: any ) => this.handleChangedd(e.currentTarget)}
            value={value4}
          // tslint:disable-next-line:jsx-alignment
          />
          </Menu>
          </Grid.Column>
        
      </Grid.Row>
      <Grid.Row stretched={true} columns={4}  >
      <Grid.Column >
        Upfront Fee
        </Grid.Column>
        <Grid.Column >
        Initial Rate
        </Grid.Column>
        <Grid.Column>
        Revert Rate
        </Grid.Column>
        <Grid.Column>
        Comparison Rate
        </Grid.Column>
        <Grid.Column>
        <Input 
          placeholder="Upfront Fee" 
          className="myinputs"
          type="text"
          name="value5"
          onChange={( e: any ) => this.handleChange(e.currentTarget)}
          value={value5}
        />
        </Grid.Column>
        <Grid.Column>
        <Input 
          placeholder="Initial Rate" 
          className="myinputs"
          type="text"
          name="value6"
          onChange={( e: any ) => this.handleChange(e.currentTarget)}
          value={value6}
        />
        </Grid.Column>
        <Grid.Column>
        <Input 
          placeholder="Revert Rate" 
          className="myinputs"
          type="text"
          name="value7"
          onChange={( e: any ) => this.handleChange(e.currentTarget)}
          value={value7}
        />
        </Grid.Column>
        <Grid.Column>
        <Input 
          placeholder="Comparison Rate" 
          className="myinputs"
          type="text"
          name="value8"
          onChange={( e: any ) => this.handleChange(e.currentTarget)}
          value={value8}
        />
        </Grid.Column>
   </Grid.Row> 
   <Grid.Row stretched={true} columns={3}  >
      <Grid.Column width={4}>
        White Label
        </Grid.Column >
        <Grid.Column  width={4}>
        Pro pack
        </Grid.Column>
        <Grid.Column width={8}>
        Pro pack defalut Discount
        </Grid.Column>
        <Grid.Column width={4}>
      <Menu   
        className="except myinputs addborder" 
        type="text" 
        id="value9"
      >
      <Dropdown 

        floating={true}
        labeled={true}
        placeholder="White Label"
        options={SIoptions2}
        name="value9"
        onChange={( e: any ) => this.handleChangedd(e.currentTarget)}
        value={value9}
      // tslint:disable-next-line:jsx-alignment
      />
      </Menu>
        </Grid.Column >
        <Grid.Column  width={4}>
        <Menu   
            className="except myinputs addborder" 
            type="text" 
            id="value10"
        >
          <Dropdown 

            floating={true}
            labeled={true}
            placeholder="Pro Pack"
            options={SIoptions}
            name="value10"
            onChange={( e: any ) => this.handleChangedd(e.currentTarget)}
            value={value10}
          // tslint:disable-next-line:jsx-alignment
          />
        </Menu>
        </Grid.Column>
        <Grid.Column width={8}>
        <Input 
          placeholder="Pro pack defalut Discount" 
          className="myinputs"
          type="text"
          name="value11"
          onChange={( e: any ) => this.handleChange(e.currentTarget)}
          value={value11}
        />
       
        </Grid.Column>
        </Grid.Row>
</Grid>
       </Accordion.Content>
       <Accordion.Title active={activeIndex === 1} index={1} onClick={this.ddHandleClick}>
          <Icon name="dropdown" />
          PRODUCT DETAILS
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
    
        <Grid celled={true}>
        <Grid.Row stretched={true} columns={2}  >
        <Grid.Column width={8}>
          Product Name
          </Grid.Column>
          <Grid.Column width={4}>
          Credit Impaired
          </Grid.Column>
     </Grid.Row> 
         
      <Grid.Row stretched={true} columns={4}  >
      <Grid.Column >
        Property Use
        </Grid.Column>
        <Grid.Column >
        Line of Credit
        </Grid.Column>
        <Grid.Column>
        Loan Type
        </Grid.Column>
        <Grid.Column>
        Construction
        </Grid.Column>
        <Grid.Column>
        <Menu   
            className="except myinputs addborder" 
            type="text" 
            id="value12"
        >
          <Dropdown 

            floating={true}
            labeled={true}
            placeholder=" Property Use"
            options={SIoptions3}
            name="value12"
            onChange={( e: any ) => this.handleChangedd(e.currentTarget)}
            value={value12}
          // tslint:disable-next-line:jsx-alignment
          />
        </Menu>
        </Grid.Column>
        <Grid.Column>
        <Menu   
          className="except myinputs addborder" 
          type="text" 
          id="value13"
        >
      <Dropdown 

        floating={true}
        labeled={true}
        placeholder="Line of Credit"
        options={SIoptions2}
        name="value13"
        onChange={( e: any ) => this.handleChangedd(e.currentTarget)}
        value={value13}
      // tslint:disable-next-line:jsx-alignment
      />
        </Menu>
        </Grid.Column>
        <Grid.Column>
        <Menu   
          className="except myinputs addborder" 
          type="text" 
          id="value14"
        >
      <Dropdown 

        floating={true}
        labeled={true}
        placeholder="Loan Type"
        options={SIoptions4}
        name="value14"
        onChange={( e: any ) => this.handleChangedd(e.currentTarget)}
        value={value14}
      // tslint:disable-next-line:jsx-alignment
      />
        </Menu>
        </Grid.Column>
        <Grid.Column>
        <Menu   
          className="except myinputs addborder" 
          type="text" 
          id="value15"
        >
      <Dropdown 

        floating={true}
        labeled={true}
        placeholder="Construction"
        options={SIoptions2}
        name="value15"
        onChange={( e: any ) => this.handleChangedd(e.currentTarget)}
        value={value15}
      // tslint:disable-next-line:jsx-alignment
      />
        </Menu>
        </Grid.Column>
   </Grid.Row> 
   <Grid.Row stretched={true} columns={4}  >
   <Grid.Column >
     Rate Type
     </Grid.Column>
     <Grid.Column >
     Fixed Term
     </Grid.Column>
     <Grid.Column>
     Min LVR
     </Grid.Column>
     <Grid.Column>
     Max LVR
     </Grid.Column>
     <Grid.Column>
     <Menu   
         className="except myinputs addborder" 
         type="text" 
         id="value16"
     >
       <Dropdown 

         floating={true}
         labeled={true}
         placeholder="Rate Type"
         options={SIoptions5}
         name="value16"
         onChange={( e: any ) => this.handleChangedd(e.currentTarget)}
         value={value16}
       // tslint:disable-next-line:jsx-alignment
       />
     </Menu>
     </Grid.Column>
     <Grid.Column>
     <Input 
          placeholder="Fixed Term" 
          className="myinputs"
          type="text"
          name="value17"
          onChange={( e: any ) => this.handleChange(e.currentTarget)}
          value={value17}
      
     />
     </Grid.Column>
     <Grid.Column>
     <Input 
          placeholder="Min LVR" 
          className="myinputs"
          type="text"
          name="value18"
          onChange={( e: any ) => this.handleChange(e.currentTarget)}
          value={value18}
     />
     </Grid.Column>
     <Grid.Column>
     <Input 
      placeholder="Max LVR" 
      className="myinputs"
      type="text"
      name="value19"
      onChange={( e: any ) => this.handleChange(e.currentTarget)}
      value={value19}
     />
     </Grid.Column>
     <Grid.Column >
     Repayment Type
     </Grid.Column>
     <Grid.Column >
Interest Only Max Period
     </Grid.Column>
     <Grid.Column>
     LMI Capitulization
     </Grid.Column>
     <Grid.Column>
     SMSF
     </Grid.Column>
     <Grid.Column >
     <Menu   
      className="except myinputs addborder" 
      type="text" 
      id="value20"
     >
   <Dropdown 

     floating={true}
     labeled={true}
     placeholder="Repayment Type"
     options={SIoptions5}
     name="value20"
     onChange={( e: any ) => this.handleChangedd(e.currentTarget)}
     value={value20}
   // tslint:disable-next-line:jsx-alignment
   />
     </Menu>
     </Grid.Column>
     <Grid.Column >
     <Input 
      placeholder="Interest Only Max Period" 
      className="myinputs"
      type="text"
      name="value21"
      onChange={( e: any ) => this.handleChange(e.currentTarget)}
      value={value21}
     />
     </Grid.Column>
     <Grid.Column >
     <Menu   
      className="except myinputs addborder" 
      type="text" 
      id="value22"
     >
   <Dropdown 

     floating={true}
     labeled={true}
     placeholder="LMI Capitulization"
     options={SIoptions5}
     name="value22"
     onChange={( e: any ) => this.handleChangedd(e.currentTarget)}
     value={value22}
   // tslint:disable-next-line:jsx-alignment
   />
     </Menu>
     </Grid.Column>
     <Grid.Column >
     <Menu   
      className="except myinputs addborder" 
      type="text" 
      id="value23"
     >
   <Dropdown 

     floating={true}
     labeled={true}
     placeholder="SMSF"
     options={SIoptions5}
     name="value23"
     onChange={( e: any ) => this.handleChangedd(e.currentTarget)}
     value={value23}
   // tslint:disable-next-line:jsx-alignment
   />
     </Menu>
     </Grid.Column>
     <Grid.Column >
    Min Loan
     </Grid.Column>
     <Grid.Column >
    Max Loan      
     </Grid.Column>
     <Grid.Column>
    Max Term
     </Grid.Column>
     <Grid.Column>
    LMI Required Over
     </Grid.Column>
     <Grid.Column >
     <Input 
      placeholder="Min Loan" 
      className="myinputs"
      type="text"
      name="value24"
      onChange={( e: any ) => this.handleChange(e.currentTarget)}
      value={value24}
     />
     </Grid.Column>
     <Grid.Column >
     <Input 
      placeholder="Max Loan" 
      className="myinputs"
      type="text"
      name="value25"
      onChange={( e: any ) => this.handleChange(e.currentTarget)}
      value={value25}
 
     />
     </Grid.Column>
     <Grid.Column >
     <Input 
      placeholder="Max Term" 
      className="myinputs"
      type="text"
      name="value26"
      onChange={( e: any ) => this.handleChange(e.currentTarget)}
      value={value26}
     />
     </Grid.Column>
     <Grid.Column >
     <Input 
      placeholder="LMI Required Over" 
      className="myinputs"
      type="text"
      name="value27"
      onChange={( e: any ) => this.handleChange(e.currentTarget)}
      value={value27}
     />
     </Grid.Column>
     <Grid.Column >
     Redraw Facility
     </Grid.Column>
     <Grid.Column >
Additional Repayments
     </Grid.Column>
     <Grid.Column>
     Offset
     </Grid.Column>
     <Grid.Column>
     Ability to split loan
     </Grid.Column>
     <Grid.Column >
     <Menu   
      className="except myinputs addborder" 
      type="text" 
      id="value28"
     >
   <Dropdown 

     floating={true}
     labeled={true}
     placeholder="Redraw Facility"
     options={SIoptions2}
     name="value28"
     onChange={( e: any ) => this.handleChangedd(e.currentTarget)}
     value={value28}
   // tslint:disable-next-line:jsx-alignment
   />
     </Menu>
     </Grid.Column>
     <Grid.Column >
     <Menu   
      className="except myinputs addborder" 
      type="text" 
      id="value29"
     >
   <Dropdown 

     floating={true}
     labeled={true}
     placeholder="Additional Repayments"
     options={SIoptions2}
     name="value17"
     onChange={( e: any ) => this.handleChangedd(e.currentTarget)}
     value={value29}
   // tslint:disable-next-line:jsx-alignment
   />
     </Menu>
     </Grid.Column>
     <Grid.Column >
     <Menu   
      className="except myinputs addborder" 
      type="text" 
      id="value30"
     >
   <Dropdown 

     floating={true}
     labeled={true}
     placeholder="Offset"
     options={SIoptions5}
     name="value30"
     onChange={( e: any ) => this.handleChangedd(e.currentTarget)}
     value={value30}
   // tslint:disable-next-line:jsx-alignment
   />
     </Menu>
     </Grid.Column>
     <Grid.Column >
     <Menu   
      className="except myinputs addborder" 
      type="text" 
      id="value31"
     >
   <Dropdown 

     floating={true}
     labeled={true}
     placeholder="Ability to split loan"
     options={SIoptions5}
     name="value31"
     onChange={( e: any ) => this.handleChangedd(e.currentTarget)}
     value={value31}
   // tslint:disable-next-line:jsx-alignment
   />
     </Menu>
     </Grid.Column>
</Grid.Row> 
</Grid>
       </Accordion.Content>
       <Accordion.Title active={activeIndex === 1} index={1} onClick={this.ddHandleClick}>
          <Icon name="dropdown" />
          PRODUCT FEES
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
    
        <Grid celled={true}>
      
      <Grid.Row stretched={true} columns={4}  >
      <Grid.Column >
        Application
        </Grid.Column>
        <Grid.Column >
        Valuation
        </Grid.Column>
        <Grid.Column>
        Legal/Solicitior
        </Grid.Column>
        <Grid.Column>
        Settlement
        </Grid.Column>
        <Grid.Column >
        <Input 
         placeholder="Application" 
         className="myinputs"
         type="text"
         name="value32"
         onChange={( e: any ) => this.handleChange(e.currentTarget)}
         value={value32}
        />
        </Grid.Column>
        <Grid.Column >
        <Input 
         placeholder="Valuation" 
         className="myinputs"
         type="text"
         name="value33"
         onChange={( e: any ) => this.handleChange(e.currentTarget)}
         value={value33}
    
        />
        </Grid.Column>
        <Grid.Column >
        <Input 
         placeholder="Legal/Solicitior" 
         className="myinputs"
         type="text"
         name="value34"
         onChange={( e: any ) => this.handleChange(e.currentTarget)}
         value={value34}
        />
        </Grid.Column>
        <Grid.Column >
        <Input 
         placeholder="Settlement" 
         className="myinputs"
         type="text"
         name="value35"
         onChange={( e: any ) => this.handleChange(e.currentTarget)}
         value={value35}
        />
        </Grid.Column>
        <Grid.Column >
        Package (Monthly)
        </Grid.Column>
        <Grid.Column >
        Package (Annual)
        </Grid.Column>
        <Grid.Column>
       Rate lock
        </Grid.Column>
        <Grid.Column>
       Other
        </Grid.Column>
        <Grid.Column >
        <Input 
         placeholder="Package (Monthly)" 
         className="myinputs"
         type="text"
         name="value36"
         onChange={( e: any ) => this.handleChange(e.currentTarget)}
         value={value36}
        />
        </Grid.Column>
        <Grid.Column >
        <Input 
         placeholder="Package (Annual)" 
         className="myinputs"
         type="text"
         name="value37"
         onChange={( e: any ) => this.handleChange(e.currentTarget)}
         value={value37}
        />
        </Grid.Column>
        <Grid.Column >
        <Input 
         placeholder="Rate lock" 
         className="myinputs"
         type="text"
         name="value38"
         onChange={( e: any ) => this.handleChange(e.currentTarget)}
         value={value38}
        />
        </Grid.Column>
        <Grid.Column >
        <Input 
         placeholder="Other" 
         className="myinputs"
         type="text"
         name="value39"
         onChange={( e: any ) => this.handleChange(e.currentTarget)}
         value={value39}
        />
        </Grid.Column>

        </Grid.Row>
        <Grid.Row columns={1}>

        <Grid.Column >
          Notes
          </Grid.Column>
          <Grid.Column >
          <Input 
            placeholder="Notes" 
            className="myinputs"
            type="text"
            name="value40"
            onChange={( e: any ) => this.handleChange(e.currentTarget)}
            value={value40}
          />
          </Grid.Column>
          </Grid.Row>
          </Grid>
        </Accordion.Content>
     
        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.ddHandleClick}>
        <Icon name="dropdown" />
        REWARDS
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1}>
  
      <Grid celled={true}>
      <Grid.Row columns={2}>
      <Grid.Column >
     Product has rewards
      </Grid.Column>
      <Grid.Column >
      Points Amount
      </Grid.Column>
      <Grid.Column >
      <Menu   
        className="except myinputs addborder" 
        type="text" 
        id="value41"
      >
      <Dropdown 

        floating={true}
        labeled={true}
        placeholder="Product has rewards"
        options={SIoptions2}
        name="value41"
        onChange={( e: any ) => this.handleChangedd(e.currentTarget)}
        value={value41}
      // tslint:disable-next-line:jsx-alignment
      />
      </Menu>
      </Grid.Column>
      <Grid.Column >
      <Menu   
        className="except myinputs addborder" 
        type="text" 
        id="value42"
      >
      <Dropdown 

        floating={true}
        labeled={true}
        placeholder="Points Amount"
        options={SIoptions2}
        name="value42"
        onChange={( e: any ) => this.handleChange(e.currentTarget)}
        value={value42}
      // tslint:disable-next-line:jsx-alignment
      />
      </Menu>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
      <Grid.Column >
     Reward Description
      </Grid.Column>
      <Grid.Column >
      <Input 
        placeholder="Reward Description" 
        className="myinputs"
        type="text"
        name="value43"
        onChange={( e: any ) => this.handleChange(e.currentTarget)}
        value={value43}
 
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
export default ProductDetails;