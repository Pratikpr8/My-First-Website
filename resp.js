//Selecting Elements where we want Javascript to run

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')



burger.addEventListener('click',() => {
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
});




//Taking message from the user.

submit = document.getElementById("submit").onclick=() => {

    if  ( document.getElementById("formname").value.length == 0  || 
      document.getElementById("msg").value.length == 0 )
    {
        show = alert('The form is incomplete. Please check!');
    }
    else
    {
        show = alert('Thank you for your message.');

        reload= window.location.reload(true);
    }
};
    







