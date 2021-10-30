export function PostData(userData){
    let baseUrl ='http://localhost/Baritas/Baritas_backend/apis/login.php';
    return new Promise((resolve,reject) =>{

        fetch(baseUrl,{
            method:'POST',
            headers:
            {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(userData)

        }).then((response)=> response.json()
        .then((responseJSON)=>{
            resolve(responseJSON);
        }))
        .catch((error)=>{
            reject(error);
        });
    });

}