import * as React from 'react'
// import { FormEvent } from 'react';
import Mytest from '../models/mytest'
// import { LendersLMI } from '../models/LendersLMI'
// import Lender  from './Content/Lender'
import { LMI } from './Content/LMI'
import { HEM } from './Content/HEM'

import { getJSONfunction, onlyUnique, Lenders, Product } from '../../src/functions/content'
import LenderDetails  from '../containers/LenderDetails'
import ProductDetails  from '../containers/ProductDetails'
import MBparametars  from '../containers/MBparametars'
var idLender: string;
// import MBparametars from '../containers/MBparametars'
// import HEM  from './Content/HEM'
import { Container, Grid, Button, Menu, Icon, Dropdown, Modal, Input } from 'semantic-ui-react';
import  newaction from '../models/NewActions';
import Refresh from '../models/Refresh';
import { MBP } from '../models/MBP';



// import LMITable from '../containers/LMItable';
/* interface Props {
  handleSubmit: (value: string) => void
} */

class SiOptions {

id: string;
text: string;
value: string;

}
var searchOptions1 = ['Lender', 'Stamp Duty Index', 'Stamp Table', 'General Hem table', 'General SD index' ]
var dontgetLmi=false;
var dontgetHem=false;
interface State {
  // navigation info
  openModal: boolean;
  loginError: boolean;
  windowname: string;
  subject: string;
  numberof: number;
  importFrom: SiOptions[];
  getCountries: string [];
  value: string;
  currentView: string;
  username: string,
  password: string,
  lenders: JSON[];
  products: JSON[];
  lmis: object[];
  hems: object[];
  mbp: object;
 //  getLenders: LenderList[]

}
interface Iprops {
  handleSubmit: (value: string, value2: string) => void
  handleSubmit2: (value: string) => void
  useAction: (value: string, value2: string ) => void
  mytests: Mytest [];
  newactions: newaction;
  refreshScreen: Refresh;
  

}

export default class Content extends React.Component<Iprops, State> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
      mbp: [],
      username:'',
      password: '',
      openModal: true,
      loginError: false,
     importFrom: [],
     getCountries: [],
      windowname: '',
      numberof: 0,
      value: '', 
      currentView: 'Lenders', 
      subject: 'lender',
      lenders: [], 
      products: [], 
      lmis: [], 
      hems: []  } 
    this._updateValue = this._updateValue.bind(this)
 
    this.createNewLender = this.createNewLender.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.getLmis = this.getLmis.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.addNew = this.addNew.bind(this);
    this.goBack = this.goBack.bind(this);
    this.editLender = this.editLender.bind(this);
    this.deleteLender = this.deleteLender.bind(this);
    this.mbTable = this.mbTable.bind(this);
    this.hemTable = this.hemTable.bind(this);
    this.lmiTable = this.lmiTable.bind(this);
    this.sdIndex = this.sdIndex.bind(this);
    this.importTable = this.importTable.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.Duplicate = this.Duplicate.bind(this);
    this.Activate = this.Activate.bind(this);
    this.UploadLogo = this.UploadLogo.bind(this);
    this.UploadSC = this.UploadSC.bind(this);
    this.searchOptions1 = this.searchOptions1.bind(this);
  }
  closeModal() {
this.setState({
openModal: false

});
return false;
}
// menu
RemoveObject (r: HTMLObjectElement) {
 
  r.parentElement.parentElement.remove();
 }
