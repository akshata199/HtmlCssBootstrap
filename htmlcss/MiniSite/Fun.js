var num1=100;
var num2= 200;
var num3=num1+num2;
console.log("sum="+num3);

var str="Welcome";
var name="Akshata";
var language="English";
if(language!="English"){
    console.log ("Namaste"+ name);
}
else{
    console.log(str+""+name);
}

var shoppingitems =["groceries", "Extension cord", "Tubelight"];
console.log(shoppingitems[1]);
console.log(shoppingitems);
shoppingitems.push("starlight");
console.log(shoppingitems[3]);
shoppingitems[3]="bulbs";
console.log(shoppingitems);
shoppingitems.splice(1,2);
console.log(shoppingitems);

var myobj1={};
var myobj2 = {
    name : "akshata",
    empid:2321,
    Accessories:["wallet","ID tag", "KPMG laptop bag"],
    tasks:{task1 : "training", task2: "coding"}
}

console.log(myobj2);
console.log("name: " +myobj2.name);
console.log("empid: " +myobj2.empid);
console.log("idcard: " +myobj2.Accessories[1]);
console.log("coding tasks: " +myobj2.tasks.task2);

var divtag=document.getElementById("menu");
console.log(divtag);
console.log(divtag.id);
console.log(divtag.style);

var divByClass = document.getElementsByClassName("div1");
console.log(divByClass);

var cart=[];

function onButtonClick(item){
    var div= document.getElementById(item);
    var itemValue=div.getAttribute("data-itemname");
    var itemcost=div.getAttribute("data-itemcost");
    var obj={name:itemValue, cost:itemcost};
    cart.push(obj);
    //
    console.log(cart);
    GetTotalCost();
}

function GetTotalCost(){
    var total=0;
    for (var ctr=0; ctr<cart.length;ctr++)
    {total=total + Number(cart[ctr].cost);}
    document.getElementById ("total cost").innerText="INR"+total;
    console.log("Total cart value is INR" + total);
}

function onLogin(txtuser, txtpwd)
{
    var username = document.getElementById(txtuser);
    var pwd = document.getElementById(txtpwd);
    var statusSpan = document.getElementById("status");
    if(username.value =='admin' && pwd.value == 'nimda')
    {
        statusSpan.innerText = "Login Successful"
        statusSpan.className = "toast-body text-success";
    }
    else{
        statusSpan.innerText = "Login Failed! Consider adding user"
        statusSpan.className = "toast-body text-danger";
    }
    var toastDiv = document.getElementById(toastDiv);
    toastDiv.className="toast show";
}


