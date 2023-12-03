<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <body class="home">
        <div>
        
        <div class="card" style="width: 18rem;">
            <div class="icon">
                <i class="fas fa-gamepad"></i>
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ originGame.nome }}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">{{ originGame.categoria }}</h6>
                <p class="card-text">{{ originGame.description }}</p>
                <div class="box-price nobutton">
                    <p class="price">Preço: R$ {{ originGame.preco }}</p>
                </div>
            </div>
        </div>

        <form @submit.prevent="updateGame" class="m-5">
            <p id="gameregister">Update Game</p>
            <div class="form-group">
                <input id="nome" type="text" v-model="game.nome" class="form-control" placeholder="Game name">
            </div>
            <div class="form-group">
                <input id="categoria" type="text" v-model="game.categoria" class="form-control" placeholder="Game category">
            </div>
            <div class="form-group">
                <input id="preco" type="number" step=".01" v-model="game.preco" class="form-control" placeholder="0.0">
            </div>
            <div class="form-group">
                <input id="data_de_lancamento" type="date" v-model="game.data_de_lancamento" class="form-control"
                    placeholder="Release Date">
            </div>
            <div class="form-group">
                <input id="description" type="text" v-model="game.description" class="form-control"
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
import router from '../router';

export default {
    data() {
        return {

            originGame: {
                id: '',
                nome: '',
                preco: '',
                data_de_lancamento: '',
                categoria: '',
                description: '',
            },
            game: {
                id: '',
                nome: '',
                preco: '',
                data_de_lancamento: '',
                categoria: '',
                description: '',
            },
        };
    },
    mounted() {
       
        this.game.id = this.$route.params.id;
        this.getGame();

    },
    methods: {
        async getGame() {
            
            try {
                const response = await fetch(`http://localhost:8080/games/game/${this.game.id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                this.originGame = {
                    id: data.id,
                    nome: data.nome,
                    categoria: data.categoria,
                    preco: data.preco,
                    data_de_lancamento: data.data_de_lancamento,
                    description: data.description,
                };
            } catch (error) {
                console.error(error);
            }
        },
        async updateGame() {
            try {
                if (this.game.nome == null) {
                    this.game.nome = this.originGame.nome
                }

                if (this.game.categoria == null) {
                    this.gamecategoria = this.originGame.categoria
                }

                if (this.game.preco == null) {
                    this.game.preco = this.originGame.preco
                }

                if (this.game.data_de_lancamento == null) {
                    this.game.data_de_lancamento = this.originGame.data_de_lancamento
                }

                if (this.game.description == null) {
                    this.game.description = this.originGame.description
                }
                const response = await fetch(`http://localhost:8080/games/${this.game.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nome: this.game.nome,
                        categoria: this.game.categoria,
                        preco: this.game.preco,
                        data_de_lancamento: this.game.data_de_lancamento,
                        description: this.game.description,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                alert('Game updated!');
                router.push('/games');
            } catch (error) {
                alert('Error updating game!');
                console.error(error);
            }
        },
    },
};
</script>


<style>
    .card{
        background-color: rgba(37, 81, 134, 1);
        border-radius: 20px;
        margin-left: 37.8%;
        
    }
    .card-title{
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 30px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: rgb(255, 255, 255);
    }

    .card-subtitle{
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 14px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: rgb(217, 217, 218);
        font-style: normal;
    }

    .card-text{
        margin-top: 12px;
        margin-bottom: 12px;
        font-size: 12px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: rgb(255, 255, 255);
        font-style: normal;
    }

    .nobutton{
        background-color: rgb(20, 50, 87);
        border-bottom-right-radius: 20px; 
        border-bottom-left-radius: 20px
        
        
    }

    .price{
        color: white;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    

    .fa-gamepad{
        color: white;
        font-size: 30px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .icon{
        background-color: rgb(20, 50, 87);
        border-top-right-radius: 20px; 
        border-top-left-radius: 20px 
    }

</style>