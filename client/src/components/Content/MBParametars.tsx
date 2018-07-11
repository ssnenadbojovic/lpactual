import * as React from 'react'

import newaction from '../../models/NewActions'

import { Grid,  /* Segment,*/Input, Accordion, Icon } from 'semantic-ui-react'

interface State {
  activeIndex: number,

  baseSalary:string;
  bonus:string;
  commission:string;
  allowance:string;
  overtimeEssential:string;
  overtimeNonEssential:string;
  rental:string;
  otherTaxable:string;
  nonTaxable:string;
  businessIncomeLastYear:string;
  businessIncomeYearBefore:string;
  creditCardRepayments:string;
servicingRate:string;
negativeGearingRate:string;
existingLoanRepaymentMultiplier:string;
na1:string;
na2:string;
magicNumber:string;

      
  }
var m: number;
interface Iprops {
  newactions: newaction;

 
  } 
  export  class MBParametars extends React.Component<Iprops, State> {

    constructor(props: Iprops) {
      super(props)
      this.state = { 
        activeIndex: 0,
     
  baseSalary:'',
  bonus:'',
  commission:'',
  allowance:'',
  overtimeEssential:'',
  overtimeNonEssential:'',
  rental:'',
  otherTaxable:'',
  nonTaxable:'',
  businessIncomeLastYear:'',
  businessIncomeYearBefore:'',
  creditCardRepayments:'',
  servicingRate:'',
  negativeGearingRate:'',
  existingLoanRepaymentMultiplier:'',
  na1:'',
  na2:'',
  magicNumber:''

} // Value is empty by default
   
      this.ddHandleClick = this.ddHandleClick.bind(this)
      
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
    ddHandleClick = (e: any, titleProps: any) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }
    componentWillReceiveProps() {
  
      }
     componentDidMount()
     {


     }
      componentDidUpdate() {

        //  var solicitordetails = [];
          var that =  this;
        
       
        //  var getTime = new Date();
          if (that.props.newactions.component === 'mbparametars') {
          if (m !== that.props.newactions.id) {
            if (that.props.newactions.actiontype === 'new') {
              const nbody = JSON.stringify({
            
                mbp: {
                baseSalary: this.state.baseSalary,
                bonus: this.state.bonus,
                commission: this.state.commission,
                allowance: this.state.allowance,
                overtimeEssential: this.state.overtimeEssential,
                overtimeNonEssential: this.state.overtimeNonEssential,
                rental: this.state.rental,
                otherTaxable: this.state.otherTaxable,
                nonTaxable: this.state.nonTaxable,
                businessIncomeLastYear: this.state.businessIncomeLastYear,
                businessIncomeYearBefore: this.state.businessIncomeYearBefore,
                expenses : {
creditCardRepayments: this.state.creditCardRepayments,
                  servicingRate: this.state.servicingRate,
                  negativeGearingRate: this.state.negativeGearingRate,
                  existingLoanRepaymentMultiplier: this.state.existingLoanRepaymentMultiplier,
                  na1: this.state.na1,
                  na2: this.state.na2,
                  magicNumber: this.state.magicNumber
                }
              
              }
              });
  
              fetch('addMBP', {  
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


  // ide u map. oko 430

   render() {
   // const { value } = this.state;
   const {
      activeIndex,
 
      baseSalary,
      bonus,
      commission,
      allowance,
      overtimeEssential,
      overtimeNonEssential,
      rental,
      otherTaxable,
      nonTaxable,
      businessIncomeLastYear,
      businessIncomeYearBefore,
      creditCardRepayments,
servicingRate,
negativeGearingRate,
existingLoanRepaymentMultiplier,
na1,
na2,
magicNumber,
    } = this.state

   // const { _updateValue } = this;
   return (
        <div  className="lenders" style={{}}>

        <Accordion>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.ddHandleClick}>
          <Icon name="dropdown" />
          Income
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
      
        <Grid>
        <Grid.Row stretched={true}  >
<Grid.Column width={4}>Base Sallery
</Grid.Column>
<Grid.Column width={4}>Bonus
</Grid.Column>
<Grid.Column width={4}>
Commision
</Grid.Column>
<Grid.Column width={4}>
Allowance
</Grid.Column>
<Grid.Column width={4}>

<Input 
  placeholder="Base Sallery" 
  className="myinputs mbp"
  type="text"
  name="baseSalary"
  value={baseSalary}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="Bonus" 
  className="myinputs mbp"
  type="text"
  name="bonus"
  value={bonus}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="Commision" 
  className="myinputs mbp"
  type="text"
  name="comission"
  value={commission}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column width={4}>
<Input 
  placeholder="Allowance" 
  className="myinputs mbp"
  type="text"
  name="allowance"
  value={allowance}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
</Grid.Row>
<Grid.Row stretched={true} columns={5}  >
<Grid.Column >Overtime Essential
</Grid.Column>
<Grid.Column >
Overtime Non-Essential
</Grid.Column>
<Grid.Column >
Rental
</Grid.Column>
<Grid.Column >
Other Taxable
</Grid.Column>
<Grid.Column >
Non Taxable
</Grid.Column>
<Grid.Column >
<Input 
  placeholder="Overtime Essential" 
  className="myinputs mbp"
  type="text"
  name="overtimeEssential"
  value={overtimeEssential}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column >
<Input 
  placeholder="Overtime Non-Essential" 
  className="myinputs mbp"
  type="text"
  name="overtimeNonEssential"
  value={overtimeNonEssential}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column >
<Input 
  placeholder="Rental" 
  className="myinputs mbp"
  type="text"
  name="rental"
  value={rental}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column >
<Input 
  placeholder="Other Taxable" 
  className="myinputs mbp"
  type="text"
  name="otherTaxable"
  value={otherTaxable}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column >
<Input 
  placeholder="Non Taxable" 
  className="myinputs mbp"
  type="text"
  name="nonTaxable"
  value={nonTaxable}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>

</Grid.Row>

<Grid.Row stretched={true} columns={5}  >
<Grid.Column >
Business Income Last Year
</Grid.Column>
<Grid.Column >
Business Income Year Before
</Grid.Column>
</Grid.Row>

<Grid.Row stretched={true} columns={5}  >
<Grid.Column >
<Input 
  placeholder="Business Income Last Year" 
  className="myinputs mbp"
  type="text"
  name="businessIncomeLastYear"
  value={businessIncomeLastYear}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column >
<Input 
  placeholder="Business Income Year Before" 
  className="myinputs mbp"
  type="text"
  name="businessIncomeYearBefore"
  value={businessIncomeYearBefore}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
</Grid.Row>

</Grid>
</Accordion.Content>
<Accordion.Title active={activeIndex === 1} index={1} onClick={this.ddHandleClick}>
<Icon name="dropdown" />
REPAYMENTS
</Accordion.Title>
<Accordion.Content active={activeIndex === 1}>
<Grid>
<Grid.Row stretched={true} columns={1}  >
<Grid.Column >Credit Card Repayments
</Grid.Column>
<Grid.Column >
<Input 
  placeholder="Credit Card Repayments" 
  className="myinputs mbp"
  type="text"
  name="value11"
  value={creditCardRepayments}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
</Grid.Row>
</Grid>

</Accordion.Content>
<Accordion.Title active={activeIndex === 2} index={2} onClick={this.ddHandleClick}>
<Icon name="dropdown" />
SERVICING
</Accordion.Title>
<Accordion.Content active={activeIndex === 2}>
<Grid>
<Grid.Row stretched={true} columns={5}  >
<Grid.Column >Servicing Rate
</Grid.Column>

<Grid.Column >Negative Gearing Rate
</Grid.Column>
<Grid.Column >Existing Loan Repayment Multiplier
</Grid.Column>
<Grid.Column >N/A
</Grid.Column>
<Grid.Column >N/A
</Grid.Column>
<Grid.Column >
<Input 
  placeholder="Servicing Rate" 
  className="myinputs mbp"
  type="text"
  name="servicingRate"
  value={servicingRate}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 

/>
</Grid.Column>
<Grid.Column >
<Input 
  placeholder="Negative Gearing Rate" 
  className="myinputs mbp"
  type="text"
  name="negativeGearingRate"
  value={negativeGearingRate}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column >
<Input 
  placeholder="Existing Loan Repayment Multiplier" 
  className="myinputs mbp"
  type="text"
  name="existingLoanRepaymentMultiplier"
  value={existingLoanRepaymentMultiplier}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column >
<Input 
  placeholder="N/A" 
  className="myinputs mbp"
  type="text"
  name="na1"
  value={na1}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
<Grid.Column >
<Input 
  placeholder="N/A" 
  className="myinputs mbp"
  type="text"
  name="na2"
  value={na2}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
/>
</Grid.Column>
</Grid.Row>
</Grid>

</Accordion.Content>
<Accordion.Title active={activeIndex === 3} index={3} onClick={this.ddHandleClick}>
<Icon name="dropdown" />
MAGIC
</Accordion.Title>
<Accordion.Content active={activeIndex === 3}>
<Grid>
<Grid.Row stretched={true} columns={1}  >
<Grid.Column >Magic Number
</Grid.Column>
<Grid.Column >
<Input 
  placeholder="Magic Number" 
  className="myinputs mbp"
  type="text"
  name="magicNumber"
  value={magicNumber}
  onChange={( e: any ) => this.handleChange(e.currentTarget)} 
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