searchOptions1(a: string) {
  alert(a);
  
    }
  searchCountry(a: string) {
alert(a);

  }

  // lender
   Duplicate (a: string) {
    alert(a);
    return a;
    }
  Activate(a: string) {
    alert(a);
    return a;
    }
  UploadLogo(a: string) {
    alert(a);
    return a;
    }
  UploadSC(a: string) {
    alert(a);
    return a;
    }
  editLender(a: string) {
    this.props.handleSubmit2(a);
    this.props.handleSubmit('new', 'Create Lender');
    this.setState({ currentView : 'EditLender', windowname : 'Insert Lender Information' });
    
    return a;
    }
  mbTable(a: string) {
    this.setState({ currentView : 'mbTable' , subject: 'mbTable'  });
    alert(a);
    return a;
    }
  
  hemTable (a: string) {
    this.setState({ currentView : 'Hems', subject: 'Hems'  });
    alert(a);
    return a;
  }
  lmiTable (a: string) {
    idLender = a;
    this.props.handleSubmit2(idLender);
    this.props.handleSubmit('new', 'Lmi');
    this.setState({ currentView : 'Lmis', subject: 'Lmis'  });
    this.getLmis(idLender);
    return a;
  }
  sdIndex (a: string) {
    this.setState({ currentView : 'sdIndex', subject: 'sdIndex'  });
    alert(a);
    return a;
  }
 
  // lmi actions
  
  addLmi() {
    alert('add');
    return 'test';
  
  }
  editLmi(a: string) {
    var getid= a; alert(getid);
    this.props.handleSubmit2(getid);
    return a;
  
  }
  saveLmi() {
    alert('save');
    return 'save';
  
  }
  deleteLmi(a: string) {
    alert('delete');
    return a;
  
  }
  // hem action
  addHem() {
    alert('add');
    return 'hem';
  
  }
  saveHem() {
    alert('save');
    return 'save';
  
  }
  editHem(a: string) {
    alert(a);
    return a;
  
  }
  deleteHem(a: string) {
    alert(a);
    return a;
  
  }
  importTable(a: string) {
    alert(a);
    return a;
  }

    componentDidMount() {

    // this.getLmis("557c89c4-81dc-4517-8a49-68ce0f175ca6"); 
    this.getLenders(); 

  }
  // ovo radi ovde akcije
  componentWillReceiveProps(newProps: Iprops) {
    var refreshState=newProps.refreshScreen;
    var currentScreen=this.state.currentView;
    if (refreshState.refresh=== true){
    
    if (currentScreen === 'Lenders') {

      this.getLenders();
    }
    if (currentScreen === 'Lmis') {

      this.getLmis(idLender);
    }
    if (currentScreen === 'Products') {

// this.getProducts(idLender);

    }
   

  
    }
  }
  
  
  getUser(theUsername: string, thePassword: string) {
    var that = this;
  
  
    getJSONfunction('/getUser?username='+theUsername+'&password='+thePassword , function(err: any, data: JSON) {
      if (err !== null) {
     
        that.setState({ loginError: true })
      } else {
        var jsonT= JSON.stringify(data);
       
        if (jsonT.trim().length >20 ) {
 
  
          that.setState({ openModal:false, loginError: false })
    
    
   
  }
  else { that.setState({ loginError: true })}

}
   
    });
   
 
    return 'test'; 
  }
  getLenders() {
  
    var that = this;
    that.setState(
      { 
   lenders: [], importFrom: []
      });
   
    getJSONfunction('/getLenders', function(err: any, data: JSON[]) {
    
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
        if (data !== null) {
    
     that.setState(

  { 
   lenders: data });
    var importFroma: SiOptions[];
    importFroma = [];
    var getCountriesa: string[] = [];
    for ( let item2 of data) {
    var importItem = new SiOptions();
    importItem.id = item2['id'];
    importItem.text = item2['information']['name'];
    importItem.value = item2['id'];
    importFroma.push(importItem);
    getCountriesa.push(item2['information']['country']);
   
    };
    var unique = getCountriesa.filter( onlyUnique ); 
    that.setState(

      { 
       importFrom: importFroma, getCountries: unique });
  } else {alert('its null')}
  } 
   
    });
   
    this.setState({ currentView : 'Lenders', windowname : 'Lenders',
      });
  
    return 'test'; 
}

  
getProducts(theId: string, theName: string) {
  idLender = theId;
  var that = this;
  that.setState(
    { 
 products: []
    });
  var countem = 0;
  getJSONfunction('/getProducts?id=' + theId, function(err: any, data: JSON[]) {
  
    if (err !== null) {
      alert('Something went wrong: ' + err);
    } else {
      if (data != null) {
   countem = data.length;
  
   that.setState(

{ 
 products: data })
 
} }
 
  });
 
  this.setState({ currentView : 'Products', windowname : theName + ':Products',
    subject: 'Product', numberof: countem });

  return 'test'; 
}



