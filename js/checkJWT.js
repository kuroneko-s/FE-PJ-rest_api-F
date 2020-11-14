//JWT 토큰 확인 후 Login 혹은 Username 보여줄지를 판단
var JWT = window.localStorage.getItem("Authorization")
if (JWT != null){
  $("ul.logins-hide").hide()
  var username = window.localStorage.getItem("username");
  if (username != null){
    $("#inner-Text-profile").text(username)
  }
}else{
  $("ul.nonLogins-hide").hide()
}