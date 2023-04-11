//async-await - é uma forma de escrever código assíncrono de maneira mais fácil
//Assincrono ocorre em paralelo a outros processo sem precisar que um termine par executar o outro
//refere-se à capacidade de realizar operações em segundo plano, sem bloquear a execução do código principal. Em outras palavras, o assincronismo permite que o código continue a ser executado enquanto uma operação é realizada em segundo plano.

const { resourceLimits } = require("worker_threads");


//CRIAMOS A PROMISES
const loginUser = (email, password) =>{
   return new Promise ((resolve, reject) =>{
      const error = false;

      if(error){
        reject (new Error("Erro no login!"))
      }
      
      console.log("Usuário logado")
      resolve({email})
   });
};

const getUserVideos = (email) =>{
  return new Promise ((resolve,reject)=>{
    setTimeout (()=>{
      console.log("getUserVideos")
     resolve(["video1","video2","video3"])
   },2000)
  })
}

const getUserVideoDetails = (video) =>{
    return new Promise ((resolve,reject) =>{
      setTimeout (() =>{
      console.log("getVideoDetails")
        resolve({title: "video title"});
    },2500);
    });
};

// //CONSUMIMOS A PROMISES
// loginUser("gabriel@gmail.com", "123456")//then = "então" ou seja vou fazer o login do usuário E ENTÃO EXECUTA O BLOCO DE CÓDIGO
// .then((user) => getUserVideos(user.email))
// .then((videos) => getUserVideoDetails(videos[0]))
// .then(videoDetails => console.log({videoDetails}))
// .catch((error) => console.log({error}));


// o código comentado acima é a mesma coisa do debaixo só muda que o de cima usa promises e o de baixo async-await
const displayUser = async () =>{
  try{
    const user = await loginUser ("gabriel@gmail.com", "123456");
    const videos = await getUserVideos(user.email);
    const videoDetails = await getUserVideoDetails (videos[0]);
    console.log({videos});
    console.log({videoDetails});
  } catch (error){
 
  }
}
displayUser()

