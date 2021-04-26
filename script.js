const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {
      counter.innerText ='0';

      const updatecounter = () => {
            const target=+counter.getAttribute('data-target')
            const c= +counter.innerText
            
            const incre = target/200
            if (c<target)
            {
                  counter.innerText=`${Math.ceil(c + incre)}`
                  setTimeout(updatecounter,10)

            }
       }
       
       updatecounter()
})

const night=document.querySelector("#night");
const cont = document.querySelector(".container")

night.addEventListener('click',function()
{
      cont.classList.toggle(".active")
}
)

