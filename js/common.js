/*common公共函数*/

var menuLink=document.getElementsByClassName("menuLink");
var menuLinkArr=["index.html","member.html","classify.html","shoppingCart.html","mine.html"];

mui.init();

for(i=0;i<menuLink.length;i++){
	menuLink[i].index=i;
	menuLink[i].addEventListener("touchend",function(){
		window.location.href=menuLinkArr[this.index];
	});	
}

/*common公共函数*/