$(document).ready(function(){$("form").submit(function(event){var formData={name:$("input[name=name]").val(),email:$("input[name=email]").val(),message:$("textarea#ccomment").val()};$.ajax({url:"https://i5etoip6w0.execute-api.us-west-2.amazonaws.com/prod",dataType:"text",type:"post",contentType:"application/x-www-form-urlencoded",data:formData,success:function(data){$("form").append("<div>"+"Thank you! Your message has been sent successfully"+"</div>")},error:function(data){$("form").append("<div>"+"Uh-oh, something went wrong. Please try again."+"</div>")}});$("form").trigger("reset");event.preventDefault()})});
