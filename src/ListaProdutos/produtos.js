import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView, FlatList } from 'react-native';
import CardProduto from '../ProdutoCard/CardProduto';
import buscaProdutos from '../service/requests';


 
function ListaProdutos(){
    const [produtos,setProdutos] = useState([])
    const [produto, setProduto] = useState([])
    const [title, setTitle] = useState('');
     const [price, setPrice] = useState('');
     const [description, setDescription] = useState('');
     const [thumbnail, setThumbnail] = useState('');
    
    async function busca(){
        const resultado = await buscaProdutos()
            if(resultado){
                resultado.forEach(element => {
                        setProdutos((produtosAnteriores)=>[...produtosAnteriores, {...element}])
                        setDescription(element.description);
                        setPrice(element.price);
                        setThumbnail(element.thumbnail);
                        setTitle(element.title);
                    })
            }
            else{
                Alert.alert("sem produtos")
            }
    }

//    const renderLocal = ({item,index}) =>{
//         return <CardProduto key={item.id} title={item.title} price={item.price} description={item.description} thumbnail={item.thumbnail} id ={item.id}/>
//     }

    useEffect(()=>{
    
        const props = busca();
    
    },[])

    return(
        <>
            <SafeAreaView>
                <FlatList
                    data={produtos}
                    renderItem={({item}) =>  <CardProduto key={item.id} title={item.title} price={item.price} description={item.description} thumbnail={item.thumbnail} id={item.id}/> }
                    keyExtractor={item=>item.id}
                />      
            </SafeAreaView>
        </>
    )
}



export default ListaProdutos;