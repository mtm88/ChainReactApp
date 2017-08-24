import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import RoundedButton from './RoundedButton'
import { Images } from '../Themes'
import styles from './Styles/SeeProcessStyles'

const SeeProcess = (props) => {
  return (
    <TouchableOpacity style={styles.processContainer} onPress={() => Linking.openURL('mailto:lionel@tsoka.life')}>
      <View style={styles.leftContainer}>
        <Image style={styles.starsIcon} source={Images.starsIcon} />
        <Text style={styles.text}>Feedback on the app</Text>
      </View>
      <Image style={styles.rightArrow} source={Images.whiteArrowIcon} />
    </TouchableOpacity>
  )
}

export default SeeProcess
