function Gold()
{  
      var amt = document.getElementById("firstNumber").value;
        var r = document.getElementById("secondNumber").value;
        var wa=amt/(1.03*r);
  var w=parseFloat(wa).toFixed(2);
  var amtw=Math.round(w*r);
  var e=Math.round(amt/1.03)-amtw;
  var amtadoe=amtw+e;
  var t=Math.round(amtadoe*0.015);
  var d=document.getElementById("date").value;
    var bn=document.getElementById("billno").value;
  if(2*t+amtadoe!=amt)
  

  {
    e=e+(amt-(amtadoe+2*t));
    amtadoe=amtw+e;
  }
  
        document.write('<h2 style="text-align: center;"><b>Sweta Jewellers</b></h2>');
     
           document.write('<h9 style="text-align: left;"><b>Date:</b></h9>');
   document.write('<h9 style="text-align: left;"></h9>'+d);
   document.write("<br>");
  document.write('<h9 style="text-align: right;"><b>Billno:</b></h9>');
   document.write('<h9 style="text-align: right;"></h9>'+bn);
  document.write("<br>");

   document.write('TYPE &nbsp &nbsp &nbsp &nbsp Weight &nbsp &nbsp &nbsp &nbsp rate &nbsp &nbsp &nbsp &nbsp Amount');
              document.write("<br>");    
  document.write('Gold Ornament'+'&nbsp &nbsp &nbsp &nbsp '+w+'gm'+'&nbsp &nbsp &nbsp &nbsp'+r+'&nbsp &nbsp &nbsp &nbsp  '+amtw);
   

   document.write("<br>");   document.write("<br>");  
   document.write("<br>");   document.write("<br>");  
   document.write("<br>");   document.write("<br>");  
   document.write("<br>");   document.write("<br>");  
  
  document.write("<br>");
  if(e<0)
  {
    document.write('Total Tax'+2*t+'&nbsp &nbsp &nbsp &nbsp    Discount:'+(e*-1));

       document.write("<br>");
  document.write('Total Value'+(t*2+amtadoe)+'&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp Total Value:'+(amtadoe));
  }
   if(e>0)
  {
    document.write('Total Tax:'+2*t+'&nbsp &nbsp &nbsp &nbsp   Other Charges:'+(e));

       document.write("<br>");
  document.write('Total Value:'+(t*2+amtadoe)+'&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp   Total Value:'+(amtadoe));
    
  }
 
   document.write("<br>");
  document.write('&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp   Tax:'+(t));
  document.write("<br>");
  document.write('&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp     &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp   Tax:'+(t));

  document.write("<br>");
  document.write('&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp    Total Value:'+(t*2+amtadoe));
 
  
}

function Silver() 
{ 
         var amt = document.getElementById("firstNumber").value;
        var r = document.getElementById("secondNumber").value;
        var wa=amt/(1.03*r);
  var w=wa.toFixed(1);
  w=Math.round(wa*2+0.5)/2
  var amtw=Math.round(w*r);
  var e=Math.round(amt/1.03)-amtw;
  var amtadoe=amtw+e;
  
  var t=Math.round(amtadoe*0.015);
  if(2*t+amtadoe!=amt)

  {
    e=e+(amt-(amtadoe+2*t));
    
    amtadoe=amtw+e;
  }
d=document.getElementById("date").value;
    var bn=document.getElementById("billno").value
               document.write('<h2 style="text-align: center;"><b>Sweta Jewellers</b></h2>');
     
           document.write('<h9 style="text-align: left;"><b>Date:</b></h9>');
   document.write('<h9 style="text-align: left;"></h9>'+d);
   document.write("<br>");
  document.write('<h9 style="text-align: right;"><b>Billno:</b></h9>');
   document.write('<h9 style="text-align: right;"></h9>'+bn);
  document.write("<br>");

   document.write('TYPE &nbsp &nbsp &nbsp &nbsp Weight &nbsp &nbsp &nbsp &nbsp rate &nbsp &nbsp &nbsp &nbsp Amount');
              document.write("<br>");    
  document.write('Gold Ornament'+'&nbsp &nbsp &nbsp &nbsp '+w+'gm'+'&nbsp &nbsp &nbsp &nbsp'+r+'&nbsp &nbsp &nbsp &nbsp  '+amtw);
   

   document.write("<br>");   document.write("<br>");  
   document.write("<br>");   document.write("<br>");  
   document.write("<br>");   document.write("<br>");  
   document.write("<br>");   document.write("<br>");  
  
  document.write("<br>");
  if(e<0)
  {
    document.write('Total Tax'+2*t+'&nbsp &nbsp &nbsp &nbsp    Discount:'+(e*-1));

       document.write("<br>");
  document.write('Total Value'+(t*2+amtadoe)+'&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp Total Value:'+(amtadoe));
  }
   if(e>0)
  {
    document.write('Total Tax:'+2*t+'&nbsp &nbsp &nbsp &nbsp   Other Charges:'+(e));

       document.write("<br>");
  document.write('Total Value:'+(t*2+amtadoe)+'&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp   Total Value:'+(amtadoe));
    
  }
 
   document.write("<br>");
  document.write('&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp   Tax:'+(t));
  document.write("<br>");
  document.write('&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp     &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp   Tax:'+(t));

  document.write("<br>");
  document.write('&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp    Total Value:'+(t*2+amtadoe)); 
}

