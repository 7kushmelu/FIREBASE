import React, { useState } from "react";
import { Text, View, TextInput, Button, TouchableOpacity, Image, Alert } from "react-native"
import { auth } from "./firebase";

const App = ({ navigation }) => {

  [email, setemail] = useState("")
  [password, setpassword] = useState("")

  const handleSighnup = () => {
    auth
      .createUserWithEmailandPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
      }
      )
      .catch(error => alert(error.message))

  }

  return (<View>
    <View style={{ backgroundColor: "#C2E5D3", height: 80 }}>
    </View>
    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
      <TouchableOpacity>
        <Image source={require("./Image/vc.png")} style={{ height: 200, width: 200, }} />
      </TouchableOpacity>
    </View >
    <View style={{ marginTop: 10, marginStart: 50 }}>
      <Text style={{ fontSize: 20, color: "black", }}>Name</Text>
      <TextInput style={{
        borderWidth: 1, width: 300, borderRadius: 10
      }}
        placeholder="Enter user id"
        value={email}
        onChangeText={e => setemail(e)} />

    </View>


    <View style={{ marginTop: 20, marginStart: 50 }}>
      <Text style={{ fontSize: 20, color: "black", }}>Password.</Text>
      <TextInput style={{
        borderWidth: 1, width: 300, borderRadius: 10
      }} keyboardType='numeric'
        maxLength={10}
        placeholder="Enter password"
        value={password}
        onChangeText={e => setpassword(e)}
      />

    </View>
    <View style={{ marginTop: 50, justifyContent: "center", alignItems: "center", }}>
      <Button title="Add To Phonebook" onPress={handleSighnup} />
    </View>




  </View >
  )
}
export default App