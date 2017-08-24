import React from 'react'
import { View, Text } from 'react-native'
import Sponsor from './Sponsor'
import { Images } from '../Themes'
import styles from './Styles/SponsorsStyles'

const Sponsors = () => {
  return (
    <View style={styles.sponsors}>
      <Text style={styles.heading}>Key Players</Text>
      <Text style={styles.description}>
        They make all of this fun stuff possible.
      </Text>


      <Text style={styles.sponsorTierTitle}>
        key players
      </Text>
      <View style={styles.sponsorTier}>
        <Sponsor url={'https://aws.amazon.com/'} image={Images.amazon} isLow />
        <Sponsor url={'http://reactnative.training/'} image={Images.training} isLow />
        <Sponsor url={'https://rangle.io/'} image={Images.rangle} isLow />
        <Sponsor url={'https://gudog.co.uk/'} image={Images.gudog} isLow />
        <Sponsor url={'http://www.oregon4biz.com'} image={Images.businessOregon} isLow />
        <Sponsor url={'http://www.healthsparq.com/'} image={Images.healthsparq} isLow />
      </View>
    </View>



  )
}

export default Sponsors
