window.fbAsyncInit = function() {
    FB.init({
       appId: '230170050360219',
       secret: '3ba998ce421b66303fd5cdfdbe7cfce4',
       cookie: true,
       xfbml: true,
       oauth: true
    }); 
};


(function() {
var e = document.createElement('script'); e.async = true;
e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
document.getElementById('fb-root').appendChild(e);
}());

function fblogin(){
FB.login(function(response){
if (response.authResponse) {
//window.location='http://www.yoozpaper.com/fbinclude.php';
 $.ajax({
	dataType: 'json',
	url: 'http://www.bunchofus.com/app/fbinclude.php',
	success: function(res) {
    if (res.success) {
      localStorage.setItem('user_name', res.user_name);  //set user id to local storage
      window.location = "myhome.html";
    } else {
      alert('Username or Password do not match!');
    }
  },
  error: function() {
    //this will trigger in case the server send invalid JSON (or other types of errors)
    alert('Error logging in');
  }
    });
}
},{scope: 'publish_stream'});
}

function fbLogout() {
        FB.logout(function (response) {
            //Do what ever you want here when logged out like reloading the page
            window.location.reload();
        });
    }

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=389972494384429";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));