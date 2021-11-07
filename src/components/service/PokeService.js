import axios from 'axios';
const POKE_API_BASE_URL="http://localhost:8080/api/poke";
class PokeService{


  getPokesAll(){
   return axios.get(POKE_API_BASE_URL+ "/all");
  }



  getPokeById(pokeId){
  return axios.get(POKE_API_BASE_URL+'/' + pokeId + "/info");
  }

  getEvolutionsById(pokeId){
    return axios.post(POKE_API_BASE_URL+"/" + pokeId + "/evoluciones");
 }


}
export default new PokeService()
