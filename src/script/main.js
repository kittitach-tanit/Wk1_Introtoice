/* JavaScript for header.netAbout */
/* *Spacings are there to provide protability in debugging. */
				function showAdminInfo() {
					var ans = confirm("This pseudo social network profile page is brought to you by:\n- Arm, Kittitach Pongpairoj, 5631211121\n- Nick, Tanit Suenghataipotn, 5631255821\n\nClick \"OK\" to have some fun.");
					if(ans==true) haveSomeFun();
					else;
				}
				function haveSomeFun() {
					var fun = confirm("Having fun are we ?\n I know you are.");
					if(fun==true) haveSomeMoreFun();
					else showAdminInfo();
				}
				function haveSomeMoreFun() {
					var fun = confirm("Never get tired of this isn't it.\nIt's going to be a long day.");
					if(fun==true) haveSuperFun();
					else showAdminInfo();
				}
				function haveSuperFun() {
					var fun = confirm("Still having fun ?\nSay it ain\'t so.");
					if(fun==true) haveSomeFun();
					else showAdminInfo();
				}

				function clearTxtBox() {
					document.getElementById('commentTxt').vaule="";
				}
				function errSubmit() {
					alert("Function not available.\nNo server-side implementations yet.");
					
				}
