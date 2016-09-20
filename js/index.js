/*index主页函数*/
var wrapMask=document.getElementsByClassName("wrapMask")[0];
var checkCities=document.getElementsByClassName("checkCities")[0];
var cityListsProvince=document.getElementsByClassName("cityLists")[0];
var cityLis=cityListsProvince.getElementsByTagName("li");
var cityLists=document.getElementsByClassName("cityLists")[1];
var cityLi=cityLists.getElementsByTagName("li");
var goodsInput=document.getElementsByClassName("goodsInput")[1];
var search=document.getElementsByClassName("search")[1];
var inputSearch=document.getElementsByClassName("inputSearch")[0];

checkCities.addEventListener("touchend",function(){
	inputSearch.style.display="none";
	cityLists.style.display="none";
	cityListsProvince.style.display="block";
	wrapMask.style.display="block";
});

for(i=0;i<cityLis.length;i++){
	cityLis[i].index=i;
	cityLis[i].addEventListener("touchend",function(){
		for(j=0;j<cityLis.length;j++){
			cityLis[j].style.backgroundColor="#f7f7f7";
		}
		cityLis[this.index].style.backgroundColor="#ccc";
		cityListsProvince.style.display="none";
		cityLists.style.display="block";
		cityLi[0].innerText=cityLis[this.index].innerText;
	});	
}

for(i=0;i<cityLi.length;i++){
	cityLi[i].index=i;
	cityLi[i].addEventListener("touchend",function(){
		wrapMask.style.display="none";
		checkCities.innerText=cityLi[this.index].innerText;
		checkCities.setAttribute("class","checkCities");
	});	
}

	goodsInput.addEventListener("touchend",function(){
	inputSearch.style.display="none";
		cityLists.style.display="none";
		cityListsProvince.style.display="none";
			wrapMask.style.display="block";
			inputSearch.style.display="block";
			goodsInput.setAttribute("class","goodsInputGo");
			search.setAttribute("class","searchGo");
	});	
	search.addEventListener("touchend",function(){
		cityLists.style.display="none";
		cityListsProvince.style.display="none";
			wrapMask.style.display="block";
			inputSearch.style.display="block";
			goodsInput.setAttribute("class","goodsInputGo");
			search.setAttribute("class","searchGo");
	});	

/*index主页函数*/