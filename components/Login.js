import { StyleSheet, Text, TextInput, Touchable, View } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from 'react-native-btr'
import { TouchableOpacity } from 'react-native'

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)



  return (
    <View style={styles.section}>
      <Text style={styles.head}>Login</Text>
      <Text style={styles.ht}>For any query contact abc@gmail.com</Text>
      <View style={styles.container}>
        <View style={styles.cont}>
          <Text style={styles.label}>Enter email </Text>
          <TextInput
            style={styles.tinput}
            value={email}
            onChangeText={(txt) => { setEmail(txt) }}
          />
        </View>
        <View style={styles.cont}>
          <Text style={styles.label}>Enter password </Text>
          <TextInput
            style={styles.tinput}
            value={password}
            onChangeText={(txt) => { setPassword(txt) }}
          />
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            color='black'
            checked={remember}
            onPress={() => {
              setRemember(!remember)
            }}
          />
          <Text style={styles.label}>Terms & conditions</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: remember ? '#000' : 'grey',
            width: '100%',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          disabled={!remember ? true : false}
          onPress={() => {
            if (email === 'Harsh' && password === '1234') {
              alert(`Thank you for login ${email}`)
              navigation.navigate('Home')
            }
            else {
              alert('Invalid credentials')
              return
            }
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  section: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  head: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  ht: {
    fontSize: 20,
    marginBottom: 20,
    paddingHorizontal: 35,
    textAlign: 'center'
  },
  container: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10
  },
  cont: {
    width: '100%',
    marginBottom: 20
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    marginLeft: 5
  },
  tinput: {
    width: '100%',
    height: 40,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 20,
    color: '#000',
    marginTop: 5

  },
  checkbox: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  }
})