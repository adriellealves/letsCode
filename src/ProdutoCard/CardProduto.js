import React, { useEffect, useState } from "react";
import { Image, View, Text, StyleSheet, ImageComponent } from "react-native";

export default function CardProduto(produto){
     const [title, setTitle] = useState('');
     const [price, setPrice] = useState(0);
     const [description, setDescription] = useState('');
     const [thumbnail, setThumbnail] = useState('');
     const[imagem,setImage] = useState('')
     
    const [id,setId] = useState()
 
useEffect(()=>{
     setPrice(produto.price)
     setTitle(produto.title)
     setDescription(produto.description)
     setId(produto.id)
     setImage(`'../../assets/img/${produto.id}.jpg'`)

     // setThumbnail(require(produto.thumbnail))
},[])
      

     return( 
        <View style={styles.itemWrapper} >
          <View style={styles.titleWrapper}>
               
               {/* <Image 
               style={styles.image} 
               source={{uri:thumbnail}} 
               alt={title}/> */}

               <Image 
                    style={styles.image}
                    src={imagem}
                    resizeMode="cover" 
                    alt={title}
               />

             
               <Text style={styles.title} >{title}</Text> 
          </View>

          <View style={styles.descPriceWrapper}>
               <View >
                  
                 <Text style={styles.price} >R$ {price},00</Text>   
               </View>
               <View >
                    <Text style={styles.subtitle} > {description}</Text>
               </View>

               
          </View>
           
        </View>
     )

}

const styles = StyleSheet.create({
     itemWrapper: {
         marginVertical:18,
         paddingVertical:8,
         marginHorizontal:8,
         borderRadius:12,
         elevation:8,
         flexDirection: "column",
         justifyContent: "center",
         alignItems: "center",
         backgroundColor:"#1b998b",
         height:150,
     },
     titleWrapper: {
         flexDirection:"row",
         alignItems:"center",
         justifyContent: "space-around",
     },
     descPriceWrapper: {
          flexDirection:"row-reverse",
          alignItems:"center",
          justifyContent:"space-between",
          marginHorizontal:18,
          justifyContent:"space-evenly",
     },
     title: {
         fontSize: 20,
         color: "#ffffff",
         marginLeft:15,
     },
     price:{
          fontSize: 16,
          color:"#FFF",
          paddingHorizontal:0,
          marginHorizontal:20,
     },
     subtitle: {
         marginTop:4,
         marginHorizontal:32,
         fontSize: 16,
         color: "#0b3954",
         
     },
     image: {
         height: 48,
         width: 48,
        backgroundColor:"#FFF",
     },
 });

 //01