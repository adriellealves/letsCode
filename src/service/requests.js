import api from './endpoint';

 export default async function buscaProdutos(){
    try  {
       const  resultado = await api.get('products');
       return resultado.data
    } catch (error) {
        console.log(error)
    }
  
 }
 