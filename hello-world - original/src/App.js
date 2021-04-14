import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
class App extends Component { 
  constructor(){
    super();

    this.state = {
      popup:false,
      details:[],
      detailscopy1:[],
      detailscopy2:[],
      detailscopy3:[],
      detailscopy4:[],
      detailscopy5:[],
      detailscopy6:[],
      detailscopy7:[],
      detailscopy8:[],
      inputvalue:[],
      inputs:[],
      current:0,
      validation:[]
    }
 
  }
  popuptoggle(){
    this.setState({popup:!this.state.popup})
 
  }
  popuptoggle1(){
    
    this.setState({popup:!this.state.popup})

    var array = document.getElementsByClassName('input');

    // var one = document.getElementById("bb1");

    // var oneminus = document.getElementById("b1"); 

    // oneminus.remove();

    // one.remove();

    document.getElementById('selector').selectedIndex="0";

    for(var i=0;i<array.length;i++){
      array[i].selectedIndex="0"
    }
    this.setState({detailscopy1:this.state.validation,detailscopy2:this.state.validation,detailscopy3:this.state.validation,detailscopy4:this.state.validation,detailscopy5:this.state.validation,
      detailscopy6:this.state.validation,detailscopy7:this.state.validation,detailscopy8:this.state.validation,details:this.state.validation})
  }
  getvalue = (event,i) =>{
    
     this.setState(({inputvalue :[...this.state.inputvalue,event.target.value]}),() =>{

      var array = [...this.state.inputvalue]
 

    let size = this.state.inputs.length;

    let from = array.length-size;   

    let to = array.length;

    var rarray = array.slice(from,to);
   
    if(i==0){
      
      var array1 = [...this.state.details];
      
      array1 = array1.filter(item => !rarray.includes(item.value));
      
      this.setState({detailscopy2:array1,detailscopy3:array1,detailscopy4:array1,detailscopy5:array1,
        detailscopy6:array1,detailscopy7:array1,detailscopy8:array1,details:array1})  
      
    }

    if(i==1){
      
      var array1 = [...this.state.details];
      
      array1 = array1.filter(item => !rarray.includes(item.value));
      
      var prevarray1 = [...this.state.detailscopy1];

      prevarray1 = prevarray1.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy1:prevarray1});
      this.setState({detailscopy3:array1,detailscopy4:array1,detailscopy5:array1,
        detailscopy6:array1,detailscopy7:array1,detailscopy8:array1,details:array1});  
      
    }
    if(i==2){
      
      var array1 = [...this.state.details];
      
      array1 = array1.filter(item => !rarray.includes(item.value));

      var prevarray1 = [...this.state.detailscopy1];

      prevarray1 = prevarray1.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy1:prevarray1});

      var prevarray2 = [...this.state.detailscopy2];

