"use strict";function DataService(a){this.dataPoints=a,this.changeValue=_changeValue}var _changeValue=function(a,t){var e=this.dataPoints.findIndex(function(t){return t.id===a});if(e>=0){var n=this.dataPoints[e].value+t;n<=0?this.dataPoints[e].value=0:this.dataPoints[e].value=n}return this.dataPoints};!function(){var a=new DataService([{id:1,value:25},{id:2,value:50},{id:3,value:75}]),t=new Ractive({el:"#container",template:"#template",data:{dataPoints:a.dataPoints,selectedDataPoint:a.dataPoints[0].id,getBackgroundColor:function(a){return a>=100?"red":"#99BCC8"}}});t.on("changeDataValue",function(t,e){var n=this.get("selectedDataPoint");this.set("dataPoints",a.changeValue(n,e),{easing:"easeOut"})})}();