<template>
    <body class="home">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <p id="iniciarsessao" class="text-center">Iniciar Sessão</p>
                    <form @submit.prevent="login">
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputEmail3" placeholder="Email" v-model="email" required>
                        </div>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3"
                                aria-describedby="passwordHelpBlock" placeholder="Senha" v-model="senha" required>
                        </div>
                        <button type="submit" class="btn btn-primary mt-3 offcard">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import router from '../router'

export default {
    data() {
        return {
            email: '',
            senha: ''
        }
    },
    methods: {
        async login() {
            try {
                const response = await fetch('http://localhost:8080/user/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.email,
                        senha: this.senha
                    })
                })
                if (response.status === 200) {
                    router.push('/games');
                } else {
                    alert('Credenciais inválidas.')
                    console.error('Credenciais inválidas.');
                }
            }
            catch (error) {
                console.error('Erro ao realizar login:', error);
            }
        }
    }
}
</script>

<style>

  .offcard{
    margin: 5px;
    width: 15%;
    height: 40px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    background-color: #70aad1;
  }

  .btn:hover{  
  background-color: #2980b9;
  }

  .btn:active{
    background-color: #21618c;
  }

  #iniciarsessao{
    font-size: 50px;
    font-weight: 500;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: rgb(252, 252, 255);
    letter-spacing: 5px;
    margin-bottom: 60px;
    position: relative;

  }

  .form-control{
    width: 30%;
    height: 40px;
    margin-bottom: 15px;
    border-radius: 7px;
  }

  .form-control:hover{
    background-color: rgb(20, 50, 87);
  }

  input{
    background-color: rgba(37, 81, 134, 1);
    font-size: 15px;
    color: rgb(201, 216, 235);
  } 

  input::placeholder{
    color: rgb(16, 38, 65);
    font-size: 20px;
    text-align: center;
  }

  

</style>