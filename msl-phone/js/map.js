/*-------------------------------------------------------------*/
			function getbiaoji() {
	            var lng = document.getElementByIdx_x("lng").value;
	            var lat = document.getElementByIdx_x("lat").value;
	
	            var map = new BMap.Map("container");
	            var point = new BMap.Point(lng, lat);
	            var marker = new BMap.Marker(point);
	            /*var opts = {
	              width: 410,     // 信息窗口宽度  
	                height: 100,     // 信息窗口高度  
	                title: "经销商地址"  // 信息窗口标题 
	            }
	            var infoWindow = new BMap.InfoWindow("移动拖拽 标记经销商地址:" + lng + lat, opts);  // 创建信息窗口对象 */
	
	
	            marker.enableDragging(); //启用拖拽
	            map.addControl(new BMap.NavigationControl()); //左上角控件
	            map.enableScrollWheelZoom(); //滚动放大
	            map.enableKeyboard(); //键盘放大
	
	            map.centerAndZoom(point, 13); //绘制地图
	            map.addOverlay(marker); //标记地图
	
	            map.openInfoWindow(infoWindow, map.getCenter());
	        }
	
	        function loand() {
	            var map = new BMap.Map("container");
	            var point = new BMap.Point(117.28, 31.25); //默认中心点
	            var marker = new BMap.Marker(point);
	            /*var opts = {
	             width: 410,     // 信息窗口宽度  
	                height: 100,     // 信息窗口高度  
	                title: "经销商地址"  // 信息窗口标题  
	            }
	            var infoWindow = new BMap.InfoWindow("移动拖拽 标记经销商地址", opts);  // 创建信息窗口对象*/
	
	
	            marker.enableDragging(); //启用拖拽
	            marker.addEventListener("dragend", function (e) {
	                point = new BMap.Point(e.point.lng, e.point.lat); //标记坐标（拖拽以后的坐标）
	                marker = new BMap.Marker(point);
	
	                document.getElementByIdx_x("lng").value = e.point.lng;
	                document.getElementByIdx_x("lat").value = e.point.lat;
	                infoWindow = new BMap.InfoWindow("当前位置<br />经度：" + e.point.lng + "<br />纬度：" + e.point.lat, opts);
	                
	
	                map.openInfoWindow(infoWindow, point);
	            })
	
	            map.addControl(new BMap.NavigationControl()); //左上角控件
	            map.enableScrollWheelZoom(); //滚动放大
	            map.enableKeyboard(); //键盘放大
	
	            map.centerAndZoom(point,14); //绘制地图
	            map.addOverlay(marker); //标记地图
	
	           /* map.openInfoWindow(infoWindow, map.getCenter());*/      // 打开信息窗口      
	       	}