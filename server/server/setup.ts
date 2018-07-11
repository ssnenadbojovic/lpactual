import * as path from 'path';
import * as express from 'express';
import * as http from 'http';
import * as chalk from 'chalk';
import * as bodyParser from 'body-parser'
import * as rdb from 'rethinkdbdash'
import * as cookieparser from 'cookie-parser'
import { EFLenders } from '../../lpClient/src/models/EFLenders'
import { LendersLMI} from '../../lpClient/src/models/LendersLMI'
import { isNullOrUndefined } from 'util';
var r= rdb( );

const isProd = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3001;

module.exports = function (options) {
  const app = express();
  app.use('/', express.static('../lpClient/build'));
  app.use(bodyParser.json());
  app.use(cookieparser("53453553"));
//***************************************
//login
//***************************************
  app.get('/readc', (req, res) => {
   var z=   req.cookies;
   res.setHeader('Content-Type', 'application/json');
   res.send(z);
      });




  app.get('/getUser', (req, res) => {
    
    p.then(function(conn) {
      r.table('users').filter({
        user: req.query.username,
        password: req.query.password
      
      
      }).run(conn, function(err, data) {
        if (err) {throw err; }
        else
    {
     
    console.log(JSON.stringify(data, null, 2));
    var getText=JSON.stringify(data);
    if (getText.length>8) {
    var p = getText.substring(1,getText.indexOf("]"));
    console.log(p);
    var p2= JSON.parse(p);
    res.clearCookie('id');
    res.cookie("id",p2['id']); 
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(p, null, 2)); }
    else {

var p="{data: 'nodata'}"
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(p, null, 2)); }
    
    }
    });
    });
    
  
  });
  var efLender = new EFLenders();
  efLender.email="car@gmail.com";
  app.get('/Login', (req, res) => {
    p.then(function(conn) {
      r.table('Users').filter({
        username: req.body.username,
        password: req.body.password,
      
      
      }).run(conn, function(err, test) {
        if (err) {throw err; }
        
    
       
            console.log(JSON.stringify(test, null, 2));
           
        //    res.setHeader('Content-Type', 'application/json');
          //  res.send(test);
    });
    
    });
    res.cookie("login", "id");
  
  });
  app.get('/testc', (req, res) => {
   
    res.cookie("login", "id");
  res.end("ok");
  });
  //***************************************
//login
//***************************************
  /* app.use("/_assets", express.static(path.join(__dirname, "..", "build", "public"), {
    maxAge: "200d" 
  }));  */
  app.use("/", express.static(path.join(__dirname, "..", "public"), {
  }));
  var getres: any;
  var p = r.connect({host: 'localhost', port: 28015, db : 'lpDB' });
  // r.table("users").count()
  
  app.post('/CreateDB', (req: express.Request, res: any) => { 
    p.then(function(conn) {
    r.dbCreate('lpDB').run(conn, function(err,data){



    });
  });
  });
