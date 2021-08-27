import profile from "../images/me.jpg"  
import "../CSS/Header.css" 


const Header =() =>{  
    
    return( 
        <div class="Header"> 
            <h1>Port<span class="fo">fo</span>lio</h1>
        

            <div class="list"> 

    
                <div id="about-me" class="About-me"> 
                    <h2>About Me</h2> 
                    <div className="images-container"> 
                       <div className="profile-pic"> 
                            <img src={profile} alt="Amalec Guzman"/>
                        </div>   
                        <div className="profile-iframe"> 
                            <iframe src="https://giphy.com/embed/eyHHBJ2GneP1QumtxB" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen title="me flipping"></iframe>
                        </div>
                        
                    </div>
                    <p className="description">Hello my name is Amalec Guzman . I am from Philadelphia ,PA. <b>Welcome</b> to my portfolio. 
                    A little bit about myself , I am a USMC veteran i served honorably for 4 years .I attended Camden County College where 
                    i graduated and received my AA in Criminal Justice . Also been getting involved into full-stack development which i have 
                    been studying and gaining the knowledge to progress in this field . As you see on my page you will see some of my work that i have done . 
                    As you can see from my skills i would like to apply them to any future jobs or opportunity.
                    </p>
                </div> 
            </div>   
        </div> 
    )
} 
export default Header