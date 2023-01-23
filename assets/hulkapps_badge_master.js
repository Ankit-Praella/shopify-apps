function trustIconRequest(){
	var shop = Shopify.shop
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if (xhttp.response){
				var data = JSON.parse(xhttp.response);
				var badge_style_DB = false;
				var themeBadge = document.getElementsByClassName("hulkapps-trust-icons")
				
				var sectionBadge = document.getElementsByClassName("hulk_badge_true")
				
				for (var hulkb = 0; (hulkb < sectionBadge.length); ++hulkb) {
	    			sectionBadge[hulkb].innerHTML = '<div class="hulkapps_trust_wrapper"><div id="header_text"><h4 class="badge_icon">'+window.Heading1+'</h4></div><ul class="trust--icon--list" id="badge_list">'+data['li_string_value']+'</ul></div>'
				}
				for (var hulkb = 0; (hulkb < themeBadge.length); ++hulkb) {
					appendCode = themeBadge[hulkb].classList.contains("hulk_badge_true") 
					if(!appendCode){
						badge_style_DB = true
						themeBadge[hulkb].innerHTML = '<div class="hulkapps_trust_wrapper"><div id="header_text"><h4 class="badge_icon">'+data['trustbadge']['header_text']+'</h4></div><ul class="trust--icon--list" id="badge_list">'+data['li_string_value']+'</ul></div>'
					}
				}
				if (data['trustbadge']['header_text_fontfamily']){
					hulkAddCss("https://fonts.googleapis.com/css?family="+data['trustbadge']['header_text_fontfamily']);
				}
				var user_selection = ""
				if (badge_style_DB){
					var mobile_icon_color = data['trustbadge']['mobile_icon_color'] != null ? data['trustbadge']['mobile_icon_color'] : data['trustbadge']['desktop_icon_color']
					var mobile_icon_size = data['trustbadge']['mobile_icon_size'] != null ? data['trustbadge']['mobile_icon_size'] : data['trustbadge']['desktop_icon_size']

					user_selection = ".hulkapps_trust_wrapper ul li{display:inline-block!important;padding:0 10px!important;vertical-align:middle!important;margin-bottom:0!important;position: relative;}.hulkapps_trust_wrapper ul li img{width:"+data['trustbadge']['desktop_icon_size']+"px!important}.hulkapps_trust_wrapper ul li svg [class$='_0']{fill:"+data['trustbadge']['desktop_icon_color']+"!important}.hulkapps_trust_wrapper ul li svg [class$='_a']{fill:"+data['trustbadge']['second_desktop_icon_color']+"!important}.hulkapps_trust_wrapper ul li svg{width:"+data['trustbadge']['desktop_icon_size']+"px!important}@media only screen and (max-width:480px){.hulkapps_trust_wrapper ul li img{width:"+mobile_icon_size+"px!important}.hulkapps_trust_wrapper ul li svg [class$='_0']{fill:"+mobile_icon_color+"}.hulkapps_trust_wrapper ul li svg{width:"+mobile_icon_size+"px!important}}.hulkapps_trust_wrapper .badge_icon{font-size:"+data['trustbadge']['header_textsize']+"px!important;color:"+data['trustbadge']['header_text_color']+"!important;text-align:"+data['trustbadge']['header_text_alignment']+"!important;font-family:"+data['trustbadge']['header_text_fontfamily']+"!important;text-transform:none!important}.trust--icon--list{margin-left:0!important;list-style:none!important}#badge_list{text-align:"+data['trustbadge']['icon_alignment']+"!important} .hulk-custom-tooltip{min-width: 200px;z-index: 99;position: absolute;left: 50%;top: 100%;transform: translateX(-50%);margin-bottom: 0;background: rgba(0,0,0,0.9);color: #fff;font-size: 14px;padding: 4px 4px;border-radius: 4px;display:none;}.hulk-custom-tooltip:before{content: '';border-bottom: 8px solid rgba(0,0,0,0.9);border-left: 8px solid transparent;border-right: 8px solid transparent;position: absolute;bottom: 100%;left: 50%;transform: translateX(-50%)}.hulkapps_trust_wrapper ul li:hover .hulk-custom-tooltip{display:block;}.hulk-custom-tooltip.hulk-tooltip-top{top:auto;bottom:100%;margin-bottom: 10px;}.hulk-custom-tooltip.hulk-tooltip-top:before{border-top: 8px solid rgba(0,0,0,0.9);border-bottom:none;bottom: auto;top: 100%;}ul#badge_list a{border: none !important;}";
				}
				if (user_selection != ""){
					var sheet = document.createElement('style')
			    	sheet.innerHTML = user_selection;
			    	document.body.appendChild(sheet);
				}
		    // add css form public
		    function hulkAddCss(fileName) {
		      var head = document.head;
		      var link = document.createElement("link");
		      link.type = "text/css";
		      link.rel = "stylesheet";
		      link.href = fileName;
		      head.appendChild(link);
		    }
		    for (var hulkb = 0; (hulkb < themeBadge.length); ++hulkb) {
					appendCode = themeBadge[hulkb].classList.contains("hulk_badge_true") 
					if(!appendCode){
			     	if (data['trustbadge']['header_text_weight'] == "italic_900" ){
				     	themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontWeight = "900";
			      	themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontStyle = 'italic';
			     	}else if (data['trustbadge']['header_text_weight'] == "italic_800"){
				      themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontWeight = "800";
				      themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontStyle = 'italic';
			     	}else if ( data['trustbadge']['header_text_weight'] == "italic_700"){
				      themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontWeight = "700";
				      themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontStyle = 'italic';
			     	}else if ( data['trustbadge']['header_text_weight'] == "italic_600"){
				      themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontWeight = "600";
				      themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontStyle = 'italic';
			     	}else if (data['trustbadge']['header_text_weight'] == "italic_500"){
							themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontWeight = "500";
							themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontStyle = 'italic';
						}else if (data['trustbadge']['header_text_weight'] == "italic_400"){
							themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontWeight = "400";
							themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontStyle = 'italic';
						}else if (data['trustbadge']['header_text_weight'] == "italic_300"){
							themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontWeight = "300";
							themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontStyle = 'italic';
						}else if (data['trustbadge']['header_text_weight'] == "italic_200"){
							themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontWeight = "200";
							themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontStyle = 'italic';
						}else if (data['trustbadge']['header_text_weight'] == "italic_100"){
							themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontWeight = "100";
							themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontStyle = 'italic';
						}else{
				      themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontWeight = data['trustbadge']['header_text_weight'];
				      themeBadge[hulkb].getElementsByClassName('badge_icon')[0].style.fontStyle = '';
			     	}
				}
			}
				var node = document.createElement('div')

				var FreePlan = data['no_water_mark'];
				if(!FreePlan){
					node.innerHTML = "<p style='text-align:center; font-size: smaller;' class='hulk-powered-wrapper text-right'>Trust Badges powered by <a href='https://www.hulkapps.com/?utm_campaign=poweredby&utm_medium=hulkapps&utm_source=bm_app' alt='Badge Master powered by HulkApps' target='_blank'> HulkApps</a></p>";
				}
				// And then get the node where you want to append the created node after
				var existingNode = document.getElementById('badge_list')

				// Finally you can append the created node to the exisitingNode
				existingNode.after(node)
  			}
		}
	}
	xhttp.open("GET", "https://badgemaster.hulkapps.com/frontend/get_trust_icons?shop="+shop);
	xhttp.send();
}
trustIconRequest();


