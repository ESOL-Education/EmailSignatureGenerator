//function reviewFunction(){
//		if (document.getElementById('review').checked) { 
//      document.getElementById('name').innerHTML = nm.value;
//      document.getElementById('position').innerHTML = pos.value;
//      document.getElementById('tel').innerHTML = tl.value;
//      document.getElementById('mobile').innerHTML = mb.value;
//      }
//}


function reviewFunction(){
	  
		if(fb.value.length == 0)
		{
			document.getElementById('imgfacebook').style.display  = "non";
		}
		else
		{
			document.getElementById('imgfacebook').style.display  = "inline";
		};

		if(tw.value.length == 0)
		{
			document.getElementById('imgtwitter').style.display  = "none";
		}
		else
		{
			document.getElementById('imgtwitter').style.display  = "inline";
		};
	
		if(ins.value.length == 0)
		{
			document.getElementById('imginstagram').style.display  = "none";
		}
		else
		{
			document.getElementById('imginstagram').style.display  = "inline";
		};
	
		if(yo.value.length == 0)
		{
			document.getElementById('imgyoutube').style.display  = "none";
		}
		else
		{
			document.getElementById('imgyoutube').style.display  = "inline";
		};

		if(lin.value.length == 0)
		{
			document.getElementById('imglinkedin').style.display  = "none";
		}
		else
		{
			document.getElementById('imglinkedin').style.display  = "inline";
		};
		
	  document.getElementById('sign').innerHTML = sin.value;
      document.getElementById('name').innerHTML = nm.value;
      document.getElementById('position').innerHTML = pos.value;
      document.getElementById('additional').innerHTML = addi.value;
      document.getElementById('phone').innerHTML = tl.value;
//      document.getElementById('mobile').innerHTML = mb.value;
	  document.getElementById('emaillink').innerHTML = em.value;
	  document.getElementById('emaillink').href = "mailto:" + em.value;
	  document.getElementById('facebooklink').href = fb.value;
	  document.getElementById('twitterlink').href = tw.value;
	  document.getElementById('instagramlink').href = ins.value;
	  document.getElementById('youtubelink').href = yo.value;
	  document.getElementById('linkedinlink').href = lin.value;
	  

	
	
}



function getFunction(){
		if (document.getElementById('get').checked) { 
		var e=document.getElementById("htmlcode");
      var content=e.innerHTML;
      alert(content);
         
 		}
 	
		}


function CopyToClipboard(containerid) {
if (document.selection) { 
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy"); 

} else if (window.getSelection) {
    var range = document.createRange();
     range.selectNode(document.getElementById(containerid));
     window.getSelection().addRange(range);
     document.execCommand("copy");
     alert("text copied") 
}}




function copyClipboard() {
  var elm = document.getElementById("htmlcode");
  // for Internet Explorer

  if(document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(elm);
    range.select();
    document.execCommand("Copy");
    showNotificationBar('Your email signature has been successfully copied to clipboard, please paste directly (CMD/Ctrl+v) into your email signature.',4000,'#BDE5F8','#00529B',30 );
  }
  else if(window.getSelection) {
    // other browsers

    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(elm);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
    showNotificationBar('Your email signature has been successfully copied to clipboard, please paste directly (CMD/Ctrl+v) into your email signature.',4000,'#BDE5F8','#00529B',30 );
  }
}



function showNotificationBar(message, duration, bgColor, txtColor, height) {

	/*set default values*/
	duration = typeof duration !== 'undefined' ? duration : 4000;
	bgColor = typeof bgColor !== 'undefined' ? bgColor : "#3da443";
	txtColor = typeof txtColor !== 'undefined' ? txtColor : "#ffffff";
	height = typeof height !== 'undefined' ? height : 30;
	/*create the notification bar div if it doesn't exist*/
	if ($('#notification-bar').length == 0) {
		var HTMLmessage = "<div class='notification-message' style='font-family: Verdana,Tahoma; font-size: 10pt;text-align:center; line-height: " +
			height + "px;'> " + message + " </div>";
		$('body').prepend("<div id='notification-bar' style='display:none; width:100%; height:" + height + "px; background-color: "
			+ bgColor + "; position: fixed; z-index: 100; color: " + txtColor + ";border-bottom: 1px solid " + txtColor + "; top: 0px;'>"
			+ HTMLmessage + "</div>");
	}
	else
	{
		$('#notification-bar').css('background-color', bgColor);
        $('#notification-bar').css('color', txtColor);
		$('div.notification-message').text ( message ) ;
	}
	/*animate the bar*/
	$('#notification-bar').slideDown(function() {
		setTimeout(function() {
			$('#notification-bar').slideUp(function() {});
		}, duration);
	});
}
