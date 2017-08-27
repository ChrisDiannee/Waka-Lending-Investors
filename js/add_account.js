let json_accounts = [];

// let json_accounts = {
// 		id: 1,
// 		name: "name",
// 		email: "email@gmail.com",
// 		password: "password"
// 	}
try{
	let tmp_accounts = JSON.parse(localStorage.getItem("json_accounts"));

	tmp_accounts.map((account)=>{
		console.log(account);
		json_accounts.push(account);
	});
	/*for(let i=0;i<tmp_accounts.length;i++){
		let account = {
			name: tmp_accounts[i].name,
			email: tmp_accounts[i].email,
			username: tmp_accounts[i].username,
			password: tmp_accounts[i].password,
			confirm: tmp_accounts[i].confirm			
		}
		json_accounts.push(account);
	}*/
}
catch(TypeError){
	localStorage.setItem('json_accounts',JSON.stringify(json_accounts));
}
function createUser(){
	let id= document.querySelector('#id').value;
	let fname = document.querySelector('#fname').value;
	let lname = document.querySelector('#lname').value;
	let loan = document.querySelector('#loan').value;
	let balance = 8500;
	let newAccount = {
		id: id,
		fname: fname,
		lname: lname,
		loan: loan,
		balance: balance

	}

	json_accounts.push(newAccount);

	localStorage.setItem('json_accounts',JSON.stringify(json_accounts));
	// let jns_retrieve = localStorage.getItem('json_accounts');
	// console.log(jns_retrieve);
	// let jns_parse = JSON.parse(localStorage.getItem('json_accounts'));
	// console.log(jns_parse);
	// //Display in console inside of json array
	// console.log("Name is " + jns_parse[0].name);
	// console.log("Email is " + jns_parse[0].email);
}


 function readUser(){


          let jns_parse = JSON.parse(localStorage.getItem('json_accounts'));
          console.log(jns_parse);

          let html=``;
          jns_parse.map((name)=>{
      
          html += `
          <tr>
                <td>${name.id}</td>
                <td>${name.fname}</td>
                <td>${name.lname}</td>
                <td>${name.loan}</td>
                <td>${name.balance}</td>
                
            </tr>
          `;
          });
          document.querySelector('#tblNames').innerHTML = html;
 }





//  function validate(){
// var name = document.getElementById("name").value;
// var password = document.getElementById("password").value;
// if ( username == "name1" && password == "password1"){
// alert ("Login successfully");
//   }
//   else{
//     alert("Invalid username or password");
//     }
//   return false;
//   }




// function del(){
// 	let id= document.querySelector('#id').value;

// 	if (getElementById==id)
// }