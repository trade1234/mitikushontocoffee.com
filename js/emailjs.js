    const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')
  
        
    const sendEmail = (e) =>{
        e.preventDefault()
  
      //serviceID - temeplet - #form - publickey
  
        emailjs.sendForm("service_78aj804","template_xb9oq57","#contact-form","UdNyI7iaD_BcY6wLg")
        .then(() =>{
           // Show sent message 
            contactMessage.textContent = 'Message sent successfully ✅'
  
           // Remove message after five seconds
            setTimeout(()=>{
                contactMessage.textContent = ''
            }, 5000)
  
            //Clear input Fields
            contactForm.reset()
  
        }, () =>{
            // Show error message
            contactMessage.textContent= 'Message not sent (service error) ❌'
          })
      }
      contactForm.addEventListener('submit', sendEmail)