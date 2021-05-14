// navbar motion
document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle('change')
    })
})



// Create variable to store icons
const icons=document.querySelectorAll('.section-1-icons i');

// inbuilt function set interval
let i=1;
setInterval(()=>{
    i++
    const icon=document.querySelector('.section-1-icons .change');
    icon.classList.remove('change');
    
    if(i>icons.length)
    {
        icons[0].classList.add('change')
        
    }else{
        icon.nextElementSibling.classList.add('change')
    }
    

},2000)