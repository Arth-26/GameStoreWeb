<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <body class="home">
    <div>
      <div class="top-bar">
        <h2>Game View </h2>
        <button type="button" id="newbutton" class="btn btn-primary offcard" @click="$router.push({ name: 'NewGame' })">New</button>
      </div>

      <div class="l-card">
        <div v-for="game in result" :key="game.Id" class="col">
          <div class="card" style="width: 18rem;">
            <div class="icon">
              <i class="fas fa-gamepad"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ game.nome }}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">{{ game.categoria }}</h6>
              <p class="card-text">{{ game.description }}</p>
              <div class="box-price button">
                <p class="price">Preço: R$ {{ game.preco }}</p>
              </div>
              <button type="button" class="btn btn-warning oncard"  @click="$router.push({ name: 'UpdateGame', params: { id: game.Id } })">Edit</button>
              <button type="button" class="btn btn-danger oncard" @click="deleteGame(game)">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>


<script>


export default {
  name: 'GameItem',
  data() {
    return {
      result: [],

      game: {

        id: '',
        nome: '',
        preco: '',
        data_de_lancamento: '',
        categoria: ''

      }
    }
  },
  mounted() {
    this.getGameList()
  },
  methods: {
    async getGameList() {
      try {
        const response = await fetch('http://localhost:8080/games');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const gameList = responseData.content || [];
        this.result = gameList;
        this.originalList = gameList.map(p => ({ ...p }));
      } catch (error) {
        alert('Error loading games!');
        console.error(error);
      }
    },

    async deleteGame(game) {
      const confirmed = confirm('Are you sure you want to delete this product?')
      if (confirmed) {
        try {
          const response = await fetch(`http://localhost:8080/games/delete/${game.Id}`, {
            method: 'DELETE',
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          alert('Game deleted successfully!');
          this.getGameList();
        } catch (error) {
          alert('Error deleting game!');
          console.error(error);
        }
      }
    }
  }
}

</script>

<style>
.l-card {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 300px);
  justify-content: center;
  justify-items: center;
  margin-right: 20%;
}

.top-bar {
  display: flex;
  background-color: rgba(37, 81, 134, 1);
  margin-bottom: 20px;
}

h2 {
  color: white;
  text-align: center;
  margin: auto;
}

.oncard{
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    background-color: #70aad1;
    height: 40px;
    margin-left: 7px;
    margin-right: 7px;
    margin-bottom: 10px;
    width: 100px;
}

.button{
  background-color: rgb(20, 50, 87);
}







</style>