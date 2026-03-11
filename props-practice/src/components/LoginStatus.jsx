export default function LoginStatus({loginstatus}){
    
    return(
        <div>
            <h1>
            {loginstatus ? "Welcome Back!" : "please Login"}
            </h1>
        </div>
    )
}