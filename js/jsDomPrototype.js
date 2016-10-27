HTMLElement.prototype.first_child=function(){
    var e1 = this.firstChild;
    if (e1 && e1.nodeType == 3) {
        var reg = /\S/g;
        var r1 = reg.exec(e1.nodeValue);
        if (r1 == null) {
            e1 = e1.nextSibling;

        }
    }
    return e1;
}
/*
* 原型封装1.前兄弟previousSibling
*         2.所有元素节点 childNodes
* */

HTMLElement.prototype.previous_brothers=function(){
    var e1 = this.previousSibling;

    if (e1 && e1.nodeType == 3) {
        var reg = /\S/g;
        var r1 = reg.exec(e1.nodeValue);
        if (r1 == null) {
            e1 = e1.previousSibling;

        }
    }
    return e1;
}

HTMLElement.prototype.next_brothers=function(){
    var e1 = this.nextSibling;

    if (e1 && e1.nodeType == 3) {
        var reg = /\S/g;
        var r1 = reg.exec(e1.nodeValue);
        if (r1 == null) {
            e1 = e1.nextSibling;

        }
    }
    return e1;
}

//HTMLElement.prototype.children=function(){
//   var arr=[];
//
//    var e1 = this.childNodes;
//    for(var i=0;i<e1.length;i++){
//        if (e1 && e1.nodeType == 3) {
//            var reg = /\S/g;
//            var r1 = reg.exec(e1.nodeValue);
//            arr.push(r1);
//            if (r1 == null) {
//                e1 = e1.childNodes;
//
//            }
//        }
//    }
//    alert(arr);
//
//    return e1;
//}

//HTMLElement.prototype.child_Node = function() {
//    var el = this.childNodes;
//    var el2 = [];
//
//    for (var i = 0; i < el.length; i++) {
//        if (el[i].hasChildNodes()) {
//            el2.push(el[i].child_Node());
//        }
//        if (el[i].nodeType == 1) {
//            el2.push(el[i].nodeName)
//        } else if (el[i].nodeType == 3) {
//            var reg = /\S/g;
//            var v = reg.exec(el[i].nodeValue);
//            if (v != null) {
//                el2.push(el[i].nodeValue)
//            }
//        }
//    }
//    return el2;
//}

HTMLElement.prototype.child_Nodes=function(){
    var e1=this.childNodes;
    var ee=new Array();
    for(var i=0;i<e1.length;i++){
        if(e1[i].nodeType==3){
            var  reg=/\S/g;
            var r1=reg.exec(e1[i].nodeValue);
            if(r1!=null){
                ee.push(e1[i]);
            }
        }else{
            ee.push(e1[i]);
        }
    }
    return ee;
}