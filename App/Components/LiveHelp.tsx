import React from 'react'
import { View, Text, Linking } from 'react-native'
import RoundedButton from './RoundedButton'
import styles from './Styles/LiveHelpStyles'

const LiveHelp = (props) => {
  return (
    <View style={styles.liveHelp}>
      <Text style={styles.liveHelpPhone}>
        (0774) 884-024
      </Text>
      <Text style={styles.liveHelpText}>
        Text or call us at anytime for directions, information,
        violations of our <Text style={styles.link} onPress={() => Linking.openURL('http://confcodeofconduct.com')}>Code of Conduct</Text>, or any other concern.
      </Text>
      <RoundedButton
        text='Send Text Message (SMS)'
        onPress={() => Linking.openURL('sms:0774884824')}
        style={styles.liveHelpButton}
      />
      <RoundedButton
        text='Messenger Bot'
        onPress={() => Linking.openURL('m.me/tsokalife')}
        style={styles.liveHelpButton}
      />
    </View>
  )
}

export default LiveHelp
