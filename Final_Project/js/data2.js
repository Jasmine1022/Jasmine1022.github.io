$(document).ready(function(){



 $("button#get_data5").click(function() {
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/app4dCIRDc3Hn3jOA/Park?api_key=key4BwmlceROyHV8A";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.Name);
                   items.push(value.fields.TripAdvisorCommentNumber);
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
                y: {label: 'TripAdvisorCommentNumber'}
              },
          });
    }); // end .getJSON
 }); // end button

 $("button#get_data6").click(function() {
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/app4dCIRDc3Hn3jOA/Mall?api_key=key4BwmlceROyHV8A";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.Name);
                   items.push(value.fields.TripAdvisorCommentNumber);
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
                y: {label: 'TripAdvisorCommentNumber'}
              },
          });
    }); // end .getJSON
 }); // end button

 $("button#get_data7").click(function() {
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/app4dCIRDc3Hn3jOA/Culture?api_key=key4BwmlceROyHV8A";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.Name);
                   items.push(value.fields.TripAdvisorCommentNumber);
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
                y: {label: 'TripAdvisorCommentNumber'}
              },
          });
    }); // end .getJSON
 }); // end button

}); // document ready