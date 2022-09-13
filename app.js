function menu(item1,item2,item3,item4,item5){
    this.item1=item1;
    this.item2=item2;
    this.item3=item3;
    this.item4=item4;
    this.item5=item5;
}

var food=new menu("Pizza","Sandwich","Burger","Bar Bq","Chinese");
var desert=new menu("Ice Cream","Faloda","Brownie","Donuts","Kulfi");
var drinks=new menu("7up","Coca Cola","Marinda","Pepsi","Sting");


var main=document.getElementById("first");

var h1=document.createElement("h1");
h1.style.marginLeft="45px";
h1.style.color="blue";

var htext=document.createTextNode("Restaurent Menu");

h1.appendChild(htext);

main.appendChild(h1);

var div=document.createElement("div");


//food start
var  m=document.createElement("div");
var h2a=document.createElement("h2");
h2a.style.marginLeft="45px";

var h2atext=document.createTextNode("Fast Food");

h2a.appendChild(h2atext);

m.appendChild(h2a);
//food end

//desert start
var  d=document.createElement("div");

var h2b=document.createElement("h2");
h2b.style.marginLeft="45px";

var h2btext=document.createTextNode("Deserts");

h2b.appendChild(h2btext);

d.appendChild(h2b);
//desert end


//drinks start
var  c=document.createElement("div");


var h2c=document.createElement("h2");
h2c.style.marginLeft="45px";

var h2ctext=document.createTextNode("Soft-Drinks");

h2c.appendChild(h2ctext);

c.appendChild(h2c);

//drinks end

div.appendChild(m);
div.appendChild(d);
div.appendChild(c);

main.appendChild(div);


//food loop
for(var i in food){
    console.log(food[i]);

    var list=document.createElement("ol");
    list.style.color="brown";


    var listtext=document.createTextNode(`${food[i]}`);

    list.appendChild(listtext);

    m.appendChild(list);

}

//desert loop
for(var i in desert){
    console.log(desert[i]);

    var list=document.createElement("ol");
    list.style.color="purple";


    var listtext=document.createTextNode(`${desert[i]}`);

    list.appendChild(listtext);

    d.appendChild(list);

}

//colddrink loop
for(var i in drinks){
    console.log(drinks[i]);

    var list=document.createElement("ol");
    list.style.color="green";


    var listtext=document.createTextNode(`${drinks[i]}`);

    list.appendChild(listtext);

    c.appendChild(list);

}

