let getUserdata = JSON.parse(localStorage.getItem("useData"));
console.log(getUserdata)

function Signup() {
    let name = document.getElementById("input-name").value;
    let mob_no = document.getElementById("input-mob_no").value;
    let password = document.getElementById("input-password").value;


    let userData = {
        name: name,
        mob_no: mob_no,
        password: password,


    }

    console.log(userData);


    // localStorage.setItem 

    let user = [];
    user.push(userData);
    localStorage.setItem( "userData ",JSON.stringify(user));


// alert("bhh")
    // if (mob_no.length == 0)  {
    //     alert("enter mobile no")

    // }

    // else if (mob_no.length !== 10 || mob_no == String) {
    //     alert("Mobile number should have 10 digit")

    // }

    // name = "";
    // mob_no = "";
    // password = "";
    // alert("Signup Successfully")



}



Signup();