//*************************************************************
//Update
//*************************************************************
app.get('/UpdateActive', (req: express.Request, res: any) => {

  p.then(function(conn) {

r.table("Lenders").filter({
 id: req.body.id 

}).update({ 
active: req.body.active


}) }) });
app.get('/UpdateLender', (req: express.Request, res: any) => {

  p.then(function(conn) {

r.table("Lenders").filter({
 id: req.body.id
}).update({ 
 
  information:{
    logo:req.body.information.logo, 
   name:req.body.information.name,
   country:req.body.information.country,
   type:req.body.information.type,
   shorthand:req.body.information.shorthand,
   livingExpenses:req.body.information.livingExpenses,
   turnaround:req.body.information.turnaround,
   digitalPlatform:req.body.information.digitalPlatform,
   phone:req.body.information.phone,
   fax:req.body.information.fax,
   email:req.body.information.email,
   url:req.body.information.url,
   notes:req.body.information.notes,
  } ,
   applyOnlineDetails:{
   brokerIdPrimaryTitle:req.body.applyOnlineDetails.brokerIdPrimaryTitle,
   brokerIdPrimaryPattern:req.body.applyOnlineDetails.brokerIdPrimaryPattern,
   brokerIdSecondaryRequired:req.body.applyOnlineDetails.brokerIdSecondaryRequired,
   brokerIdSecondaryTitle:req.body.applyOnlineDetails.brokerIdSecondaryTitle,
   brokerIdSecondaryPattern:req.body.applyOnlineDetails.brokerIdSecondaryPattern,
   additionalInformationRequired:req.body.applyOnlineDetails.additionalInformationRequired,
   additionalInformationTitle:req.body.applyOnlineDetails.additionalInformationTitle,
   },
    solicitorDetails: {
   name:req.body.solicitorDetails.name,
   phone:req.body.solicitorDetails.phone,
   fax:req.body.solicitorDetails.fax,
   email:req.body.solicitorDetails.email,
   url:req.body.solicitorDetails.url,
   notes:req.body.solicitorDetails.notes,
  
 },
 //dodao si active
   active: req.body.active,	
   timeStamp: req.body.timeStamp,	
   contactDetails: req.body.contactDetails 


});
});
});
app.get('/UpdateProduct', (req: express.Request, res: any) => {

  p.then(function(conn) {

r.table("Products").filter({
 id: req.body.id
}).update({ 
 
  eLodgeId: req.body.eLodgeId,
  nextGenId: req.body.nextGenId,
  simpologyId: req.body.simpologyId,
  name: req.body.name,
  impaired: req.body.impaired,
  whiteLabel: req.body.whiteLabel,
  proPack: req.body.proPack,
  upfrontFee: req.body.upfrontFee,
  initialRate: req.body.initialRate,
  revertRate: req.body.revertRate,
  comparisonRate: req.body.comparisonRate,
  propertyUse: req.body.propertyUse,
  lineOfCredit: req.body.lineOfCredit,
  loanType: req.body.loanType,
  construction: req.body.construction,
  repaymentType: req.body.repaymentType,
  interestOnlyMaxPeriod: req.body.interestOnlyMaxPeriod,
  lmiCapitalization: req.body.lmiCapitalization,
  lmiRequiredOver: req.body.lmiRequiredOver,
  smsf: req.body.smsf,
  rateType: req.body.rateType,
  fixedTerm: req.body.fixedTerm,
  minLvr: req.body.minLvr,
  maxLvr: req.body.maxLvr,
  minLoan: req.body.minLoan,
  maxLoan: req.body.maxLoan,
  maxTerm: req.body.maxTerm,
  redrawFacility: req.body.redrawFacility,
  additionalRepayments: req.body.additionalRepayments,
  offset: req.body.offset,
  abilityToSplitLoan: req.body.abilityToSplitLoan,
  application: req.body.application,
  valuation: req.body.valuation,
  legal: req.body.legal,
  settlement: req.body.settlement,
  packageMonthly: req.body.packageMonthly,
  packageAnnual: req.body.packageAnnual,
  rateLock: req.body.rateLock,
  other: req.body.other,
  notes: req.body.notes,
  hasRewards: req.body.hasRewards,
  description: req.body.description,
  points: req.body.points,
  timeStamp: req.body.getTime,


});
});
});


