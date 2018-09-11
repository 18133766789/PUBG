$(function(){
	var link=document.createElement("link");
	link.rel="stylesheet";
    link.href="css/footer.css";
	document.head.appendChild(link);
	$("#foot").load("footer.html",function(html){
		document.getElementById("foot").innerHTML=html;
	})
});