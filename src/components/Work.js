import ScreenShot26 from "../images/26.png" 
import ScreenShot32 from "../images/32.png" 
import ScreenShot31 from "../images/31.png" 
import ScreenShot28 from "../images/28.png" 
import ScreenShot33 from "../images/33.png" 
import ScreenShot27 from "../images/27.png"  
import "../CSS/Work.css"


const Work =() =>{  
    
    return( 
    <div id="work" class="Work"> 
        <h2><b>Work</b></h2>
               <div class="Main-Portfolio">
                    <div class="Portfolio">
                        <div class="Portfolio-Item">
                            <a href="https://github.com/RonoraZ/Code-Refractor-HW" target="_blank" rel="noreferrer"><img src={ScreenShot26} alt="Code-Refractor" /></a> 
                            <p className="description">Boot-Camp code-refractor assignment</p>
                        </div>
                       
                        
                        <div class="Portfolio-Item">
                            <a href="https://github.com/RonoraZ/RonoraZ.github.io" target="_blank" rel="noreferrer"><img src={ScreenShot32} alt="Password-Generator" /></a>
                        
                            <p className="description">A passord generator</p> 
                        
                        </div>
                        
                        
                        
                        <div class="Portfolio-Item"> 
                         <a href="https://github.com/RonoraZ/Work-Day-Scheduler" target="_blank" rel="noreferrer"> <img src={ScreenShot31} alt="Work-Day-Scheduler" /></a> 
                         
                         <p className="description">Work-Schedule</p> 
                        
                        
                        </div> 
                        
                       
                       
                        <div class="Portfolio-Item">
                            <a href="https://github.com/RonoraZ/RonoraZ.io" target="_blank" rel="noreferrer"><img src={ScreenShot28} alt="Weather-Application" /></a>
                            
                            <p className="description">Weather-Dashboard</p> 
                        
                        </div>
                        
                       
                       
                       
                        <div class="Portfolio-Item"> 
                        
                            <a href="https://github.com/RonoraZ/Bucket-List" target="_blank" rel="noreferrer"> <img src={ScreenShot33} alt="Bucket-List"/></a>
                            
                            <p className="description">Bucket-List</p>
                       
                        </div>

                        
                        
                        
                        
                        <div class="Portfolio-Item">
                            <a href="https://github.com/RonoraZ/Project2_BAR-bit" target="_blank" rel="noreferrer"> <img src={ScreenShot27}alt="BarBit" /></a>
                            
                            <p className="description">BarBit</p>
                        
                        </div>        
                    </div>
              </div> 
    </div> 
   )
} 
export default Work;