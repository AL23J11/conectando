// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('.Enviar').tap(function(){
			var formulario=$(this).parents('form');
			var usuario=document.getElementByID('Usuario').value();
			var password=document.getElementByID('Password').value();
			
			function LoginConectar(U,P)
		{
			datos="usuario"+U+"&password"+P;
			$.ajax({
				type:"post",
				url:"192.168.1.10/sitio6/Log_in_m.php/",
				data: datos
			}).done(function(msg){
				alert(msg);
				if(msg==""||msg==null)
				{alert("usuario incorrecto");}
				else
				{alert("Bienvenido");}
		});//function msg
		}//function
	
	});//tap
	});//deviceready
});//ready