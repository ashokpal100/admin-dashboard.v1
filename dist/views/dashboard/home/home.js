angular.module("adminApp").controller("HomeCtrl",["$scope","Notification",function(e,a){console.log("came here HomeCtrl"),a.success({message:"login successfully...!!!"}),e.config={title:"Line Chart",subtitle:"Line Chart Subtitle",debug:!0,showXAxis:!0,showYAxis:!0,showLegend:!0,stack:!1,dataZoom:{show:!0,start:70},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar","stack","tiled"]},restore:{show:!0},saveAsImage:{show:!0}},calculable:!0}},e.multiple=[{name:"page.load",datapoints:[{x:2001,y:1012},{x:2002,y:1023},{x:2003,y:1045},{x:2004,y:1062},{x:2005,y:1032},{x:2006,y:40},{x:2007,y:1023},{x:2008,y:1090},{x:2009,y:10},{x:2010,y:1012}]},{name:"page.firstPaint",datapoints:[{x:2001,y:22},{x:2002,y:13},{x:2003,y:35},{x:2004,y:521},{x:2005,y:32},{x:2006,y:40},{x:2007,y:63},{x:2008,y:80},{x:2009,y:20},{x:2010,y:25}]}]}]);