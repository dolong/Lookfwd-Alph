var aws = require("./lib/aws");
	//jquery = require("../lib/jquery/jquery-1.10.2");
	books = require("./books.jsonp");
	var options = {
	  region: "CA"
	};
	prodAdv = aws.createProdAdvClient("AKIAJDVV35I45ACW26CQ", "gWjMmaUq5i6h2SZ/70DErKsmwzwK1waWhPashA6t", "lookfwd-20", options);


				/*
					console.log(	'Item num ' + num + '\n' +
							'ASIN:' + JSON.stringify(item.ASIN) + '\n' +
							'Description:' + JSON.stringify(item.DetailPageURL[0])+ '\n' +
							'Image Link:' + JSON.stringify(item.MediumImage[0].URL[0]) + '\n' +
							'Title:' + JSON.stringify(item.ItemAttributes[0].Title[0]) + '\n' +
							'Descr:' + JSON.stringify(item.EditorialReviews[0].EditorialReview[0].Content[0]) + '\n');
							*/

var books = jsonstr;
var min = 0;
var max = 1;
var num = min;
console.log ( "jsonstr = [     " + '\n');
books.forEach(function(entry) {
		
	var title = (entry.title);
	var author = (entry.author);
	//var test = 'test';
	
    
		prodAdv.call("ItemSearch", {SearchIndex: "Books", Title: "Unmade (The Lynburn Legacy Book 3)", ResponseGroup : "Medium", ItemPage : "1"}, 
		function test(err, result) {
					var item = result.ItemSearchResponse.Items[0].Item[0];
					
					console.log(item.ItemAttributes[0].ReleaseDate[0]);
				/**try {
					var item = result.ItemSearchResponse.Items[0].Item[0];
					console.log('{' +
					'"date" : "' + entry.date + '" \n' + 
					'"spec-title" : "' + entry.title + '" \n' + 
					'"author" : "' + entry.author + '" \n' + 
					'"US-Amazon" : "' + entry.amazon + '" \n' + 
					'"CA-Amazon" : "' + (item.DetailPageURL[0]) + '" \n' +
					'"ASIN" : "' + item.ASIN + '" \n' +
					'"Image Link" : "' + item.MediumImage[0].URL[0] + '" \n' +
					'"Title" : "' + item.ItemAttributes[0].Title[0] + '" \n' +
					'"Desc" : ' + JSON.stringify(item.EditorialReviews[0].EditorialReview[0].Content[0]));
					console.log("},");
				} catch (err) {
					console.log('{' +
					'"date" : "' + entry.date + '" \n' + 
					'"spec-title" : "' + entry.title + '" \n' + 
					'"author" : "' + entry.author + '" \n' + 
					'"US-Amazon" : "' + entry.amazon);
					console.log("},");				
				}**/
		})
			 
		
	num = num + 1;
	if (num >= max)
		return false;
 });

		console.log("]");
/** Item Look Up By ID **/
/*
prodAdv.call("ItemLookup", {ItemId: "0804178321", ResponseGroup : "Medium"}, function(err, result) {
  console.log(JSON.stringify(result.ItemLookupResponse.Items[0].Item[0].ItemAttributes[0].Title[0])); //Item Info
  console.log(JSON.stringify(result.ItemLookupResponse.Items[0].Item[0].ASIN[0])); //Item Info
  console.log(JSON.stringify(result.ItemLookupResponse.Items[0].Item[0].DetailPageURL[0])); //Item Info
  console.log(JSON.stringify(result.ItemLookupResponse.Items[0].Item[0].MediumImage[0].URL[0])); //Item Info
})
*/


/*
var books = jsonstr;
var num = 0;
books.forEach(function(entry) {
	num = num + 1;
	
	if (num > 20)
		return false;
	console.log(entry.title);
	//console.log(strDate.split('T')[0]);
 });
 */
/*
prodAdv.call("ItemLookup", {ItemId: "0804178321", ResponseGroup : "Medium"}, function(err, result) {
  console.log(JSON.stringify(result.ItemLookupResponse.Items[0].Item[0].ItemAttributes[0].Title[0])); //Item Info
  console.log(JSON.stringify(result.ItemLookupResponse.Items[0].Item[0].ASIN[0])); //Item Info
  console.log(JSON.stringify(result.ItemLookupResponse.Items[0].Item[0].DetailPageURL[0])); //Item Info
  console.log(JSON.stringify(result.ItemLookupResponse.Items[0].Item[0].MediumImage[0].URL[0])); //Item Info
})
*/


/*
var books = jsonstr;
var num = 0;
books.forEach(function(entry) {
	num = num + 1;
	
	if (num > 20)
		return false;
	console.log(entry.title);
	//console.log(strDate.split('T')[0]);
 });
 */