deleteLender(a: string) {alert('this'); return a; }
deleteProduct(a: string) {alert('this'); return a; }
  _updateValue(currentView: string) {
    this.setState({ currentView  });
  }

  goBack() {
   
    this.props.handleSubmit('new', 'No Action');
    this.setState({ value: '', currentView : 'Lenders',
    windowname : 'Lenders', });
    var t2 = document.getElementById('actions');
    t2.style.display = 'block';
    this.setState({ currentView : 'Lenders'  });
  
  }
  createNewLender() {
   
    this.props.handleSubmit('new', 'Create Lender');
    this.setState({ value: '' })
    this.setState({ currentView : 'EditLender'  });
  
  }
  newProduct() {
    this.setState({ currentView : 'EditProduct', windowname: 'Product Information'});
    this.props.handleSubmit('new', 'Create Product');
   
  }


addNew() {
  
  var currView = this.state.currentView;

  // tslint:disable-next-line:switch-default
  switch (currView) {
   
 case  'Products' : 
  this.props.handleSubmit('new', 'Create Product');

  this.setState({ currentView : 'EditProduct', windowname : 'Insert Product Information' });
  this.hideCreate();
  
  break ;
  case  'Lenders' : 
  this.props.handleSubmit('new', 'Create Lender');
  this.setState({ currentView : 'EditLender', windowname : 'Insert Lender Information' });
  this.hideCreate();
  break ;
 
  case  'MBParametars' : 
  this.props.handleSubmit('new', 'Edit MB');
  this.setState({ currentView : 'EditMB', windowname : 'Insert MB Parametars' });
  this.hideCreate();
  break ;
  case  'SDIndex' : 
  this.props.handleSubmit('new', 'Edit SD index');
  this.setState({ currentView : 'EditSD', windowname : 'Insert SD Index Information' });
  this.hideCreate();
  break ;
  case  'Lmis' : 

  
    this.props.useAction('new', 'Lmi Added');
    this.addLmis();
  break ;
  case  'Hems' : 
  this.props.handleSubmit('new', 'Hem Added');
 // this.setState({ currentView : 'EditHem', windowname : 'Insert Hem Information' });
 this.addHems();
  break ;
}};
hideCreate() {
  var getb = document.getElementById('actions');
  getb.style.display = 'none';
}
editProduct () {

  this.setState(

    { 
     currentView: 'EditProduct'})

}
addLmis() {
  dontgetLmi= false;
  var lmidata = [];
lmidata = this.state.lmis;
var emptyLmi: Object;
 emptyLmi = {
lower: '',
upper:  '',
fhog:  '',
propertyType:  '',
minimumLmi:  '',
investementIndex:  '',
lmirequiredOver:  '',
d60:  '',
d61:  '',
d62:  '',
d63:  '',
d64:  '',
d65:  '',
d66:  '',
d67:  '',
d68:  '',
d69:  '',
d70:  '',
d71:  '',
d72:  '',
d73:  '',
d74:  '',
d75:  '',
d76:  '',
d77:  '',
d78:  '',
d79:  '',
d80:  '',
d81:  '',
d82:  '',
d83:  '',
d84:  '',
d85:  '',
d86:  '',
d87:  '',
d88:  '',
d89:  '',
d90:  '',
d91:  '',
d92:  '',
d93:  '',
d94:  '',
d95:  ''};
lmidata.push(emptyLmi)
this.setState({lmis: lmidata });
}
getLmis(theId: string) {
  if (dontgetLmi!==true) {
  idLender = theId;
  alert(idLender);
var that = this;
  this.setState(

    { 
     lmis: [] })
     
  var countem = 0;
 
  
  getJSONfunction('/getLmis?id=' + theId, function(err: any, data: object) {



    if (err !== null) {
      alert('Something went wrong: ' + err);
    } else {

   
   if (data !== null) {

    var inObject= data[0].lmis as object[];
    if (inObject.length!==0) {
   
   that.setState(

{ 
 lmis: inObject });
}
} 
}
} );

  this.setState({ currentView : 'Lmis',  subject: 'Lmis', numberof: countem });

  return 'test2'; }else {dontgetLmi=false;return null;}
}
//getMB

