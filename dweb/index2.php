<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<title>Intelligent Forms</title>
	<!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/boostrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
 -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<style type="text/css">
		#second,#third,#result{
			display:none;
			
		}
	</style>

</head>

<body class="bg-dark">
	<div class ="container">
		<div class="row justify-content-center">
			<div class="col-md-6 bg-light p-4 rounded mt-5">
				<h5 class="text-center text-light bg-success mb-2 p-2 rounded lead" id="result">Hello World</h5>
				<div class="progress mb-3 text-light text-center" style="height:40px;">
					<div class="progress -bar bg-danger text-center" role="progressbar" style="height:40px; width:20%;" id="progressBar">
					<b class="lead" id="progressText">Step - 1
					</b>
					</div>
				</div>
				<form action="" metahod="post" id="form-data">
					<div id="first">
						<h4 class="text-center bg-primary p-1 rounded text-light">Personal Information</h4>
						<div class="form-group">
							<label for="name">Name</label>
							<input type="text" name="name" class="form-control" placeholder="Full Name" id="name">
							<b class="form-text text-danger" id="nameError"></b>
						</div>
						<div class="form-group">
							<label for="username">Username</label>
							<input type="text" name="username" class="form-control" placeholder="Username" id="username">
							<b class="form-text text-danger" id="usernameError"></b>
						</div>
						<div class="form-group">
							<a href="#" class="btn btn-danger" id="next-1">Next</a>
						</div>
					</div>
					<div id="second">
						<h4 class="text-center bg-primary p-1 rounded text-light">Contact Information</h4>
						<div class="form-group">
							<label for="email">E-mail</label>
							<input type="email" name="email" class="form-control" placeholder="E-mail" id="email">
							<b class="form-text text-danger" id="emailError"></b>
						</div>
						<div class="form-group">
							<label for="phone">Phone</label>
							<input type="tel" name="phone" class="form-control" placeholder="Phone" id="phone">
							<b class="form-text text-danger" id="phoneError"></b>
						</div>
						<div class="form-group">
							<a href="#" class="btn btn-danger" id="prev-2">Previous</a>
							<a href="#" class="btn btn-danger" id="next-2">Next</a>
						</div>
					</div>
					<div id="third">
						<h4 class="text-center bg-primary p-1 rounded text-light">Choose Password</h4>
						<div class="form-group">
							<label for="password">Password</label>
							<input type="password" name="pass" class="form-control" placeholder="Password" id="pass">
							<b class="form-text text-danger" id="passError"></b>
						</div>
						<div class="form-group">
							<label for="confirm_password">Confrim Password</label>
							<input type="password" name="cpass" class="form-control" placeholder="Confirm Password" id="cpass">
							<b class="form-text text-danger" id="cpassError"></b>
						</div>
						<div class="form-group">
							<a href="#" class="btn btn-danger" id="prev-3">Previous</a>
							<input type="submit" name="submit" value="Submit" id="submit" class="btn btn-success">	
						</div>
					</div>

				</form>
			</div>
		</div>
	</div>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

	<script type="text/javascript">
		$(document).ready(function(){

			$("#next-1").click(function(e){

				e.preventDefault();
				$("#nameError").html('');
				$("#usernameError").html('');

				if($("#name").val() == ''){
					$("#nameError").html('* Name is required.');
					return false;
				}
				else if($("#name").val().length < 3){
					$("#nameError").html('* Name must be of more than 3 characters.');
					return false;
				}
				else if(!isNaN($("#name").val())){
					$("#nameError").html('* Numbers are not allowed.');
					return false;
				}
				else if($("#username").val() == ''){
					$("#usernameError").html('* Username is required.');
					return false;
				}
				else if($("#username").val().length < 4){
					$("#usernameError").html('* Username must be of more than 4 characters.');
					return false;
				}
				else{
					$("#second").show();
					$("#first").hide();
					$("#progressBar").css("width","60%");
					$("#progressText").html("Step - 2");
				}

				
			});

			$("#next-2").click(function(e){

				e.preventDefault();
				$("#emailError").html('');
				$("#phoneError").html('');

				
				if($("#email").val() == ''){
					$("#emailError").html('* Email is required.');
					return false;
				}
				else if(!validateEmail($("#email").val())){
					$("#emailError").html('* Email is not valid.');
					return false;
				}

				else if($("#phone").val() == ''){
					$("#phoneError").html('* Phone number is required.');
					return false;
				}
				else if(isNaN($("#phone").val())){
					$("#phoneError").html('* Only numbers are allowed');
					return false;
				}
				else if($("#phone").val().length != 10){
					$("#phoneError").html('* Phone number must be of 10 digit.');
					return false;
				

				}

				else{
					$("#third").show();
					$("#second").hide();
					$("#progressBar").css("width","100%");
					$("#progressText").html("Step - 3");
				}			

				function validateEmail($email){
					var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					return emailReg.test($email);
				}
			});

			$("#submit").click(function(e){
				e.preventDefault();
				$("#passError").html('');
				$("#cpassError").html('');


				if($("#pass").val() == ''){
					$("#passError").html('* Password is required.');
					return false;
				}
				else if($("#pass").val().length < 6){
					$("#passError").html('* Password must be of more than 6 characters.');
					return false;
				}
				else if($("#cpass").val() == ''){
					$("#cpassError").html('* Cofirm password is required.');
					return false;
				}
				else if($("#pass").val() != $("#cpass").val()){
					$("#cpassError").html('* Confirm password must be the same.');
					return false;
				}
				else{
					$.ajax({
						url:'action.php',
						method:'post',
						data:$("#form-data").serialize(),
						success:function(response){
							$("#result").show();
							$("#result").html(response);
							$("#form-data")[0].reset();
						}
					})
				}
			});

			$("#prev-2").click(function(){
				
				

				$("#second").hide();
				$("#first").show();
				$("#progressBar").css("width","20%");
				$("#progressText").html("Step - 1");
			});

			$("#prev-3").click(function(){

				$("#result").hide();

				$("#second").show();
				$("#third").hide();
				$("#progressBar").css("width","60%");
				$("#progressText").html("Step - 2");
			});

		});
	</script>
</body>
</html>
