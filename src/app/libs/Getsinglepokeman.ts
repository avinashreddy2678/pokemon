import axios from 'axios'
const singlePokeman=async({id}:any)=>{

    try {
        const url=`https://pokeapi.co/api/v2/pokemon/${id}`
    const res=await axios.get(url)
    // console.log(res)
     return res.data;
    } catch (error) {
            return "Error"
    }


    
}
export default singlePokeman;