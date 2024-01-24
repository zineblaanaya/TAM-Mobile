const urlApi = "http://192.168.5.200:3000"
const SignupEndPoint = "/SignUp"

async function handleSignup(){
    const response = await fetch(urlApi+SignupEndPoint);
    if(response.status === 200){
        const data = await response.json();
        console.log(data, "its good");
    } else if(response.status === 404){
        console.log(data, 'error')
    }
}
