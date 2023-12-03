<template>
  <body class="home">
    <div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="d-grid gap-2" id="registro/login">
            <p id="hometext" class="text-center">GAME STORE!</p>
            <span class="transition">
              <button @click="$router.push('/login')" class="btn btn-primary btn-lg mt-3 offcard">Login</button>
              <button @click="$router.push('/register')" class="btn btn-secondary btn-lg mt-3 offcard">Registro</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style> 
  body.home {
    background-image: url(C:\Users\Arthur\gamestore\src\assets\fundo.jpg);
    background-repeat: no-repeat;
    background-size:100%;
    bottom: 0;
    color: black;
    left: 0;
    overflow: auto;
    padding: 3em;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0; 
  }

  

  

  #hometext{
    font-size: 70px;
    font-weight: 700;
    color: rgb(252, 252, 255);
    font-family: 'open_sansregular';
    letter-spacing: 5px;
    margin-bottom: 20px;
    position: relative;

  }

  
  

</style>