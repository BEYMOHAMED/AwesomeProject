/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Logout from './public/media/logout.png';
import Bernardo from './public/media/bernardo.png'
import medicine from './public/media/medicine.png'
import doctor from './public/media/doctor.png'
import call from './public/media/call.png'
import reminder from './public/media/reminder.png'
import plus from './public/media/pluz.png'
import mj from './public/media/mj.jpg'
import phone from './public/media/phone.png'
import oj from './public/media/oj.jpg'
import harvey from './public/media/harvey.jpeg'
import pewds from './public/media/pewds.png'
import os from './public/media/os.jpg'
import sam from './public/media/sam.jpeg'

const days = [
  {
    num: 1,
    let: "Tue"

  },
  {
    num: 2,
    let: "Wed"

  },
  {
    num: 3,
    let: "Fri"

  },
  {
    num: 4,
    let: "Sat"

  },
  {
    num: 5,
    let: "Sun"

  }
]
const contacts = [
  {
    firstname: "Samuel",
    lastname: "L.Jackson",
    status: "Mother F**ker",
    img: sam,
    quote: 'Press one more time, I dare you mother fucker 🔫'
  },
  {
    firstname: "Michael",
    lastname: "Jackson",
    status: "Hee Hee",
    img: mj,
    quote: 'Hee Hee'
  },
  {
    firstname: "O.J",
    lastname: "Simpson",
    status: "Innocent",
    img: oj,
    quote: `I've been very clear. I won. I didn't commit the crime.`
  },
  {
    firstname: "Harvey",
    lastname: "Weinstein",
    status: "Gropper",
    img: harvey,
    quote: `They touched me first!`
  },
  {
    firstname: "Osama",
    lastname: "Bin Laden",
    status: "Alive",
    img: os,
    quote: `Hide and seek champion`
  },
  {
    firstname: "Pew",
    lastname: "Diepie",
    status: "Subscribe",
    img: pewds,
    quote: `meme review!! 👏👏`
  }
]
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draw:{
        width: 55,
        height: 80,
        backgroundColor: '#F9F9F9',
        marginLeft: 18,
        borderRadius: 5,
        shadowColor: '#D9D9D9',
        shadowOffset: {width: 0,height: 1},
        shadowOpacity: 1,
        shadowRadius: 3
      }
    }
  }
  Pressed(){
    this.setState({
      draw:{
      width: 55,
      height: 80,
      backgroundColor: '#28B67B',
      marginLeft: 18,
      borderRadius: 5,
      shadowColor: '#D9D9D9',
      shadowOffset: {width: 0,height: 1},
      shadowOpacity: 1,
      shadowRadius: 3
    }})
  }
  render() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SafeAreaView>
        <ScrollView>

            <View style={styles.header}>
              <View>
                <Text style={styles.titleText}>John Doe</Text>
                <Text style={styles.codeText}>ID: Q1734567891</Text>
              </View>
              <Image source={Logout } style={styles.header_img} />
            </View>
            
            <View style={styles.days}>
            {days.map((day,id) =>{
              return <TouchableOpacity key={id} onPress={this.Pressed.bind(this)}>
                <View style={this.state.draw} key={id}>
                  <Text style={styles.nb}>{day.num}</Text>
                  <Text style={styles.dd}>{day.let}</Text>
                </View>
              </TouchableOpacity>
            })}
            </View>

            <View style={styles.green}>
              <Image source={ Bernardo } style={styles.bernardo} />
              <Text style={styles.green_text}>Vous avez complété 75%{"\n"} de vos tâches cette semaine</Text>
            </View>

            <View style={styles.dash}>

              <View style={styles.row}>
                <View style={styles.block}>
                  <Image source={medicine } style={styles.icon} />
                  <View>
                    <Text style={styles.block_name}>Medicine</Text>
                    <Text style={styles.notif}>9 upcoming</Text>
                  </View>
                  
                </View>
                <View style={styles.block}>
                  <Image source={reminder } style={styles.icon} />
                  <View>
                    <Text style={styles.block_name}>Reminders</Text>
                    <Text style={styles.notif}>9 upcoming</Text>
                  </View>
                  
                </View>
              </View>
              
              <View style={styles.row}>
                <View style={styles.block}>
                  <Image source={doctor } style={styles.icon} />
                  <View>
                    <Text style={styles.block_name}>Doctor visits</Text>
                    <Text style={styles.notif}>9 upcoming</Text>
                  </View>
                  
                </View>
                <View style={styles.block}>
                  <Image source={call } style={styles.icon} />
                  <View>
                    <Text style={styles.block_name}>Calls</Text>
                    <Text style={styles.notif}>9 upcoming</Text>
                  </View>
                  
                </View>
              </View>

              <View style={styles.visit}>
                <Text style={styles.visit_text}>Visites effectuées ce mois-ci</Text>
                <View style={styles.progress_container}>
                  <View style={styles.progress_bar}></View>
                </View>
              </View>

              <View style={styles.family}>
                <View >
                  <Text style={styles.family_title}>Family</Text>
                  <Text style={styles.family_content}>Contact with your family</Text>
                </View>
                <Image source={ plus } style={styles.plus}/>
              </View>
                
              </View>

              <View style={styles.category}>
                <Text style={styles.cat}>All</Text>
                <Text style={styles.cat}>Loved</Text>
                <Text style={styles.cat}>Usefull</Text>
                <Text style={styles.cat}>Close</Text>
              </View>

              <View style={styles.contacts}>
              {contacts.map((contact ,id) => {
                return (<View key={id} style={styles.single_contact} >

                  <View style={styles.name_img}>
                    <TouchableOpacity onPress={()=>alert(contact.quote)}>
                      <Image source={contact.img} style={styles.contact_img} />
                    </TouchableOpacity>
                    
                    <Text style={styles.contact_info}>
                      <Text style={styles.contact_status}>{contact.status}{"\n"}</Text>
                      <Text style={styles.contact_name}>{contact.firstname + " " + contact.lastname}</Text>
                    </Text> 
                  </View>

                  <Image source={phone} style={styles.phone} />
              </View>)
              })}
            
            </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  )}
};