getMB(theId: string) {
 
  idLender = theId;
  alert(idLender);
var that = this;
  this.setState(

    { 
     mbp: {} })
     
  var countem = 0;
 
  
  getJSONfunction('/getMBP?id=' + theId, function(err: any, data: object) {



    if (err !== null) {
      alert('Something went wrong: ' + err);
    } else {

   
   if (data !== null) {

    var inObject= data[0].mbp as MBP;
    var getObject= JSON.stringify(inObject,null, 2);
    if (getObject.length!>10) {
   
   that.setState(

{ 
 mbp: inObject });}
 else {
var mbpM = new MBP('','','','','','','','','','','');
that.setState(

  { 
   mbp: mbpM });}

 

} 
}
} );

  this.setState({ currentView : 'Lmis',  subject: 'Lmis', numberof: countem });

  return 'test2'; 
}


//getMB

addHems() {
  dontgetHem= false;
  var hemdata = [];
hemdata = this.state.hems;
var emptyHem: Object;
 emptyHem = {
  lower:'',
  upper:'',
   adults:'',
    additionaladultcouple:'', 
 single1:'', 
   single2:'', 
   single3:'', 
   single31:'',
   couple1:'',
   couple2:'', 
   couple3:'',
   couple31:'', };
hemdata.push(emptyHem)
this.setState({hems: hemdata });
}
getHems(theId: string)  {
  if (dontgetHem!==true) {
  idLender = theId;
  
var that = this;
  this.setState(

    { 
     lmis: [] })
     
  var countem = 0;
 
  
  getJSONfunction('/getHems?id=' + theId, function(err: any, data: object) {



    if (err !== null) {
      alert('Something went wrong: ' + err);
    } else {

   
   if (data !== null) {

    var inObject= data[0].lmis as object[];
    if (inObject.length!==0) {
   
   that.setState(

{ 
 hems: inObject });
}
} 
}
} );

  this.setState({ currentView : 'Hems',  subject: 'Hems', numberof: countem });

  return 'test2'; }else {dontgetLmi=false;return null;}
}
// ***********
// faux router
// ***********
handleChange(e: HTMLInputElement) {
  
  let change = {}
 
  change[e.name] = e.value
 
  this.setState(change)

}
  chooseView () {
  
   var currView: string;
   currView = this.state.currentView;
   // tslint:disable-next-line:switch-default
   switch  (currView) {
   case  'No Lenders': 
   
return (
   
  <Grid centered={true} >
  <Grid.Row  stretched={true} style={{marginTop: '40px'}}>
  <Grid.Column width={6} style={{textAlign: 'center'}}>
<h1 >Welcome to LP</h1>
 <p>There are no Lenders Created Yet. Would You like to Create a New Lender?</p><br/>
<Button onClick={this.createNewLender}>Create New Lender</Button>
  </Grid.Column>
  </Grid.Row>
  </Grid>
)

case  'EditLender': 
return (
 <LenderDetails/>
  )
  case  'EditProduct': 
  
  this.props.handleSubmit2(idLender);
  return (
 <ProductDetails/>
  )
  case  'EditMB': 

  return (
 <MBparametars/>
  )
case  'Products': 
  var arrayProducts = this.state.products;
  var countProducts = arrayProducts.length;
  if (countProducts > 0) {
  return (
    arrayProducts.map((item: any, i: any) => 
    // tslint:disable-next-line:no-string-literal
 // tslint:disable-next-line:jsx-wrap-multiline
 <Grid key={i} style={{width: '100%', marginLeft: '0'}} >    
 {Product  ( item['id'], item['name'],
         // tslint:disable-next-line:no-string-literal
             item['initialRate'], item['revertRate'], item['comparisonRate'], item['upfrontFee'],
         // tslint:disable-next-line:no-string-literal
             item['upfrontFee'], item['upfrontFee'],
        // tslint:disable-next-line:no-string-literal
           true, false, false, this.deleteProduct, this.deleteProduct, this.deleteProduct)}
    </Grid>) )

} else {
   return ( 
     <div>
 <h1 >There Are No Products For this Lender</h1>

<Button onClick={this.editProduct}>Create New Product</Button>
</div>
)
  }

    case 'Lenders': 
   
    var arrayLenders2 = this.state.lenders;
   
    return (
   
        arrayLenders2.map((item2: any, i: any) => 
       // tslint:disable-next-line:no-string-literal
        // tslint:disable-next-line:jsx-wrap-multiline
        <Grid key={i} style={{width: '100%', marginLeft: '0'}} > 
        {Lenders(item2['id'], item2['information']['name'],
           // tslint:disable-next-line:no-string-literal
        item2['timeStamp'], item2['information']['country'] + ' ' + 
         // tslint:disable-next-line:no-string-literal
         item2['information']['type'], 
          // tslint:disable-next-line:no-string-literal
         item2['information']['livingExpenses'], 
         this.state.lenders, this.getProducts, 
         this.editLender, this.mbTable,
         this.hemTable, this.lmiTable, this.sdIndex , 
         this.deleteLender, this.Duplicate, this.Activate, this.UploadLogo, this.UploadSC)}</Grid>)
      
    )
  
    case 'Hems': 
    var arrayHems: object[];

    arrayHems = this.state.hems;
     var countHems = arrayHems.length;
     if (typeof countHems !== 'undefined') {
     return(
       arrayHems.map((item2: object, i: any) => 
       // tslint:disable-next-line:no-string-literal
        // tslint:disable-next-line:jsx-wrap-multiline
        <Grid key={i} style={{width: '100%', marginLeft: '0'}} > 
      
       <HEM  
            nuLender={idLender}
            lower={item2['lower']}
            upper={item2['upper']}
            adults={item2['adults']}
            additionaladultcouple={item2['additionaladultcouple']}
            single1={item2['single1']}
            single2={item2['single2']}
            single3={item2['single3']}
            single31={item2['single31']}
            couple1={item2['couple1']}
            couple2={item2['couple2']}
            couple3={item2['couple3']}
            couple31={item2['couple31']}
          
       
       /> </Grid> )
       
     )}
    break;
    case 'Lmis': 
    var arrayLmis: object[];

   arrayLmis = this.state.lmis;
    var countLmis = arrayLmis.length;
    if (typeof countLmis !== 'undefined') {
    return(
      arrayLmis.map((item2: object, i: any) => 
      // tslint:disable-next-line:no-string-literal
       // tslint:disable-next-line:jsx-wrap-multiline
       <Grid key={i} style={{width: '100%', marginLeft: '0'}} > 
     
      <LMI  
            nuLender={idLender}
            lower={item2['lower']}
            upper={item2['upper']} 
            fhog={item2['fhog']} 
            propertyType={item2['propertyType']} 
            minimumLmi={item2['minimumLmi']} 
            investementIndex={item2['investementIndex']} 
            lmirequiredOver={item2['lmirequiredOver']} 
            d60={item2['d60']} 
            d61={item2['d61']} 
            d62={item2['d62']} 
            d63={item2['d63']} 
            d64={item2['d64']} 
            d65={item2['d65']} 
            d66={item2['d66']} 
            d67={item2['d67']} 
            d68={item2['d68']} 
            d69={item2['d69']} 
            d70={item2['d70']} 
            d71={item2['d71']} 
            d72={item2['d72']} 
            d73={item2['d73']} 
            d74={item2['d74']} 
            d75={item2['d75']} 
            d76={item2['d76']} 
            d77={item2['d77']} 
            d78={item2['d78']} 
            d79={item2['d79']} 
            d80={item2['d80']} 
            d81={item2['d81']} 
            d82={item2['d82']} 
            d83={item2['d83']} 
            d84={item2['d84']} 
            d85={item2['d85']} 
            d86={item2['d86']} 
            d87={item2['d87']} 
            d88={item2['d88']} 
            d89={item2['d89']} 
            d90={item2['d90']} 
            d91={item2['d91']} 
            d92={item2['d92']} 
            d93={item2['d93']} 
            d94={item2['d94']}
            d95={item2['d95']}
      
      /> </Grid> )
      
    )}
  
  
    case 'editLmis': 
    var arrayLmis2 = this.state.lmis;
    var countLmis2 = arrayLmis2.length;
    for ( var lm = 0; lm < countLmis2; lm++) {
    
    return (
  
    <Grid style={{width: '100%', marginLeft: '0'}} > 
   test
    </Grid>) 
    
    }
    
    if (countLmis === 0) {
    return ( 
    <div>
    <h1 >There Are No Lmi Tables For this Lender</h1>
    
    <Button onClick={this.addLmi}>Create New Lmi</Button>
    </div>
    )
    }
    break;
    }
    
    return null; 
  }
