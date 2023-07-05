let signupForm = document.querySelector("#register")
// signupForm.addEventListener("submit", function (e) {
//     e.preventDefault()
//     let obj = {
//         Name: signupForm.Name.value,
//         Email: signupForm.Email.value,
//         password: signupForm.password.value
//     }

//     postData(obj)
// });

// async function postData(obj) {
//     try {
//         let data = await fetch("http://localhost:7000/user/signup", {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(obj)
//         })
//         if (data.ok) {
//             alert("Signup Successfully")
//         }else{
//             alert("Please Check inputs");
//         }
//     } catch (error) {
//         alert(error);
//     }
// };

let form = document.getElementById("register");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let payload = {
    name: document.getElementById("Name").value,
    email: document.getElementById("Email").value,
    pass: document.getElementById("password").value,
  };

  fetch(`https://nodeapis-uwf8.onrender.com/user/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  })
  .then((res) => res.json())
  .then((res) => {
    if (res.msg != "Registration successful") {
      console.log(res.msg), alert(res.msg);
    } else {
      console.log(res.msg);
      // alert(res.msg);
      document.getElementById("Name").value = "";
      document.getElementById("Email").value = "";
      document.getElementById("password").value = "";

      window.location.href = "index.html";
    }
  })
  .catch((err) => console.log(err));
})


let loginform = document.querySelector("#login")
loginform.addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj={
        email:loginform.email.value,
        pass:loginform.pass.value
    }
    LoginFunction(obj)
});

async function LoginFunction(obj){
    try {
        let login_request = await fetch("https://nodeapis-uwf8.onrender.com/user/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        });
        console.log(login_request);
        if(login_request.ok){
            let data = await login_request.json();
            let userToken = data.token 
            localStorage.setItem("token",userToken)
            alert("Login Successfully")
            window.location.href = "index.html";
        }else{
            alert("Check username or Password");
        }
    } catch (error) {
        alert("Check username or Password");
        console.log(error);
    }
};