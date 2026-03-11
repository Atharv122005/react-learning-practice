export default function ConditionalStyling({isActive}){

    return(
        <div>
            <h1 style={{color :isActive ? "red" :"green"}}>{isActive ? "HI atharv" : "buy atharv" }</h1>
            
        </div>
    )
}