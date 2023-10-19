    function validation(){

        const fname=document.getElementById('fname').value;
        const lname=document.getElementById('lname').value;
        const email=document.getElementById('email').value;
        const psswd=document.getElementById('psswd').value;
        
        console.log(fname);
        console.log(lname);
        console.log(email);
        console.log(psswd);
        
        if(fname.trim() === '' || lname.trim() === ''|| email.trim()===''||psswd.trim()==='')
        {
            alert("Empty !")
        }
        else{

        }
        
        
    }
    