render() {
   const { windowname, numberof, subject, importFrom, getCountries, openModal, loginError} = this.state ;
   const { goBack} = this
   const { username, password} = this.state
   
   /* const { mytests } = this.props
    const { _updateValue, _handleSubmit } = this */
   return (
      <div className="contentx" >
      <Container 
        textAlign="justified" 
        style={{ width : '80%', borderLeft: '2px solid gray', borderRight: '2px solid gray', minHeight: '85vh' }}
      >
      <Menu 
      
        style={{ 
       height: '50px',  }} 
      >
      <Menu.Item
        name="angle left"
      >
      
      <p>{windowname}<br/>
      Number of results: {numberof}</p>
     
      </Menu.Item>
      <Menu.Item
        name="angle left" 
      >
   
      <Button id="actions" onClick={() => this.addNew()} hidden={true}>Add New {subject}</Button>
      </Menu.Item>
      <Menu.Item>
      <Dropdown  item={true} text="Sort by Country" >
       
      <Dropdown.Menu >
        {
   getCountries.map((item: string, index: any ) => 
 
 <Dropdown.Item  key={index} onClick={() => this.searchCountry(item)}  ><p style={{ color: 'black'}}>{item}</p></Dropdown.Item>)}
          
        </Dropdown.Menu>
        </Dropdown>
        </Menu.Item>
      <Menu.Item 
        position="right"
      >
    
    <Dropdown  item={true} text="Import Table" >
        <Dropdown.Menu >
        {
   importFrom.map((item: SiOptions, index: any ) => 
 
 <Dropdown.Item  key={index} onClick={() => this.importTable(item.id)}  ><p style={{ color: 'black'}}>{item.text}</p></Dropdown.Item>)}
          
        </Dropdown.Menu>
      </Dropdown>
   
      </Menu.Item>
      <Menu.Item 
        position="right"
      >
    
    <Dropdown  item={true} text="Select Criteria" >
       
        <Dropdown.Menu >
        {
   searchOptions1.map((item: string, index: any ) => 
 
 <Dropdown.Item  key={index} onClick={() => this.searchOptions1(item)}  ><p style={{ color: 'black'}}>{item}</p></Dropdown.Item>)}
         </Dropdown.Menu>
      </Dropdown>
   
      </Menu.Item>
      <Menu.Item 
        position="right"
      >
    
    <Button icon={true} onClick={goBack} labelPosition="right">
    Back
    <Icon 
      name="arrow left" 
    />
  </Button>
   
      </Menu.Item>
      </Menu>
     
      {this.chooseView()}
     
      </Container>
      
      <Modal 
          size="small"
          open={openModal}

      >
          <Modal.Header >Please Login to proceed</Modal.Header>
         
          <Modal.Content>
          <br/><br/>
          <p>Please Login</p>
          <br/><br/>

           <p>Username</p><br/>
            <Input type="text" placeholder="username" name="username" onChange={( e: any ) => this.handleChange(e.currentTarget)} error={loginError} value={username} /><br/><br/>
            <p>Password</p><br/>
            <Input type="text" placeholder="password" name="password" onChange={( e: any ) => this.handleChange(e.currentTarget)} error={loginError} value={password}  /><br/>
          </Modal.Content>
     
          <Modal.Actions>
            <Button style={{display: 'none'}} onClick={this.closeModal} negative={true}>
              No
            </Button>
            <Button
              onClick={()=> this.getUser(username, password)}
              positive={true}
              labelPosition="right"
              icon="checkmark"
              content="Login"
            />
          </Modal.Actions>
        
      </Modal>
 </div>
    )
  }
}

    