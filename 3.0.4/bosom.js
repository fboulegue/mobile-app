function own_get_nextpics() {
			own_picnumold = new Array();
			own_picarray = new Array();
			for (var own_i = 0; own_i < 9; own_i++)
			{
				var own_picnum
				own_picnum = own_getRandom(1, 100);
				var v_isdouble = isdouble(own_picnum);
				if (v_isdouble == false) {
					var own_vlink = "<a href='http://www.teainc.me/grams/bosom/"+own_picnum+".png'><img src='http://www.teainc.me/grams/bosom/"+own_picnum+".png' alt='bosom 1' width='225px' height='225px' class='img'/></a>"
					document.getElementById('Gallery').getElementsByTagName('li')[own_i].innerHTML = own_vlink;
				}
				else
				{
					i--;
				}
			}
			
			function own_getRandom(own_min, own_max) {
				var own_r;
				
				do {
					own_r = Math.random();
				}
				while(own_r == 1.0);
				
					return own_min + parseInt(own_r * (own_max-own_min+1));
				}
			}
			
			function isdouble(own_picnum) {
				var bool_isdouble = false;
				for (var i = 0; i < 9; ++i)
				{
					if (own_picnumold[i] == own_picnum)
					{
						bool_isdouble = true;
					}
				}
				if (bool_isdouble == false)
				{
					var laenge = own_picnumold.length;
					if (laenge == 0)
					own_picnumold[0] = own_picnum;
					else
					own_picnumold[laenge] = own_picnum;
					return false;
				}
				else
				{
					return true;
				}									  
			}