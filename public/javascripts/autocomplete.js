$(document).ready(function() {		
$('#searchForm').autocomplete(
	{
    search: function () {},
    source: function (request, response)
    {
        $.ajax(
        {
            url: 'autocomplete',
            dataType: "json",
            data:
            {
                term: request.term,
            },
            success: function (data)
            {
                response(data);
            }
        });
    },
    minLength: 2,
      open: function() {
        $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
      },
      close: function() {
        $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
      }
});
});