function AjaxData(ajax_url) {
	 var html = $.ajax({
	 	 type: 	"GET",
	 	 url: 	ajax_url,
	 	 async: false
	 }).responseText;
	 return html;
}

function JsonData(url) {
	var jdata = null;
	$.getJSON(url, function(data) {
		jdata = data;
	});	
	return jdata;
}

function IsInteger(string_value) {
	var reg = new RegExp(/^\d{1,}$/);
	if (reg.test(string_value) && string_value != "0")
		return true;
	return false;
}

function ContentLoad(url) {
	$("#ajax-data").html("Loading...").load(url + "&tmpl=ajax");
}

function MessageDialog(message) {
	alert(message);
}

function OpenDialog(url,title) {
	if (!title)
		title = 'MediaMad';
	$('#dialog').html('Loading...').load(url + "&tmpl=ajax").dialog('option','title',title).dialog('open');
}