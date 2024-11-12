//1.toggle menu 
let menuList = document.getElementById('menuList');
// menuList.style.maxHeight = '0px';

function toggleMenu() {
    if (menuList.style.maxHeight == '0px') {
        menuList.style.maxHeight = '500px';
    } else {
        menuList.style.maxHeight = '0px';
    }
}

// image slider starts
const imgs = document.querySelectorAll('.header-slider ul img'); 
const prev_btn = document.querySelector('.control_prev'); 
const next_btn = document.querySelector('.control_next'); 
let n = 0; 


function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'; 
    }
    //it willDisplay the current image
    imgs[n].style.display = 'block'; 
}

changeSlide();

prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--; 
    } else {
        n = imgs.length - 1; 
    }
    changeSlide();
});

next_btn.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++; 
    } else {
        n = 0; 
    }
    changeSlide(); 
});

function autoSlide() {
    n = (n < imgs.length - 1) ? n + 1 : 0; 
    changeSlide(); 
}

let slideInterval = setInterval(autoSlide, 2000);
// slider ends

// scroll with mouse
const scrollContainer=document.querySelectorAll('.products')

for (const item of scrollContainer) {
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}
// scroll with mouse end


 // Countdown Timer Script
 const items = document.querySelectorAll('.timer h2');
 const futureDate = new Date('2025-03-31T01:00:00').getTime();

 function formatDate(value) {
     return value < 10 ? `0${value}` : value;
 }

 const countdown = setInterval(updateSale, 1000);  // Set interval time to 1 sec

 function updateSale() {
     const now = new Date().getTime();
     const timeleft = futureDate - now;

     if (timeleft < 0) {
         clearInterval(countdown);
         document.querySelector('.countdown-message').textContent = 'Sorry, the sale has ended';
         items.forEach(item => (item.textContent = '00'));
         return;
     }

     const timeunits = {
         day: 24 * 60 * 60 * 1000,
         hour: 60 * 60 * 1000,
         minute: 60 * 1000,
         second: 1000,
     };

     const days = Math.floor(timeleft / timeunits.day);
     const hours = Math.floor((timeleft % timeunits.day) / timeunits.hour);
     const minutes = Math.floor((timeleft % timeunits.hour) / timeunits.minute);
     const seconds = Math.floor((timeleft % timeunits.minute) / timeunits.second);

     const timevalues = [days, hours, minutes, seconds];

     items.forEach((item, index) => {
         item.textContent = formatDate(timevalues[index]);
     });
 }

 updateSale(); 
//  timer ends

 // Toggle FAQ answer visibility
       const faqs = document.querySelectorAll('.faq');

       faqs.forEach(faq => {
           faq.addEventListener('click', () => {
               faq.classList.toggle('active');
           });
       });

// <!-- dynamic rating with JS -->
         // Select all product containers
      const products = document.querySelectorAll('.pro');
      products.forEach(product => {
      const stars = product.querySelectorAll('.star');
      const ratingText = product.querySelector('#rating-text');

      stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            // Toggle color up to the clicked star
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected'); 
                }
            });
            ratingText.textContent = index + 1;
        });
    });
});
// end

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({
       top:0,
      behavior: 'smooth' // Smoothscrolling
     
    });
  });


//  contact section btn 
  document.getElementById('functionalert').addEventListener('click',function(){
    alert('You have registered successfully')
  })
    
// ends
