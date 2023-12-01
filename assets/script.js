const navs = document.querySelectorAll('.nav-link');
const secs = document.querySelectorAll('section');
let navv = null;
console.log(navs);
console.log(secs);




window.addEventListener('scroll', () => {

    secs.forEach( sec => {
        
    if (window.scrollY > sec.offsetTop) {
        currid = sec.id;
        cuurstr  = currid.toString()

        console.log(cuurstr);
     } 
     

    })

    navs.forEach((navv)=>{
        console.log(navv);
        if (navv.href.includes(cuurstr)) { 
               navs.querySelector('.nav_active').classList.remove('nav_active');
               navv.classList.add('nav_active');
        } 
    });
    })