app.get('/UpdateLmi', (req: express.Request, res: any) => {

  p.then(function(conn) {

r.table("Lmis").filter({
 id: req.body.id
}).update({ 
 
  lower:req.body.lower,
  upper:req.body.upper,
  fhog:req.body.fhog,
  propertyType:req.body.propertyType,
  minimumLmi:req.body.minimumLmi,
  investementIndex:req.body.investementIndex,
  lmiRequiredOver:req.body.lmiRequiredOver,
  d60:req.body.d60,
  d61:req.body.d61,
  d62:req.body.d62,
  d63:req.body.d63,
  d64:req.body.d64,
  d65:req.body.d65,
  d66:req.body.d66,
  d67:req.body.d67,
  d68:req.body.d68,
  d69:req.body.d69,
  d70:req.body.d70,
  d71:req.body.d71,
  d72:req.body.d72,
  d73:req.body.d73,
  d74:req.body.d74,
  d75:req.body.d75,
  d76:req.body.d76,
  d77:req.body.d77,
  d78:req.body.d78,
  d79:req.body.d79,
  d80:req.body.d80,
  d81:req.body.d81,
  d82:req.body.d82,
  d83:req.body.d83,
  d84:req.body.d84,
  d85:req.body.d85,
  d86:req.body.d86,
  d87:req.body.d87,
  d88:req.body.d88,
  d89:req.body.d89,
  d90:req.body.d90,
  d91:req.body.d91,
  d92:req.body.d92,
  d93:req.body.d93,
  d94:req.body.d94,
  d95:req.body.d95,


});
});
});
app.get('/UpdateHem', (req: express.Request, res: any) => {

  p.then(function(conn) {

r.table("Hems").filter({
 id: req.body.id
}).update({ 
 
  lenderId:req.body.lenderId,
  lower:req.body.lower,
upper:req.body.upper,
adults:req.body.adults,
additionalAdultCouple:req.body.additionalAdultCouple,
single1:req.body.single1,
single2:req.body.single2,
single3:req.body.single3,
single31:req.body.single31,
couple1:req.body.couple1,
couple2:req.body.couple2,
couple3:req.body.couple3,
couple31:req.body.couple31,


});
});
});
//*************************************************************
//Update
//*************************************************************
//*************************************************************
//Get
//*************************************************************
app.get('/getProducts', (req, res) => {
   
  var id=req.query.id;
   p.then(function(conn) {
    r.table('Products').filter({
      "lenderId": id
  }).run(conn, function(err, test) {
      if (err) {throw err; }
      
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(test, null, 2)); 
         
     
  });
  });
  });
 
  app.get('/getLmis', (req, res) => {
   
   console.log(req.query.id);
     p.then(function(conn) {
       //  ovde treba get. zbog plucka je stavljen filter
      r.table('Lenders').getAll(
      req.query.id  ).pluck('lmis').run(conn, function(err, data) {

        if (err) {throw err; }
        
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(data, null, 2)); 
           
       
    });
    });
    });


  app.get('/getHems', (req, res) => {
   

     p.then(function(conn) {
      r.table('Hems').filter({
        "lenderId": req.query.id
    }).run(conn, function(err, test) {
        if (err) {throw err; }
        
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(test, null, 2)); 
           
       
    });
    });
    });
    app.get('/getMBP', (req, res) => {
   
     
     console.log(req.query.id);
       p.then(function(conn) {
         //  ovde treba get. zbog plucka je stavljen filter
        r.table('Lenders').getAll(
        req.query.id  ).pluck('mbp').run(conn, function(err, data) {
  
          if (err) {throw err; }
          
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(data, null, 2)); 
             
         
      });
      });
      });
  
  app.get('/getLenders', (req, res) => {
      
    try {
  
       p.then(function(conn) {
           r.table('Lenders').run(conn, function(err, test) {
             if (err) {throw err; }
             
         
            
                 console.log(JSON.stringify(test, null, 2));
                
                 res.setHeader('Content-Type', 'application/json');
                 res.send(test);
         });
         
         });
       
       
     } catch (err)
     {
       res.setHeader('Content-Type', 'application/html');
       var empty : JSON;
       res.send(empty);
 
     }
       });
       app.get('/getLender', (req, res) => {
      console.log(req.query.id);
        try {
      
           p.then(function(conn) {
               r.table('Lenders').getAll(req.query.id).run(conn, function(err, data) {
                 if (err) {throw err; }
                console.log(JSON.stringify(data, null, 2));
                    
                     res.setHeader('Content-Type', 'application/json');
                     res.send(data);
             });
             
             });
           
           
         } catch (err)
         {
           res.setHeader('Content-Type', 'application/html');
           var empty : JSON;
           res.send(empty);
     
         }
           });
//*************************************************************
//Get
//*************************************************************
//*************************************************************
//Delete
//*************************************************************
app.get('/deleteLenders', (req, res) => {
      
  try {


      p.then(function(conn) {

        r.table("Lenders").filter({
          id: req.body.LenderId
        
        
        }).delete();
       
       })
     
       res.setHeader('Content-Type', 'application/html');
       var empty : JSON;
       res.send("deleted");
   } catch(err)
   {
     res.setHeader('Content-Type', 'application/html');
     var empty : JSON;
     res.send(empty);

   }
     });