      prevarray2 = prevarray2.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy2:prevarray2});
      
      this.setState({detailscopy4:array1,detailscopy5:array1,
        detailscopy6:array1,detailscopy7:array1,detailscopy8:array1,details:array1})  
      
    }
    if(i==3){
      
      var array1 = [...this.state.details];
      
      array1 = array1.filter(item => !rarray.includes(item.value));


      var prevarray1 = [...this.state.detailscopy1];

      prevarray1 = prevarray1.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy1:prevarray1});

      var prevarray2 = [...this.state.detailscopy2];

      prevarray2 = prevarray2.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy2:prevarray2});

      var prevarray3 = [...this.state.detailscopy3];

      prevarray3 = prevarray3.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy3:prevarray3});
      
      
      this.setState({detailscopy5:array1,
        detailscopy6:array1,detailscopy7:array1,detailscopy8:array1,details:array1})  
      
    }
    if(i==4){
      
      var array1 = [...this.state.details];
      
      array1 = array1.filter(item => !rarray.includes(item.value));

      
      var prevarray1 = [...this.state.detailscopy1];

      prevarray1 = prevarray1.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy1:prevarray1});

      var prevarray2 = [...this.state.detailscopy2];

      prevarray2 = prevarray2.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy2:prevarray2});

      var prevarray3 = [...this.state.detailscopy3];

      prevarray3 = prevarray3.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy3:prevarray3});

      var prevarray4 = [...this.state.detailscopy4];

      prevarray4 = prevarray4.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy4:prevarray4});

      
      this.setState({detailscopy6:array1,detailscopy7:array1,detailscopy8:array1,details:array1})  
      
    }
    if(i==5){
      
      var array1 = [...this.state.details];
      
      array1 = array1.filter(item => !rarray.includes(item.value));

      
      var prevarray1 = [...this.state.detailscopy1];

      prevarray1 = prevarray1.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy1:prevarray1});

      var prevarray2 = [...this.state.detailscopy2];

      prevarray2 = prevarray2.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy2:prevarray2});

      var prevarray3 = [...this.state.detailscopy3];

      prevarray3 = prevarray3.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy3:prevarray3});

      var prevarray4 = [...this.state.detailscopy4];

      prevarray4 = prevarray4.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy4:prevarray4});

      var prevarray5 = [...this.state.detailscopy5];

      prevarray5 = prevarray5.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy5:prevarray5});
      
      this.setState({detailscopy7:array1,detailscopy8:array1,details:array1})  
      
    }
    if(i==6){
      
      var array1 = [...this.state.details];
      
      array1 = array1.filter(item => !rarray.includes(item.value));

      var prevarray1 = [...this.state.detailscopy1];

      prevarray1 = prevarray1.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy1:prevarray1});

      var prevarray2 = [...this.state.detailscopy2];

      prevarray2 = prevarray2.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy2:prevarray2});

      var prevarray3 = [...this.state.detailscopy3];

      prevarray3 = prevarray3.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy3:prevarray3});

      var prevarray4 = [...this.state.detailscopy4];

      prevarray4 = prevarray4.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy4:prevarray4});

      var prevarray5 = [...this.state.detailscopy5];

      prevarray5 = prevarray5.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy5:prevarray5});

      var prevarray6 = [...this.state.detailscopy6];

      prevarray6 = prevarray6.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy6:prevarray6});

      
      this.setState({detailscopy8:array1,details:array1})  
      
    }
    if(i==7){
      
      var array1 = [...this.state.details];
      
      array1 = array1.filter(item => !rarray.includes(item.value));

      var prevarray1 = [...this.state.detailscopy1];

      prevarray1 = prevarray1.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy1:prevarray1});

      var prevarray2 = [...this.state.detailscopy2];

      prevarray2 = prevarray2.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy2:prevarray2});

      var prevarray3 = [...this.state.detailscopy3];

      prevarray3 = prevarray3.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy3:prevarray3});

      var prevarray4 = [...this.state.detailscopy4];

      prevarray4 = prevarray4.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy4:prevarray4});

      var prevarray5 = [...this.state.detailscopy5];

      prevarray5 = prevarray5.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy5:prevarray5});

      var prevarray6 = [...this.state.detailscopy6];

      prevarray6 = prevarray6.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy6:prevarray6});

      var prevarray7 = [...this.state.detailscopy7];

      prevarray7 = prevarray7.filter((item) => {
        return item.value !== event.target.value
      })

      this.setState({detailscopy7:prevarray7});

      
      this.setState({detailscopy8:array1,details:array1})  
      
    }   

     })
   
  }
  removeitem(i){
    var array = [...this.state.inputs]
    for(var i=0;i<array.length;i++){
        array.splice(i,1);
        this.setState({inputs:array})
      
    }

    var value = this.state.inputvalue[0];
    this.state.inputvalue.shift();

    if(value=="first_name"){
      var obj =  {label: 'First Name', value: 'first_name'}
      this.setState({details:[...this.state.details,obj]})
    }
    if(value=="last_name"){
      var obj =  {label: 'Last Name', value: 'last_name'}
      this.setState({details:[...this.state.details,obj]})
    }
    if(value=="gender"){
      var obj =  {label: 'Gender', value: 'gender'}
      this.setState({details:[...this.state.details,obj]})
    }
    if(value=="age"){
      var obj =  {label: 'Age', value: 'age'}
      this.setState({details:[...this.state.details,obj]})
    }
    if(value=="account_name"){
      var obj =  {label: 'Account Name', value: 'account_name'}
      this.setState({details:[...this.state.details,obj]})
    }
    if(value=="city"){
      var obj =  {label: 'City', value: 'city'}
      this.setState({details:[...this.state.details,obj]})
    }
    if(value=="state"){
      var obj =  {label: 'State', value: 'state'}
      this.setState({details:[...this.state.details,obj]})
    }

  }
  additem(){
          var flag=0;
          if(document.getElementsByClassName("input").length>=1){
            
            var elements = document.getElementsByClassName("input");

            var elementsarray = [...elements];
            
            for(var i=0; i<elementsarray.length>=1;i++){
             
              if(elementsarray[i].value=="add_schema"){
           
                alert('kindly choose a value');flag=1;break;           
           
              }
           
            }
          
          }
        
        if(flag==0&&document.getElementsByClassName("input").length<7){this.setState({inputs :[...this.state.inputs,"input"]})};


  };
  validate(){

        var name  = document.getElementById('name');
        var array = document.getElementsByClassName('input');
        
        if(name.value==''){
          alert('please enter the name of the schema');return;;
         
        }
      
      
        for(var i=0;i<array.length;i++){
          
          if(array[i].value=="add_schema"){
           
            alert('kindly choose a value');    
       
          }
        }
        if(array.length==0){alert('select atleast one attribute to save the schema');return}

          var num = this.state.inputs.length;

          var ins = [];

          for(var j=1;j<=num;j++){
              
            var val = document.getElementById("bb"+j).value;
            
            var validator = this.state.validation;

            var obj = validator.filter(item =>{
              return item.value == val
            })
            obj = Object.assign({},obj)
            ins.push(obj);

            console.log(ins);

          }
           var namejsed = JSON.stringify(name.value); 
          var insjsed = JSON.stringify(ins)
          let formdata = new FormData();
          formdata.append("segment_name",namejsed);
          formdata.append("schema",insjsed)
          const options = {
            method: "POST",
            body: formdata,
            mode: 'no-cors'
          };
          fetch("https://webhook.site/d2070f10-1a7d-4f78-8c07-360e6fead4d3", options).then(function (res) {
            if (res.status == 200) {
              alert("Perfect! ");
            } else if (res.status == 401) {
              alert("Oops! ");
            }
          }, function (e) {
            alert("Error submitting form!");
          });

  }
 
  componentDidMount() {
    this.setState({
      details: [
        {label:'Add Schema to segment', value:'add_schema'},
        {label: 'First Name', value: 'first_name'},
        {label: 'Last Name', value: 'last_name'},
        {label: 'Gender', value: 'gender'},
        {label: 'Age', value: 'age'},
        {label: 'Account Name', value: 'account_name'},
        {label: 'City', value: 'city'},
        {label: 'State', value: 'state'},
      ]
    });
    this.setState({
      detailscopy1: [
        {label:'Add Schema to segment', value:'add_schema'},
        {label: 'First Name', value: 'first_name'},
        {label: 'Last Name', value: 'last_name'},
        {label: 'Gender', value: 'gender'},
        {label: 'Age', value: 'age'},
        {label: 'Account Name', value: 'account_name'},
        {label: 'City', value: 'city'},
        {label: 'State', value: 'state'},
      ]
    });
    this.setState({
      detailscopy2: [
        {label:'Add Schema to segment', value:'add_schema'},
        {label: 'First Name', value: 'first_name'},
        {label: 'Last Name', value: 'last_name'},
        {label: 'Gender', value: 'gender'},
        {label: 'Age', value: 'age'},
        {label: 'Account Name', value: 'account_name'},
        {label: 'City', value: 'city'},
        {label: 'State', value: 'state'},
      ]
    });
    this.setState({
      validation: [
        {label:'Add Schema to segment', value:'add_schema'},
        {label: 'First Name', value: 'first_name'},
        {label: 'Last Name', value: 'last_name'},
        {label: 'Gender', value: 'gender'},
        {label: 'Age', value: 'age'},
        {label: 'Account Name', value: 'account_name'},
        {label: 'City', value: 'city'},
        {label: 'State', value: 'state'},
      ]
    });
    this.setState({
      detailscopy3: [
        {label:'Add Schema to segment', value:'add_schema'},
        {label: 'First Name', value: 'first_name'},
        {label: 'Last Name', value: 'last_name'},
        {label: 'Gender', value: 'gender'},
        {label: 'Age', value: 'age'},
        {label: 'Account Name', value: 'account_name'},
        {label: 'City', value: 'city'},
        {label: 'State', value: 'state'},
      ]
    });
    this.setState({
      detailscopy4: [
        {label:'Add Schema to segment', value:'add_schema'},
        {label: 'First Name', value: 'first_name'},
        {label: 'Last Name', value: 'last_name'},
        {label: 'Gender', value: 'gender'},
        {label: 'Age', value: 'age'},
        {label: 'Account Name', value: 'account_name'},
        {label: 'City', value: 'city'},
        {label: 'State', value: 'state'},
      ]
    });
    this.setState({
      detailscopy5: [
        {label:'Add Schema to segment', value:'add_schema'},
        {label: 'First Name', value: 'first_name'},
        {label: 'Last Name', value: 'last_name'},
        {label: 'Gender', value: 'gender'},
        {label: 'Age', value: 'age'},
        {label: 'Account Name', value: 'account_name'},
        {label: 'City', value: 'city'},
        {label: 'State', value: 'state'},
      ]
    });
    this.setState({
      detailscopy6: [
        {label:'Add Schema to segment', value:'add_schema'},
        {label: 'First Name', value: 'first_name'},
        {label: 'Last Name', value: 'last_name'},
        {label: 'Gender', value: 'gender'},
        {label: 'Age', value: 'age'},
        {label: 'Account Name', value: 'account_name'},
        {label: 'City', value: 'city'},
        {label: 'State', value: 'state'},
      ]
    });
    this.setState({
      detailscopy7: [
        {label:'Add Schema to segment', value:'add_schema'},
        {label: 'First Name', value: 'first_name'},
        {label: 'Last Name', value: 'last_name'},
        {label: 'Gender', value: 'gender'},
        {label: 'Age', value: 'age'},
        {label: 'Account Name', value: 'account_name'},
        {label: 'City', value: 'city'},
        {label: 'State', value: 'state'},
      ]
    });
    this.setState({
      detailscopy8: [
        {label:'Add Schema to segment', value:'add_schema'},
        {label: 'First Name', value: 'first_name'},
        {label: 'Last Name', value: 'last_name'},
        {label: 'Gender', value: 'gender'},
        {label: 'Age', value: 'age'},
        {label: 'Account Name', value: 'account_name'},
        {label: 'City', value: 'city'},
        {label: 'State', value: 'state'},
      ]
    });
    this.setState({inputvalue:[]})
   
  
  }
  render(){
    


    const { details } = this.state;

    let countriesList = details.length > 0
    	&& details.map((item, i) => {
      return (
        <option className="input1" key={i} value={item.value} label = {item.label}>{item.name}</option>
      )
    }, this);

    
    return (
  
            <div className="App">
              <header></header>
            <button className="button" onClick={() => this.popuptoggle()}>
            Save Segment
            </button>
          <div className={this.state.popup ? "sidediv" : "sidedivdn"}>
          <span><b>Enter the Name of The Segment</b></span><br/><br/><br/>
          <input type="text" className="input1" id="name" placeholder="Name of the Segment"/><br/><br/>
          <span><b>To save your segment , you need to add the schemas to build the query</b></span>
          <br/><br/>
          <ul >
            <li className="reddot"> - group Traits</li>
            
          </ul>
          <ul>
            <li> - user Traits</li>
            
          </ul><br/><br/>
          <div className="bluebox">
            {this.state.inputs.map((elem,i) => {

              let val = i;
              return(

                <div>

                { i==0 && 
                  
                  <div>
                  <select key={i} id="bb1" className="input"  onChange={e => {this.getvalue(e,i)}} >
                   {this.state.detailscopy1.map((item,i) =>{
                      return (
                        <option className="input1" key={i} value={item.value} label = {item.label}>{item.name}</option>
                      )
                   })}
                  </select>
                  <span id="b1" onClick={() =>this.removeitem(i)} className="remove">&#8722;</span>
                  <br/><br/>
                  </div> 
                }

            
                 { i==1 && 
                  
                  <div>
                  <select key={i} id="bb2" className="input"  onChange={e => {this.getvalue(e,i)}} >
                   {this.state.detailscopy2.map((item,i) =>{
                      return (
                        <option className="input1" key={i} value={item.value} label = {item.label}>{item.name}</option>
                      )
                   })}
                  </select>
                  <span onClick={() =>this.removeitem(i)} className="remove">&#8722;</span>
                  <br/><br/>
                  </div> 
                }
                 { i==2 && 
                  
                  <div>
                  <select key={i} id="bb3" className="input"  onChange={e => {this.getvalue(e,i)}} >
                   {this.state.detailscopy3.map((item,i) =>{
                      return (
                        <option className="input1" key={i} value={item.value} label = {item.label}>{item.name}</option>
                      )
                   })}
                  </select>
                  <span onClick={() =>this.removeitem(i)} className="remove">&#8722;</span>
                  <br/><br/>
                  </div> 
                }
                 { i==3 && 
                  
                  <div>
                  <select key={i} id="bb4" className="input"  onChange={e => {this.getvalue(e,i)}} >
                   {this.state.detailscopy4.map((item,i) =>{
                      return (
                        <option className="input1" key={i} value={item.value} label = {item.label}>{item.name}</option>
                      )
                   })}
                  </select>
                  <span onClick={() =>this.removeitem(i)} className="remove">&#8722;</span>
                  <br/><br/>
                  </div> 
                }
                 { i==4 && 
                  
                  <div>
                  <select key={i} id="bb5" className="input"  onChange={e => {this.getvalue(e,i)}} >
                   {this.state.detailscopy5.map((item,i) =>{
                      return (
                        <option className="input1" key={i} value={item.value} label = {item.label}>{item.name}</option>
                      )
                   })}
                  </select>
                  <span onClick={() =>this.removeitem(i)} className="remove">&#8722;</span>
                  <br/><br/>
                  </div> 
                }
                 { i==5 && 
                  
                  <div>
                  <select key={i} id="bb6" className="input"  onChange={e => {this.getvalue(e,i)}} >
                   {this.state.detailscopy6.map((item,i) =>{
                      return (
                        <option className="input1" key={i} value={item.value} label = {item.label}>{item.name}</option>
                      )
                   })}
                  </select>
                  <span onClick={() =>this.removeitem(i)} className="remove">&#8722;</span>
                  <br/><br/>
                  </div> 
                }
                 { i==6 && 
                  
                  <div>
                  <select key={i} id="bb7" className="input"  onChange={e => {this.getvalue(e,i)}} >
                   {this.state.detailscopy7.map((item,i) =>{
                      return (
                        <option className="input1" key={i} value={item.value} label = {item.label}>{item.name}</option>
                      )
                   })}
                  </select>
                  <span onClick={() =>this.removeitem(i)} className="remove">&#8722;</span>
                  <br/><br/>
                  </div> 
                }

                  { i==7 && 
                  
                  <div>
                  <select key={i} id="bb8" className="input"  onChange={e => {this.getvalue(e,i)}} >
                   {this.state.detailscopy8.map((item,i) =>{
                      return (
                        <option className="input1" key={i} value={item.value} label = {item.label}>{item.name}</option>
                      )
                   })}
                  </select>
                  <span onClick={() =>this.removeitem(i)} className="remove">&#8722;</span>
                  <br/><br/>
                  </div> 
                }
              </div>
                  
              )
              

            })}
          </div>
          <br/>
          <select className="input1" id="selector">
            
          {countriesList}
          </select><br/><br/>
          <a><u onClick ={() => this.additem()}>Add new Schema</u></a>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <button onClick ={() => this.validate()} className="greenbutton">Save Segment</button>
          <button onClick={() => this.popuptoggle1()} className="cancelbutton">cancel</button> 
        </div> 
       
     
     
     </div>
  
    );
  }
}
export default App;
