// 视屏遮罩层隐藏出现
		function showDiv(){
			document.getElementById('close-btn').style.display='block';
		}
		function closeDiv(){
			document.getElementById('close-btn').style.display='none';
		}

		// 点击按钮视屏播放暂停
		var v1=document.getElementById("video-1");
		// console.log("视频长度"+v1.duration);
		// console.log("视频状态:"+v1.paused);
		v1.volume=.7;
		// v1.playbackRate=10;
		var start=document.getElementById("haha");
		var stop=document.getElementById("pause");
		start.onclick=function(){
			v1.play();
		}
		stop.onclick=function(){
			v1.pause();
		}

		/**********晴天雾天雨天************ */
		// console.log(pic11)
			// var pic1 = document.getElementById("aaa");
			// var pic11 = pic1.children;
			// console.log(pic11)
			// pic11.onmouseover = function(){
			// 	pic11.style.background = "red";
			// }
			// for(var i=0;i<pic11.length;i++){
			// 	pic11[i].style.opacity = 0.5;
			// }
		
		var pic1 = document.getElementById("pq1");
		var pic2 = document.getElementById("pq2");
		var pic3 = document.getElementById("pq3");
		/*图片1*/
		pic1.onmouseover=function(){
			pic1.style.width=6400+"px";
			pic1.style.opacity=1;
			pic1.style.webkitTransition = 'all 0.5s ease-in-out';
		}
		pic1.onmouseout=function(){
			pic1.style.width=document.getElementById("pq1".width);
			pic1.style.opacity=0.5;
		}
		/*图片2*/
		pic2.onmouseover=function(){
			pic2.style.width=6400+"px";
			pic2.style.opacity=1;
			pic2.style.transition = 'all 0.5s ease-in-out';
			
		}
		pic2.onmouseout=function(){
			pic2.style.width=document.getElementById("pq2".width);
			pic2.style.opacity=0.5;		
		}
		/*图片3*/
		pic3.onmouseover=function(){
			pic3.style.width=6400+"px";
			pic3.style.opacity=1;
			pic3.style.transition = 'all 0.5s ease-in-out';
		}
		pic3.onmouseout=function(){
			pic3.style.width=document.getElementById("pq3".width);
			pic3.style.opacity=0.5;
		}
		
		/*****************天气地形*********************/ 
		function showpic1(){
			document.getElementById("dx1").style.display = 'none';
			document.getElementById("tq1").style.display = 'block';
		}

		function showpic2(){
			document.getElementById("dx1").style.display = 'block';
			document.getElementById("tq1").style.display = 'none';
		}

		// 获取按钮点击地形
		var clk = document.getElementById("dx");
		var tqq = document.getElementById("yc")
		var dxx = document.getElementById("xs")
		 	clk.onclick=function(){
				 tqq.style.display = 'block';
				 dxx.style.opacity =0;
				 dxx.style.transition = 'all 1s linear';
				
			 }
		// 获取按钮点击天气
		var clk1 = document.getElementById("tq");
		var tqq1 = document.getElementById("xs")
		var dxx1 = document.getElementById("yc")
		 	clk1.onclick=function(){
				tqq1.style.opacity = 1;
				dxx1.style.display = 'none';
				// tqq1.style.transition = 'all 1s ease-in-out';
			 }



		var pic4 = document.getElementById("pq4");
		var pic5 = document.getElementById("pq5");
		var pic6 = document.getElementById("pq6");
		var pic7 = document.getElementById("pq7");
		var pic8 = document.getElementById("pq8");
		pic4.onmouseover=function(){
			pic4.style.width=6100+"px";
			pic4.style.opacity=1;
			pic4.style.webkitTransition = 'all 0.5s ease-in-out';
		}
		pic4.onmouseout=function(){
			pic4.style.width=document.getElementById("pq4".width);
			pic4.style.opacity=0.5;		
		}
		pic5.onmouseover=function(){
			pic5.style.width=6100+"px";
			pic5.style.opacity=1;
			pic5.style.webkitTransition = 'all 0.5s ease-in-out';
		}
		pic5.onmouseout=function(){
			pic5.style.width=document.getElementById("pq5".width);
			pic5.style.opacity=0.5;		
		}
		pic6.onmouseover=function(){
			pic6.style.width=6100+"px";
			pic6.style.opacity=1;
			pic6.style.webkitTransition = 'all 0.5s ease-in-out';
		}
		pic6.onmouseout=function(){
			pic6.style.width=document.getElementById("pq6".width);
			pic6.style.opacity=0.5;		
		}
		pic7.onmouseover=function(){
			pic7.style.width=6100+"px";
			pic7.style.opacity=1;
			pic7.style.webkitTransition = 'all 0.5s ease-in-out';
		}
		pic7.onmouseout=function(){
			pic7.style.width=document.getElementById("pq7".width);
			pic7.style.opacity=0.5;		
		}
		pic8.onmouseover=function(){
			pic8.style.width=6100+"px";
			pic8.style.opacity=1;
			pic8.style.webkitTransition = 'all 0.5s ease-in-out';
		}
		pic8.onmouseout=function(){
			pic8.style.width=document.getElementById("pq8".width);
			pic8.style.opacity=0.5;		
		}