function Weight()
{
        var w = document.getElementById("weight").value;
        var r = document.getElementById("secondNumber").value;
  var m = document.getElementById("making").value;
        

  var amtw=Math.round(w*r);
  if(m===null||!m||m.value!==""){
    m=0;
  }
  var amtm=parseInt(amtw)+parseInt(m);
   
  var t=Math.round((amtm)*0.015);
  
  var total=amtm+t+t;
  var d=document.getElementById("date").value;
    var bn=document.getElementById("billno").value;
  
  
        document.write('<h2 style="text-align: center;"><b>Sweta Jewellers</b></h2>');
     
           document.write('<h9 style="text-align: left;"><b>Date:</b></h9>');
   document.write('<h9 style="text-align: left;"></h9>'+d);
   document.write("<br>");
  document.write('<h9 style="text-align: right;"><b>Billno:</b></h9>');
   document.write('<h9 style="text-align: right;"></h9>'+bn);
  document.write("<br>");

   document.write('TYPE &nbsp &nbsp &nbsp &nbsp Weight &nbsp &nbsp &nbsp &nbsp rate &nbsp &nbsp &nbsp &nbsp Amount');
              document.write("<br>");    
  document.write('Ornament'+'&nbsp &nbsp &nbsp &nbsp '+w+'gm'+'&nbsp &nbsp &nbsp &nbsp'+r+'&nbsp &nbsp &nbsp &nbsp  '+amtw);
   

   document.write("<br>");   document.write("<br>");  
   document.write("<br>");   document.write("<br>");  
   document.write("<br>");   document.write("<br>");  
   document.write("<br>");   document.write("<br>");  
  
  document.write("<br>");
  
    document.write('Total Tax:'+2*t+'&nbsp &nbsp &nbsp &nbsp   Other Charges:'+(m));

       document.write("<br>");
  document.write('Total Value:'+(total)+'&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp Total Value:'+(amtm));
  
 
   document.write("<br>");
  document.write('&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp   Tax:'+(t));
  document.write("<br>");
  document.write('&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp     &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp   Tax:'+(t));

  document.write("<br>");
  document.write('&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp    Total Value:'+(total));
 
  
}




function gstn()
{
         
  
   var amt = document.getElementById("firstNumber").value;
        var r = document.getElementById("secondNumber").value;
       var w = document.getElementById("weight").value;
   
        
        
  var amtw=Math.round(w*r);
  var e=Math.round(amt/1.03)-amtw;
  var amtadoe=amtw+e;
  var t=Math.round(amtadoe*0.015);
  var d=document.getElementById("date").value;
    var bn=document.getElementById("billno").value;
  if(2*t+amtadoe!=amt)
  

  {
    e=e+(amt-(amtadoe+2*t));
    amtadoe=amtw+e;
  }
  
        document.write('<h2 style="text-align: center;"><b>Sweta Jewellers</b></h2>');
     
           document.write('<h9 style="text-align: left;"><b>Date:</b></h9>');
   document.write('<h9 style="text-align: left;"></h9>'+d);
   document.write("<br>");
  document.write('<h9 style="text-align: right;"><b>Billno:</b></h9>');
   document.write('<h9 style="text-align: right;"></h9>'+bn);
  document.write("<br>");

   document.write('TYPE &nbsp &nbsp &nbsp &nbsp Weight &nbsp &nbsp &nbsp &nbsp rate &nbsp &nbsp &nbsp &nbsp Amount');
              document.write("<br>");    
  document.write(' rnament'+'&nbsp &nbsp &nbsp &nbsp '+w+'gm'+'&nbsp &nbsp &nbsp &nbsp'+r+'&nbsp &nbsp &nbsp &nbsp  '+amtw);
   

   document.write("<br>");   document.write("<br>");  
   document.write("<br>");   document.write("<br>");  
   document.write("<br>");   document.write("<br>");  
   document.write("<br>");   document.write("<br>");  
  
  document.write("<br>");

  
    document.write('Total Tax:'+2*t+'&nbsp &nbsp &nbsp &nbsp    Other Charges:'+(e));

       document.write("<br>");
  document.write('Total Value:'+(t*2+amtadoe)+'&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp   Total Value:'+(amtadoe));
    
  
 
   document.write("<br>");
  document.write('&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp   Tax:'+(t));
  document.write("<br>");
  document.write('&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp     &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp   Tax:'+(t));

  document.write("<br>");
  document.write('&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp    Total Value:'+(t*2+amtadoe));
 
}
