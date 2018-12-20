import { StyleSheet } from 'react-native'
import theme from '@config/theme'

export const header = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingTop: 0,
    backgroundColor: theme.BACKGROUND
  },
  title: {
    fontFamily: theme.BOLD,
    fontSize: 21
  }
})

export const userInfo = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.BACKGROUND,
    padding: 43
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  displayName: {
    fontFamily: theme.BOLD,
    fontSize: 15,
    paddingTop: 11
  },
  email: {
    fontFamily: theme.MEDIUM,
    fontSize: 12,
    color: theme.GREY,
    paddingBottom: 7.5
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    color: theme.WHITE
  },
  linkedin: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3.5,
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: theme.LINKEDIN
  },
  instagram: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3.5,
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: theme.INSTAGRAM
  },
  twitter: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3.5,
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: theme.TWITTER
  },
  dribbble: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3.5,
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: theme.DRIBBBLE
  },
})
