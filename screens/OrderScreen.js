import React from 'react';
import {StyleSheet,View,Text,Image,ScrollView} from 'react-native';
import SmallPicCard from './SmallPicCard.js'
import ResturantCard from './ResturauntCard.js'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Card } from 'react-bootstrap';

const ResturauntData = [
{name: 'NIC - Natural Ice Creams',
uri: 'https://media.gettyimages.com/photos/colorful-scoops-ice-cream-background-concept-picture-id965401258?b=1&k=6&m=965401258&s=612x612&w=0&h=7MwkS8b31-gc97Dituwyc0Cc21iylbT99uWJhcu5P0U=',
type: 'Ice Cream , Deserts',
},
{name: 'Bitoo Samosay Wala',
uri: 'https://media.istockphoto.com/photos/samosa2-picture-id507066979?b=1&k=6&m=507066979&s=612x612&h=K9-54uD9jHAEfAIDfazlG-Z0d1KdQFUErIYV8EODJuk=',
type: 'Street Food, Chinese',
},
{name: 'Dominos Pizza ',
uri: 'https://images.freeimages.com/images/small-previews/c5e/roasted-tomato-pizza-1538009.jpg',
type: 'Pizza, Fast Food',
},
{name: 'Burger King',
uri: 'https://media.istockphoto.com/photos/burger-king-picture-id458406353?b=1&k=6&m=458406353&s=612x612&h=msD-mLa68mERGIkyp855KaxpEwZ8zXtGoSacubhmHbc=',
type: 'Burger, American',
},
{name: 'Gulaab',
uri: 'https://media.gettyimages.com/photos/nonvegetarian-indian-thali-picture-id174973324?b=1&k=6&m=174973324&s=612x612&w=0&h=MBnZh1-enX5h0P8Nsbpn5nNPE6_rYJur_8vENwnE450=',
type: 'North Indian, StreetFood, Mithai',
},

]

const Brands= [{uri:'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-Logo-500x319.png',
name: 'McDonalds '},
{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/512px-Dominos_pizza_logo.svg.png', name: 'Dominos'},
{uri: 'https://seeklogo.com/images/B/Burger_King-logo-EB00FAD8D3-seeklogo.com.png',
name: 'Burger king'},
{uri: 'https://1000logos.net/wp-content/uploads/2017/03/KFC-Logo-500x430.png',
name: 'KFC'},
{uri: "http://www.licensingcorner.com/wp-content/uploads/2017/12/Haldiram-768x489.jpg", 
name: 'Haldirams'},{
  uri: 'https://www.designmantic.com/blog/wp-content/uploads/2016/08/SubWayNewLogo.png',
  name: 'SubWay'
}
]

const BrandCard = (props)=>{
  return(
    <View style={{margin: 15}}>
      <Image source={{uri: props.uri}} style={{height: 80, width: 80, borderRadius: 40,marginBottom:6}}/>
      <Text style={{fontWeight: 'bold'}}> {props.name}</Text>
    </View>
  )
}

export default class OrderScreen extends React.Component{
  render()
  {
    return(
      <View style={{backgroundColor:'white'}}>
     <View style={{borderWidth: 2, borderColor: '#ccc8c8', boxShadow: 1 ,padding: 8, marginHorizontal: 15, marginVertical: 5, borderRadius: 30,}}>
    <View style={{flexDirection: 'row'}}>
    <AntDesign name="search1" size={24} color="red"  />
     <Text style={{marginLeft: 10, color: '#ccc8c8', fontSize: 16}}>  Restaurant name, cuisines or dish...</Text>
     </View>
     </View>
   
      
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: 70, borderBottomWidth: 1, borderBottomColor: '#f2f7f3'}}>
    <Text style={{ fontSize: 15,
    margin: 6,
    marginLeft: 15,
    padding: 5,
    fontStyle: '',
    marginTop: 15,
    fontFamily: 'sans-serif',
    color: 'red',
    borderWidth: 1,
    borderColor: '#ccc8c8',
    borderRadius: 30}}><AntDesign name={'filter'} size={15} /> Filters </Text>
    <Text style={Styles.topnav}> Rating 4.0+ </Text>
    <Text style={Styles.topnav}> Safe and Hygenic </Text>
    <Text style={Styles.topnav}> Takeway </Text>
    <Text style={Styles.topnav}> Fastest Delivery </Text>
    <Text style={Styles.topnav}> Rating <AntDesign name={'caretdown'} /></Text>
    </ScrollView>

    <ScrollView>
    <View style={{ display: 'flex', borderRadius: 10, flexDirection: 'row', justifyContent:'space-between', borderColor: '#a5fab3', borderWidth: 1, margin: 5, padding: 5, backgroundColor: '#f0fcf2' }}>
      <View style={{ padding: 5}}>
          <MaterialCommunityIcons name={'shield-check'} color='green' size={30} />
      </View>
      <View style={{ padding: 5}}>
        <Text>
        Bird flue virus is sensitive to heat, so it's safe to consume cooked chicken and meat.
        </Text>
      </View>
    </View>

    <View style={{marginTop: 5}}>
      <Image style={{ height: 200, width: 800, borderRadius: 10,}} source={require('../assets/banner.png')} />
    </View>

 <View style={{marginTop: 2}}/>
        <Text style={{fontWeight: 'bold', fontSize: 22}}>  Top Brands in Spotlight</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        Brands.map(item=>{
          return (
            <BrandCard uri={item.uri} name={item.name}/>
          )
        })
      }
       </ScrollView>
      {ResturauntData.map(items=>{
        return  <ResturantCard  name={items.name} uri={items.uri} type={items.type} />
      })}
        {ResturauntData.map(items=>{
        return  <ResturantCard  name={items.name} uri={items.uri} type={items.type} />
      })}
       <Text style={{fontWeight: 'bold', fontSize: 22}}>  Lockdown Cravings </Text>    
 <SmallPicCard/>
   {ResturauntData.map(items=>{
        return  <ResturantCard  name={items.name} uri={items.uri} type={items.type} />
      })}

     </ScrollView>
      </View>
    )
  }
}
const Styles = StyleSheet.create({
  topnav:{
    fontSize: 15,
    margin: 6,
    padding: 5,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#ccc8c8',
    marginTop: 15,
    color: 'gray',
    fontFamily: 'sans-serif'
  }
})