// r.table("comments").filter({"id_post": 3}).delete()
//*************************************************************
//Delete
//*************************************************************


//Copy
//Copy
//*************************************************************
//Add
//*************************************************************
app.post('/AddLmi', (req: express.Request, res: any) => {

  p.then(function(conn) {
    r.table("Lenders").get(req.body.lenderId).update({

      lmis: req.body.Lmis
     
      
  }).run(conn, function(err, test) {
    if (err) {console.log(err) }else {console.log("ok")}
  
  
         
    });
    });
    console.log('lmi');
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(getres, null, 2));
  });
  app.post('/AddHem', (req: express.Request, res: any) => {

    p.then(function(conn) {
      r.table("Lenders").get(req.body.lenderId).update({
  
        hems: req.body.Lmis
       
        
    }).run(conn, function(err, test) {
      if (err) {console.log(err) }else {console.log("ok")}
    
    
           
      });
      });
      console.log('lmi');
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(getres, null, 2));
    });
//Add
  app.post('/AddProduct', (req: express.Request, res: any) => {

     p.then(function(conn) {
       r.table("Products").insert( req.body
       
         
     ).run(conn, function(err, test) {
       if (err) {console.log(err) }
     
     
            
       });
       });
       res.setHeader('Content-Type', 'application/json');
       res.send(JSON.stringify(getres, null, 2));
       });
      
  app.post('/AddLender', (req: express.Request, res: any) => {
  
    p.then(function(conn) {
      r.table("Lenders").insert(req.body
      
    ).run(conn, function(err, test) {
      if (err) {console.log(err) }else {console.log("ok")}
    
    
           
      });
      });
 
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(getres, null, 2));
    });

   
    app.get('/startcheck', (req, res) => {
   
 alert(efLender.email);
      p.then(function(conn) {
          r.table('Lenders').count().run(conn, function(err, test) {
            if (err) {throw err; }
            
        
                getres  =  test;
           
                console.log(JSON.stringify(getres, null, 2));
               
           
        });
        
        });
      
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(getres, null, 2));
      });

      
      app.get('/AddMBP', (req: express.Request, res: any) => {

         p.then(function(conn) {

      r.table("Lenders").filter({
        id: req.body.LenderId
      
      
      }).update({
        mbp:{baseSalary: req.body.baseSalary,
        bonus: req.body.bonus,
        commission: req.body.commission,
        allowance: req.body.allowance,
        overtimeEssential: req.body.overtimeEssential,
        overtimeNonEssential: req.body.overtimeNonEssential,
        rental: req.body.rental,
        otherTaxable: req.body.otherTaxable,
        nonTaxable: req.body.nonTaxable,
        businessIncomeLastYear: req.body.businessIncomeLastYear,
        businessIncomeYearBefore: req.body.businessIncomeYearBefore
        }
      
      }).run(conn,function(err, test) {
        if (err) {console.log(err) }
      
      
             
        });
         }); });

//*************************************************************
//Add
//*************************************************************
  /*
  app.get("/*", function(req, res) {
    app.render(
      req.path,
      function(err, html) {
        if(err) {
          res.statusCode = 500;
          res.type("text; charset=utf8");
          res.end(err.message);
          return;
        }
     
        res.type("text/html; charset=utf8");
        res.end(html);
      }
    );
  });
*/
  const server = http.createServer(app);

  server.listen(port, function () {
    /* const nenadx=  new nenad();
    nenadx.id="ovo je extra";
    console.log(nenadx.id); */
    console.log(chalk.green('Server started at http://localhost:' + port + '\n'));
  });
};


/*
function addDevMiddlewares(app, webpackConfig) {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: 'errors-only',
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  const fs = middleware.fileSystem;

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
}

function addProdMiddlewares(app, options) {
  const publicPath = options.publicPath || '/';
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');

  app.use(compression());
  app.use(publicPath, express.static(outputPath));

  app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));
}
*/