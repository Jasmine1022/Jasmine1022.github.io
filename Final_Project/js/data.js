$(document).ready(function(){

  $("button#hide_h2").click(function() {
      $("h2").hide(500);
  });

  $("button#show_h2").click(function() {
      $("h2").show(300);
  });

  $("button#clear_screen").click(function() {
      var $x = $("container");
      $x.empty();
  });

   $("button#get_data1").click(function() {
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "url https://api.airtable.com/v0/app4dCIRDc3Hn3jOA/500-1499?api_key=key4BwmlceROyHV8A";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.Name);
                   items.push(value.fields.Contain);
                   dataSet.push(items);
                   console.log(items);
            }); // end .each
            console.log(dataSet);

         var chart = c3.generate({
              data: {
                  columns: dataSet,
                  type : 'bar'
              },
              axis: {
                x: {label: 'Name'},
                y: {label: 'Contain'}
              },
          });
        }); 
    }); 
    
   $("button#get_data2").click(function() {
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "url https://api.airtable.com/v0/app4dCIRDc3Hn3jOA/1500-2999?api_key=key4BwmlceROyHV8A";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.Name);
                   items.push(value.fields.Contain);
                   dataSet.push(items);
                   console.log(items);
            }); // end .each
            console.log(dataSet);

         var chart = c3.generate({
              data: {
                  columns: dataSet,
                  type : 'bar'
              },
              axis: {
                x: {label: 'Name'},
                y: {label: 'Contain'}
              },
          });
        });
    }); 
    
     $("button#get_data3").click(function() {
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "url https://api.airtable.com/v0/app4dCIRDc3Hn3jOA/3000-9999?api_key=key4BwmlceROyHV8A";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.Name);
                   items.push(value.fields.Contain);
                   dataSet.push(items);
                   console.log(items);
            }); // end .each
            console.log(dataSet);

         var chart = c3.generate({
              data: {
                  columns: dataSet,
                  type : 'bar'
              },
              axis: {
                x: {label: 'Name'},
                y: {label: 'Contain'}
              },
          });
        });
    }); 
    
    $("button#get_data4").click(function() {
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "url https://api.airtable.com/v0/app4dCIRDc3Hn3jOA/10000-?api_key=key4BwmlceROyHV8A";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.Name);
                   items.push(value.fields.Contain);
                   dataSet.push(items);
                   console.log(items);
            }); // end .each
            console.log(dataSet);

         var chart = c3.generate({
              data: {
                  columns: dataSet,
                  type : 'bar'
              },
              axis: {
                x: {label: 'Name'},
                y: {label: 'Contain'}
              },
          });
        });
    }); 


}); // document ready