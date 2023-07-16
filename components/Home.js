import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

const Home = () => {

  const [d, setD] = useState([]);
  const [isloaded, setIsloaded] = useState(false);

  useEffect(() => {
    const data = async () => {
      try {
        const x = await fetch('http://www.omdbapi.com/?apikey=5f62fb95&s=hero')
        const y = await x.json()
        setD(y.Search);
        setIsloaded(true);
      }
      catch (error) {
        console.log(error);
      }
    }
    data();
  }, [])

  return (
    <View>
      {!isloaded ? <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <ActivityIndicator />
      </View> :
        <View style={styles.section}>
          <Text style={styles.head}>Movies</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={d}
            keyExtractor={item => item.imdbID}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <View style={styles.imgContainer}>
                    <Image source={{ uri: item.Poster }} style={styles.img} />
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.txt}>{item.Title}</Text>
                    <Text style={styles.txt}>{item.Year}</Text>
                  </View>
                </View>
              )
            }}
          />
        </View>
      }
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  section: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: '100%',
  },
  head: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5
  },
  imgContainer: {
    width: 300,
    height: 300,
    padding: 20
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  content: {
    width: 300,
    padding: 10,
  },
  txt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})