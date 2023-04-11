//CÓDIGO CALLBACK

//Assincrono ocorre em paralelo a outros processo sem precisar que um termine par executar o outro
//refere-se à capacidade de realizar operações em segundo plano, sem bloquear a execução do código principal. Em outras palavras, o assincronismo permite que o código continue a ser executado enquanto uma operação é realizada em segundo plano.
const loginUser =  (email, password, onSuccess, onError) =>{
   setTimeout (() =>{
    const error = false;
    if (error){
    return  onError(new Error("erro no login"))
    }
      console.log("usuario logado!");//função callback é uma função que vai ser executada em algum momento mais tarde(nesse caso daqui 1,5segundo)
     onSuccess({email})
   }, 1500);//1500 = 1,5s ou um segundo e meio

};

const getUserVideos = (email, callback) =>{
   setTimeout (()=>{
      callback(["video1","video2","video3"])
   },2000)
}

const getUserVideoDetails = (video, callback) =>{
    setTimeout (() =>{
          callback({title: "video title"});
    }, 2500);
}

const user = loginUser("gabriel@gmail.com", "123456",(user) =>{
   getUserVideos(user.email, (videos)=>{
    console.log({videos})
     getUserVideoDetails(videos[0], (videoDetails)=>{
       console.log({videoDetails})
     })
   })
},(error) =>{
   console.log({error})
})
