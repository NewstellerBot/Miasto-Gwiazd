<?php 
    session_start();
?>
<html>
    <head>
        <title>LOGIN</title>
        <script>
        window.fbAsyncInit = function() {
            FB.init({
            appId      : '171026574666319',
            cookie     : true,
            xfbml      : true,
            version    : 'v9.0'
            });
            
            FB.AppEvents.logPageView();   
            
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        </script>
    </head>
    <body>    
        <script>
            function checkLoginState() {
                FB.getLoginStatus(function(response) {
                    callback(response);
                });
            }
            function callback(response) {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
                };
                FB.api('/me?fields=name,email', function(response) {
                    sendRequest(response.email);
                });
                xmlhttp.open("POST", "checkFBUser.php", true);
                xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                function sendRequest(email) {
                    FB.api('/me?fields=name,email', function(userInfo) {
                        var postData = "FBUserID=" + response.authResponse.userID + "&userEmail=" + email;
                        xmlhttp.send(postData);
                    });
                }
            }
            function getCurrentUserEmail() {
                
            }
        </script>
        <fb:login-button 
            scope="public_profile,email"
            onlogin="checkLoginState();">
        </fb:login-button>
    </body>
</html>