function paymentIconRequest(){
	var shop = Shopify.shop
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if (xhttp.response){
				var data = JSON.parse(xhttp.response);
				var payment_style_DB = false;
				if (data['trustpayment']['header_text_fontfamily']){
					hulkAddCss("https://fonts.googleapis.com/css?family="+data['trustpayment']['header_text_fontfamily']);
				}
				var hulkpicon = document.getElementsByClassName("hulkapps-payment-icons")
				var payment_icon = document.getElementsByClassName("hulk_icon_true")
				for (var hulki = 0; hulki < payment_icon.length; ++hulki) {
	    			payment_icon[hulki].innerHTML = '<div class="hulkapps_payment_wrapper"><div id="header_text"><h4 class="payment-icon"> '+window.Heading2+' </h4></div><ul class="payment--icon--list" id="payment_icon_list">'+data['li_string_value']+'</ul></div>'
				}
				for (var hulki = 0; hulki < hulkpicon.length; ++hulki) {
					appendCode = hulkpicon[hulki].classList.contains("hulk_icon_true") 
					if(!appendCode){
						payment_style_DB = true
						hulkpicon[hulki].innerHTML = '<div class="hulkapps_payment_wrapper"><div id="header_text"><h4 class="payment-icon"> '+data['trustpayment']['header_text']+' </h4></div><ul class="payment--icon--list" id="payment_icon_list">'+data['li_string_value']+'</ul></div>'
					}
				}
				var user_selection = ""
				if (payment_style_DB){

					var mobile_icon_color = data['trustpayment']['mobile_icon_color'] != null ? data['trustpayment']['mobile_icon_color'] : data['trustpayment']['desktop_icon_color']
					var mobile_icon_size = data['trustpayment']['mobile_icon_size'] != null ? data['trustpayment']['mobile_icon_size'] : data['trustpayment']['desktop_icon_size']

			 		var user_selection = ".hulkapps_payment_wrapper ul li{display:inline-block!important;padding:0 10px!important;vertical-align:middle!important;margin-bottom:0!important}.hulkapps_payment_wrapper ul li img{width:"+data['trustpayment']['desktop_icon_size']+"px!important}.hulkapps_payment_wrapper ul li svg{width:"+data['trustpayment']['desktop_icon_size']+"px!important}.hulkapps_payment_wrapper ul li.payment--font{font-size:"+data['trustpayment']['desktop_icon_size']+"px!important;color:"+data['trustpayment']['desktop_icon_color']+"!important}.hulkapps_payment_wrapper ul li.payment--font [class*=' icofont-'],.hulkapps_payment_wrapper ul li.payment--font [class^=icofont-]{font-size:"+data['trustpayment']['desktop_icon_size']+"px!important;color:"+data['trustpayment']['desktop_icon_color']+"!important}@media only screen and (max-width:480px){.hulkapps_payment_wrapper ul li.payment--font{font-size:"+mobile_icon_size+"px!important;color:"+mobile_icon_color+"}.hulkapps_payment_wrapper ul li.payment--font [class*=' icofont-'],.hulkapps_payment_wrapper ul li.payment--font [class^=icofont-]{font-size:"+mobile_icon_size+"px!important;color:"+mobile_icon_color+"}.hulkapps_payment_wrapper ul li img{width:"+mobile_icon_size+"px!important}.hulkapps_payment_wrapper ul li svg{width:"+mobile_icon_size+"px!important}}.payment-icon{font-size:"+data['trustpayment']['header_textsize']+"px!important;color:"+data['trustpayment']['header_text_color']+"!important;text-align:"+data['trustpayment']['header_text_alignment']+"!important;font-family:"+data['trustpayment']['header_text_fontfamily']+"!important;text-transform:none!important}.payment--icon--list{margin-left:0!important;list-style:none!important}#payment_icon_list{text-align:"+data['trustpayment']['icon_alignment']+"!important}";
				}
				if (user_selection != ""){	
					var sheet = document.createElement('style')
					sheet.innerHTML = user_selection;
					document.body.appendChild(sheet);
				}
			  // add css form public

				function hulkAddCss(fileName) {
					var head = document.head;
					var link = document.createElement("link");
					link.type = "text/css";
					link.rel = "stylesheet";
					link.href = fileName;
					head.appendChild(link);
				}
				for (var hulki = 0; hulki < hulkpicon.length; ++hulki) {
					appendCode = hulkpicon[hulki].classList.contains("hulk_icon_true") 
					if(!appendCode){
						if (data['trustpayment']['header_text_weight'] == "italic_900"){
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontWeight = "900";
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontStyle = 'italic';
						}else if (data['trustpayment']['header_text_weight'] == "italic_800"){
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontWeight = "800";
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontStyle = 'italic';
						}else if (data['trustpayment']['header_text_weight'] == "italic_700"){
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontWeight = "700";
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontStyle = 'italic';
						}else if (data['trustpayment']['header_text_weight'] == "italic_600"){
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontWeight = "600";
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontStyle = 'italic';
						}else if (data['trustpayment']['header_text_weight'] == "italic_500"){
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontWeight = "500";
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontStyle = 'italic';
						}else if (data['trustpayment']['header_text_weight'] == "italic_400"){
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontWeight = "400";
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontStyle = 'italic';
						}else if (data['trustpayment']['header_text_weight'] == "italic_300"){
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontWeight = "300";
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontStyle = 'italic';
						}else if (data['trustpayment']['header_text_weight'] == "italic_200"){
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontWeight = "200";
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontStyle = 'italic';
						}else if (data['trustpayment']['header_text_weight'] == "italic_100"){
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontWeight = "100";
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontStyle = 'italic';
						}else{
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontWeight = data['trustpayment']['header_text_weight'];
							hulkpicon[hulki].getElementsByClassName('payment-icon')[0].style.fontStyle = '';
						}
					}
			}

				var node = document.createElement('div')
				var FreePlan = data['no_water_mark'];
				if(!FreePlan){
					node.innerHTML = "<p style='text-align:center; font-size: smaller;' class='hulk-powered-wrapper text-right'>Trust Badges powered by <a href='https://www.hulkapps.com/?utm_campaign=poweredby&utm_medium=hulkapps&utm_source=bm_app' alt='Badge Master powered by HulkApps' target='_blank'> HulkApps</a></p>";
				}
				// And then get the node where you want to append the created node after
				var existingNode = document.getElementById('payment_icon_list')

				// Finally you can append the created node to the exisitingNode
				if(existingNode){
					existingNode.after(node)
				}
		}
	}
}
	xhttp.open("GET", "https://badgemaster.hulkapps.com/frontend/get_payment_icons?shop="+shop);
	xhttp.send();
}
paymentIconRequest();