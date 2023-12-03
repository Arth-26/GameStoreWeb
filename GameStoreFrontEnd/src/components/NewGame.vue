<template>
    <body class="home">
        <div>
        <form @submit.prevent="saveGame" class="m-5">
            <p id="gameregister" class="mt-2">Game Registration</p>
            <div class="form-group">
                <input id="nome" type="text" v-model="nome" class="form-control" placeholder="Game name">
            </div>
            <div class="form-group">
                <input id="categoria" type="text" v-model="categoria" class="form-control"
                    placeholder="Game category">
            </div>
            <div class="form-group">
                <input id="preco" type="number" step=".01" v-model="preco" class="form-control" placeholder="0.0">
            </div>
            <div class="form-group">
                <input id="data_de_lancamento" type="date" v-model="data_de_lancamento" class="form-control"
                    placeholder="Release Date">
            </div>
            <div class="form-group">
                <input id="description" type="text" v-model="description" class="form-control"
                    placeholder="Game description">
            </div>
            <div class="mt-3 mb-3">
                <button type="submit" class="btn btn-primary offcard">Save</button>
            </div>
        </form>
    </div>
    </body>
    
</template>


<script>
import router from '../router'

export default {
    name: 'NewGame',
    data() {
        return {
            baseUrl: 'http://localhost:8080',

            result: [],

            game: { 
                id: '',
                nome: '',
                preco: '',
                data_de_lancamento: '',
                categoria: '',
                description: '',
            }
        }
    },
    methods: {
        cloneGame(game) {
            return JSON.parse(JSON.stringify(game))
        },
        async getGameList() {
            try {
                const response = await fetch('http://localhost:8080/games');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                this.result = data;
                this.originalList = data.map(p => ({ ...p }));
            } catch (error) {
                alert('Error loading games!');
                console.error(error);
            }
        },
        async saveGame() {
            try {
                const response = await fetch('http://localhost:8080/games', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nome: this.nome,
                        categoria: this.categoria,
                        preco: this.preco,
                        data_de_lancamento: this.data_de_lancamento,
                        description: this.description
                        
                    })
                })
                if (response.status === 200) {
                    alert('Games saved successfully!')
                    router.push('/games');
                } else {
                    console.error('Credenciais inválidas.');
                }
            }
            catch (error) {
                console.error('Erro ao realizar login:', error);
            }
        },
    }
}

</script>


<style>

#gameregister{
    font-size: 50px;
    font-weight: 700;
    color: rgb(252, 252, 255);
    font-family: 'open_sansregular';
    letter-spacing: 5px;
    margin-bottom: 40px;
    position: relative;

  }

</style>