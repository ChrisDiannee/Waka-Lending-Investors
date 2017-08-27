function isLogin(){
		let name = document.querySelector('#name').value;
		let password = document.querySelector('#password').value;
		let jns_parse = JSON.parse(localStorage.getItem('json_accounts'));
	

		if(name == jns_parse.name && password == jns_parse.password){
			let html = `
				<a href="/welcome"/>
			`;
		}
		else{
			alert("No account existed!");
		}
}
