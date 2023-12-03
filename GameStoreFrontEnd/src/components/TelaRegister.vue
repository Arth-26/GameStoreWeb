<template>
    <body class="home">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <p id="homeregist" class="text-center">Registre - se</p>
            <form @submit.prevent="register">
              <div class="form-group mt-3">
                <input type="text" class="form-control" id="nome" placeholder="Nome" v-model="nome" required>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" id="email" placeholder="Email" v-model="email" required>
              </div>
              <div class="form-group mt-3">
                <input type="password" class="form-control" id="senha" placeholder="Senha" v-model="senha" required>
              </div>
              <button type="submit" class="btn btn-primary mt-3 offcard">Registrar</button>
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
            nome: '',
            email: '',
            senha: ''
        }
    },
    methods: {
        async register() {
            try {
                const response = await fetch('http://localhost:8080/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nome: this.nome,
                        email: this.email,
                        senha: this.senha
                    })
                })
                if (response.status === 200) {
                    router.push('/games');
                } else {
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

#homeregist{
    font-size: 50px;
    font-weight: 700;
    color: rgb(252, 252, 255);
    font-family: 'open_sansregular';
    letter-spacing: 5px;
    margin-bottom: 40px;
    position: relative;

  }

</style>