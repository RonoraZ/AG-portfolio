import '../CSS/Line.css'
const Line =({ shape })=>{ 
    const renderShape = () => {
        if (shape === "circle") {
            return (
                <div class="shape circle"></div> 
            )
        } else if (shape === "diamond") {
            return (
                <div class="shape diamond"></div> 
            )
        }
    }

   return (
        <div className="Line-container"> 
            <div class="line"> 
                {renderShape()}
                
            </div>
        </div> 
    )
}

export default Line