DOM.children=function children(ele,str){
    var children=ele.childNOdes;
    var a=[];
    if(typeof str=="object"){
        str=str.toUpperCase();
        for(var i=0;i<children.length;i++){
            if(str==children[i].tagName){
              a[a.length]=children[i];
            }
        }
    }
    else if(str==="undefined"){
        for(var j=0;j<children[j].length;j++){
            if(children.nodeType==1){
                a[a.length]=children[j];
            }
        }
    }
    else {
        throw new Error"±ðÄÖÁË¡£"
    }

}