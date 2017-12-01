function clickDelete(evt){
	var post_id = evt.getAttribute('data-id');

  	fetch('/delete-blog/'+post_id, {
  		method: 'delete'
	}).then(function(response) {
  		window.location.reload();
	}).catch(function(err) {
  		// Error :(
	});
	
}
function clickEdit(evt){
	var post_id = evt.getAttribute('data-id');
	var post_title = evt.getAttribute('title');
	var post_post = evt.getAttribute('data-post');
	str = '<form id="'+post_id+'"class="form-border" action="/update-blog/'+post_id;
	str += '" method="POST">';
	str += '<h2>Edit</h2><div class="title wrapper">';
	str += '<input id="edit-title" name="title" value="'+post_title+'"';
	str += 'type="text" placeholder="Title"></input></div>';
	str += '<div class="title wrapper"><textarea name="post" id="edit-desc"';
	str += '></textarea></div>';
	str += '<div  class="description wrapper"><input type="submit"';
	str += 'value="SAVE"></input></div><form>';
	document.getElementById("edit-post").innerHTML = str;
	document.getElementById("edit-desc").value = post_post;
	document.getElementById("edit-title").value = post_title;
}

function updatePost(evt){
	var post_id = evt.getAttribute('data-id');
	var post_post = document.getElementById("edit-desc").value;
	var title = document.getElementById("edit-title").value;
	var data = {
		'title': title,
		'desc': post_post
	}
	fetch('/update-blog/'+post_id+"?title="+title+"&post="+post_post, {
  		method: 'post'
	}).then(function(response) {
  		//window.location.reload();
	}).catch(function(err) {
  		// Error :(
	});
}