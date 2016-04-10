window.fbAsyncInit = function() {
    FB.init({
        appId: '230170050360219',
       secret: '3ba998ce421b66303fd5cdfdbe7cfce4',
        cookie: true,
        xfbml: true,
        //channelUrl: 'http://www.bunchofus.com/app/fbinclude.phpchannel.php',
        oauth: true
        });
    };
(function() {
    var e = document.createElement('script');
    e.async = true;e.src = document.location.protocol +'//connect.facebook.net/en_US/all.js';
    document.getElementById('fb-root').appendChild(e);}());

function CallAfterLogin(){
    FB.login(function(response) {       
        if (response.status === "connected") 
        {
            LodingAnimate(); //Animate login
            FB.api('/me', function(data) {
                
              if(data.email == null)
              {
                    //Facbeook user email is empty, you can check something like this.
                    alert("You must allow us to access your email id!"); 
                    ResetAnimate();

              }else{
                    AjaxResponse();
              }
              
          });
         }
    },
    {scope:'publish_stream'});
}

//functions
function AjaxResponse()
{
     //Load data from the server and place the returned HTML into the matched element using jQuery Load().
     $( "#results" ).load( "http://www.bunchofus.com/app/fbinclude.php" );
}

//Show loading Image
function LodingAnimate() 
{
    $("#LoginButton").hide(); //hide login button once user authorize the application
    $("#results").html('<img src="img/ajax-loader.gif" /> Please Wait Connecting...'); //show loading image while we process user
}

//Reset User button
function ResetAnimate() 
{
    $("#LoginButton").show(); //Show login button 
    $("#results").html(''); //reset element html
}
