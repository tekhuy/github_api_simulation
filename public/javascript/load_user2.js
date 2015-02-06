function addProfileForUsername(login){
  $.get('http://localhost:9999/users/'+login, function(user){
    var newProfile = Mustache.render($('#profile-template').html(), user);
    $(newProfile).appendTo('.profile-container').slideDown();
  }).error(function() {
    alert('No such user with username'+ login);
  }).always(function() {
    $('#username').val('');
  });
}

$(document).ready(function() {
  $('#add_profile').on('submit', function(event) {
    event.preventDefault();
    addProfileForUsername($('#username').val());
  });
  $('.profile-container').on('click', '.close', function() {
    $(this).closest('.profile').slideUp(function() {
      $(this).remove();
    });
  });
});