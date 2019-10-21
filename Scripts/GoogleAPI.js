// JavaScript For Google API

var CLIENT_ID = '179336743554-0umo1ehv88r955104uv1rq8r6rcrgk8q.apps.googleusercontent.com';
var API_KEY = 'AIzaSyAP_fpzVgVSbPbY9VMP19qSDFu3FfBWYiw';

var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

	
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.settings.basic';	


// var authorizeButton = document.getElementById('authorize_button');
// var signoutButton = document.getElementById('signout_button');
var useremailaddress = '';

function handleClientLoad() {
   gapi.load('client:auth2', initClient);
}

function initClient() {

   gapi.client.init({
       apiKey: API_KEY,
       clientId: CLIENT_ID,
       discoveryDocs: DISCOVERY_DOCS,
       scope: SCOPES
    }).then(function() {
       gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
       updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());


      //authorizeButton.onclick = handleAuthClick;
      //signoutButton.onclick = handleSignoutClick;


      //EmailFormButton.onclick = handleSendEmail;
   });


}

function updateSigninStatus(isSignedIn) {
   if (isSignedIn) {

      //authorizeButton.style.display = 'none';
      //signoutButton.style.display = 'block';
      //EmailForm.style.display = 'block';

      gapi.client.gmail.users.getProfile({
         'userId': 'me'
      }).then(function(res) {
		  useremailaddress = res.result.emailAddress;
		  setSignatures()
          //document.getElementById('compose-email-id').value(res.result.emailAddress);
		  //document.getElementById("htmlcode");
		  //setSignatures('<p>Hello there ......</p>')
		  //alert("Signature Successfully Pushed !!");
      });

   } else {

       gapi.auth2.getAuthInstance().signIn();

      //authorizeButton.style.display = 'block';
      //signoutButton.style.display = 'none';
      //EmailForm.style.display = 'none';

   }
}

function handleAuthClick(event) {
   gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick(event) {
   gapi.auth2.getAuthInstance().signOut();
}
	
	
	
function setSignatures() {
	
	var elmHTML = document.getElementById("htmlcode").innerHTML; 
	//alert(elmHTML);

    var userselection = confirm("Are you sure you want to replace your current email signature with this one ?");
    if (userselection == true){

        var request = gapi.client.gmail.users.settings.sendAs.update({
        'userId': 'me',
        'sendAsEmail': useremailaddress,
        'signature': elmHTML
        });

        request.execute(function(resp) {
            console.log(resp);
            showNotificationBar('Signature has been successfully installed for ' + useremailaddress + ' ✔',4000,'#DFF2BF','#4F8A10',30 );
        });


    }
    else{

        alert("Process has been canceled.");

    }




}



	