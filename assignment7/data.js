$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appZYJodqH2yQcXNV/%E6%BC%94%E5%87%BA%E4%BF%A1%E6%81%AF?api_key=keyFNbgLbJbzpQY3F";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.演出者);
                       items.push(value.fields.首日);
                       items.push(value.fields.场地);
                       items.push(value.fields.演出名);
                       items.push(value.fields.类型);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "演出者",
                       defaultContent:""},
                     { title: "首日",
                         defaultContent:"" },
                     { title: "场地",
                       defaultContent:"" },
                     { title: "演出名",
                       defaultContent:""},
                     { title: "类型",
                         defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

}); // document ready

$("button#get_data2").click(function() {
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appZYJodqH2yQcXNV/%E6%BC%94%E5%87%BA%E4%BF%A1%E6%81%AF?api_key=keyFNbgLbJbzpQY3F";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = [];
                   items.push(value.fields.类型);
                   items.push(value.fields.total_items_by_category);
                   dataSet.push(items);
                   console.log(items);
            }); // end .each
            console.log(dataSet);

         $('#table2').DataTable( {
             data: dataSet,
             retrieve: true,
             columns: [
                 { title: "类型",
                   defaultContent:""},
                 { title: "Total Amount",
                     defaultContent:"" },
             ]
         } );

         var chart = c3.generate({
              data: {
                  columns: dataSet,
                  type : 'bar'
              },
              axis: {
                x: {label: '类型'},
                y: {label: '# of Items'}
              },
              bar: {
                  title: "# of Items by 类型 Category:",
              }
          });

    }); // end .getJSON

 }); // end button

}); // document ready