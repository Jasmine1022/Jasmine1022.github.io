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

     $("button#get_data2").click(function() {
      var items = [];
      var i = 0;
      var airtable_read_endpoint = "https://api.airtable.com/v0/appUbctO2Co9tXvAt/Contain?api_key=key4BwmlceROyHV8A";
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

           $('#table2').DataTable( {
               data: dataSet,
               retrieve: true,
               columns: [
                   { title: "Name",
                     defaultContent:""},
                   { title: "Contain",
                       defaultContent:"" },
               ]
           } );

           var chart = c3.generate({
                data: {
                    columns: dataSet,
                    type : 'bar'
                },
                axis: {
                  x: {label: 'Name'},
                  y: {label: 'Contain'}
                },
                bar: {
                    title: "所有场馆的最多容纳人数:",
                }
            });

      }); // end .getJSON

   }); // end button

}); // document ready


