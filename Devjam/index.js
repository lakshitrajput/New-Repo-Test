function sendEmail(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var sub = document.getElementById('subject').value;
    var message = document.getElementById('textbox').value;
    let body = "Name: " + name + "<br> Email: " + email + "<br>Subject: " + sub + "<br> Message: " + message; 

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "luxit@elasticemail.com",
        Password : "7BEC708C56D41763CD99FE1E9869F6D77A8D",
        To : 'lakshit1729@gmail.com',
        From : 'lakshit5490@gmail.com',
        Subject : "New contact from enquiry",
        Body : body
    }).then(    
      message => alert("Message Sent Successfully")
    );
}

secelm=document.getElementById('btn');

function anima()  {
    var i = 0;
    const elm = document.getElementById('btn');
    let id = null;
    clearInterval(id);
    id = setInterval(reduce,5);
    function reduce(){
        if (i==22){
            clearInterval(id);
        } else{
            i++;
            elm.style.borderRadius= (i+"px");
        }
    }
}

function anima2()  {
    var i = 22;
    const elm = document.getElementById('btn');
    let id = null;
    clearInterval(id);
    id = setInterval(reduce,5);
    function reduce(){
        if (i==7){
            clearInterval(id);
        } else{
            i--;
            elm.style.borderRadius= (i+"px");
        }
    }
}

secelm.addEventListener('mouseover',anima);
secelm.addEventListener('mouseout', anima2);
