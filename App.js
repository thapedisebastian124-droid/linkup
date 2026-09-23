import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
export default function App() {
  const [posts, setPosts] = useState([{id:'1', text:'Welcome to LinkUp! 🔥 Your first post!'}]);
  const [input, setInput] = useState('');
  const addPost = () => { if(input.trim()){ setPosts([{id: Date.now().toString(), text: input}, ...posts]); setInput(''); } };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}><Text style={styles.logo}>LinkUp</Text></View>
      <View style={styles.inputBox}>
        <TextInput style={styles.input} placeholder="What's on your mind?" value={input} onChangeText={setInput}/>
        <TouchableOpacity style={styles.btn} onPress={addPost}><Text style={styles.btnText}>Post</Text></TouchableOpacity>
      </View>
      <FlatList data={posts} keyExtractor={i=>i.id} renderItem={({item})=>(<View style={styles.post}><Text style={styles.postText}>{item.text}</Text></View>)} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{flex:1, backgroundColor:'#fff'},
  header:{backgroundColor:'#1877F2', padding:15, alignItems:'center', paddingTop:40},
  logo:{color:'#fff', fontSize:24, fontWeight:'bold'},
  inputBox:{flexDirection:'row', padding:10, borderBottomWidth:1, borderColor:'#ddd'},
  input:{flex:1, backgroundColor:'#f0f2f5', borderRadius:20, padding:10, marginRight:10},
  btn:{backgroundColor:'#1877F2', borderRadius:20, padding:12, paddingHorizontal:20},
  btnText:{color:'#fff', fontWeight:'bold'},
  post:{padding:15, borderBottomWidth:1, borderColor:'#eee'},
  postText:{fontSize:16}
});