const styles = StyleSheet.create({
  myElement: {
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center'
  },
  codeText: {
    fontSize: 15,
    color:'#D9D9D9',
    textAlign:'center'
  },
  header:{
    flexDirection: 'row',
    paddingLeft: '35%'
  },
  header_img: {
    alignSelf: 'center',
    width: 40,
    marginLeft: '30%'
  },
  days: {
    flexDirection: 'row',
    alignContent: 'space-between',
    marginTop: 30
  },
  day: {
    width: 55,
    height: 80,
    backgroundColor: '#F9F9F9',
    marginLeft: 18,
    borderRadius: 5,
    shadowColor: '#D9D9D9',
    shadowOffset: {width: 0,height: 1},
    shadowOpacity: 1,
    shadowRadius: 3
  },
  day_green:{
    width: 55,
    height: 80,
    backgroundColor: '#28B67B',
    marginLeft: 18,
    borderRadius: 5,
    shadowColor: '#D9D9D9',
    shadowOffset: {width: 0,height: 1},
    shadowOpacity: 1,
    shadowRadius: 3
  },
  nb: {
    fontWeight: 'bold',
    textAlign:'center',
    fontSize: 20,
    paddingBottom: 15,
    paddingTop: 15
  },
  dd: {
    textAlign:'center',
    paddingBottom: 15,
  },
  green: {
    flexDirection: 'row',
    backgroundColor: '#28B67B',
    marginTop: 20,
    width: 341,
    height: 50,
    borderRadius: 7,
    alignSelf: 'center',
    top: 25,
    zIndex:2
  },
  bernardo: {
    bottom: 33
  },
  green_text: {
    color: '#fff',
    alignSelf: 'center',
    marginLeft: 20,
    fontSize: 12
  },
  dash: {
    backgroundColor: '#EBF3EC',
    paddingTop:40,
    
  },
  block: {
    width: 138,
    height: 167,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight:10,
    justifyContent:'space-around'
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  icon: {
    marginLeft:10,
  },
  block_name: {
    paddingLeft: 10,
    fontSize: 20,
    paddingTop: 20
  },
  notif: {
    color: '#9F9F9F',
    paddingLeft: 10,
    paddingTop:5
  },
  visit: {
    backgroundColor: '#28B67B',
    marginTop: 20,
    width: 341,
    height: 60,
    borderRadius: 7,
    alignSelf: 'center',
  },
  visit_text: {
    color: '#fff',
    marginLeft: 20,
    fontSize: 12,
    paddingTop: 10
  },
  plus: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    alignSelf: 'center'
    
  },
  family: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    
  },
  family_title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  family_content: {
    color: '#A4A8AC',
    paddingTop: 5
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 7,
    marginTop:20,
    borderBottomWidth: 2,
    borderBottomColor: '#E2E2E2'
  },
  cat: {
    color: '#A4A8AC',
    fontWeight: 'bold'
  },
  contact_img: {
    width: 30,
    height: 30,
    borderRadius:80
  },
  name_img: {
    flexDirection: 'row',
  },
  contact_info: {
    alignSelf: 'center',
    paddingLeft: 10
  },
  contact_status: {
    color: '#A4A8AC'
  },
  contact_name: {

  },
  contacts: {
    paddingLeft: 30,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10
  },
  phone: {
    alignSelf: 'center',
    width: 25,
    height: 25,
  },
  single_contact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#E2E2E2'
  },
  progress_container: {
    height: 4,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 10
  },
  progress_bar: {
    height: 4,
    width: '70%',
    backgroundColor: '#FACE3E',
  }
});

