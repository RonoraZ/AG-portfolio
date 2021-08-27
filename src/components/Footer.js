import  "../CSS/Footer.css"

const Footer =() =>{  
    
    return( 
   
<footer className="footer">
        <div id="contact-me" class="container">  
            <div class="box"> 
                    <h2>Contact</h2> 
                    <div class="box2">
                        <ul> 
                            <li>(267)506-4433<i class="fa fa-phone" aria-hidden="true"></i></li>
                            <li><a href="mailto: amalec.c.guzman@gmail.com" target="_blank" rel="noreferrer"><i class="fas fa-envelope"></i>Email Me!</a></li> 
                            <li><a href="https://github.com/RonoraZ" target="_blank" rel="noreferrer"><i class="fab fa-github-square"></i>Github</a></li> 
                            <li><a href="https://www.linkedin.com/in/amalec-guzman-643739202/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i>Linkedin</a></li>
                        </ul>
                    </div>
                </div>
    
        </div> 
 </footer>
    )
} 
export default Footer