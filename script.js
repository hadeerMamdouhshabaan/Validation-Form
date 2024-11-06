let form = document.querySelector("form");
let fname = document.querySelector(".fname")
let lname = document.querySelector(".lname");
let Email = document.querySelector(".em");
let phone = document.querySelector(".phone");
let birthdate =document.querySelector(".birth");

let fnameRegex = /^[A-Z][\w]{2,}$/
let lnameRegex = /^[A-Z][\w]{2,}$/
let emailRegex = /^[a-z][\w\d]*(@fayoum.edu.eg)$/
let phoneRegex = /^(01)\d{9}$/
let BirthdateRegex = /^[\d][\d]{3}[/][\d]{2}[/][\d]{2}$/

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = fname.value;
    let validfname=  fnameRegex.test(name)

    let lastname = lname.value;
    let validlname =lnameRegex.test(lastname)

    let email = Email.value;
    let validEmail = emailRegex.test(email);

    let  phoneNumber = phone.value;
    let validphone = phoneRegex.test(phoneNumber);

    let BirthDate =birthdate.value;
    let validbirth = BirthdateRegex.test(BirthDate);

    if (!validfname) {
        Swal.fire({
            title: 'Oops..',
            text: 'InValid First Name',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        
    }
    else if(!validlname)
    {
        Swal.fire({
            title: 'Oops..',
            text: 'InValid Last Name',
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
    else if(!validEmail)
    {
        Swal.fire({
            title: 'Oops..',
            text: 'InValid Email',
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
    else if(!validphone)
    {
        Swal.fire({
            title: 'Oops..',
            text: 'InValid Phone Number',
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
    else if(!validbirth)
    {
        Swal.fire({
            title: 'Oops..',
            text: 'InValid BirthDate',
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
    else
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 2000
      });

      fname.value=" ";
      lname.value=" ";
      Email.value=" ";
      phone.value=" ";
      birthdate.value=" ";


})
