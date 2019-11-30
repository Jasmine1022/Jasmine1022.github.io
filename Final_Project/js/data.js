$(document).ready(function(){


     $("button#get_data1").click(function() {
      var items = [];
      var i = 0;
      var airtable_read_endpoint = "https://api.airtable.com/v0/app4dCIRDc3Hn3jOA/500-1499?api_key=key4BwmlceROyHV8A";
      var dataSet = [];
      $.getJSON(airtable_read_endpoint, function(result) {
             $.each(result.records, function(key,value) {
                 items = [];
                     items.push(value.fields.Name);
                     items.push(value.fields.Capacity);
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
                  y: {label: 'Capacity'}
                },
            });
      }); // end .getJSON
   }); // end button

   $("button#get_data2").click(function() {
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/app4dCIRDc3Hn3jOA/1500-2999?api_key=key4BwmlceROyHV8A";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.Name);
                   items.push(value.fields.Capacity);
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
                y: {label: 'Capacity'}
              },
          });
    }); // end .getJSON
 }); // end button

 $("button#get_data3").click(function() {
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/app4dCIRDc3Hn3jOA/3000-9999?api_key=key4BwmlceROyHV8A";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.Name);
                   items.push(value.fields.Capacity);
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
                y: {label: 'Capacity'}
              },
          });
    }); // end .getJSON
 }); // end button

 $("button#get_data4").click(function() {
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/app4dCIRDc3Hn3jOA/10000-?api_key=key4BwmlceROyHV8A";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.Name);
                   items.push(value.fields.Capacity);
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
                y: {label: 'Capacity'}
              },
          });
    }); // end .getJSON
 }); // end button

 $("button#roll_up").click(function() {
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/app4dCIRDc3Hn3jOA/Comments?api_key=key4BwmlceROyHV8A";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
               items.push(value.fields.名称);
               items.push(value.fields.类型);
               items.push(value.fields.TripAdvisor点评数);
               items.push(value.fields.行政区);
               items.push(value.fields.地址);
               items.push(value.fields.交通);
                   dataSet.push(items);
                   console.log(items);
            }); // end .each
            console.log(dataSet);

         $('#table').DataTable( {
             data: dataSet,
             retrieve: true,
             columns: [
                { title: "名称",
                  defaultContent:""},
                { title: "类型",
                    defaultContent:"" },
                { title: "TripAdvisor点评数",
                  defaultContent:"" },
                { title: "行政区",
                  defaultContent:""},
                  { title: "地址",
                  defaultContent:""},
                { title: "交通",
                    defaultContent:""},
            ]
        } );
    }); // end .getJSON
 }); // end button

}); // document ready