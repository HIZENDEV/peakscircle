import { StyleSheet, Platform, NativeModules } from "react-native"
import theme from "@config/theme.1"

const { StatusBarManager } = NativeModules
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT

export const header = StyleSheet.create({
  headerAdd: {
    paddingTop: Platform.OS === 'ios' ? STATUSBAR_HEIGHT * 2 : 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal: theme.DEVICE_WIDTH * (10 / 100),
    backgroundColor: theme.BACKGROUND
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? STATUSBAR_HEIGHT * 2 : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: "4%",
    backgroundColor: theme.BACKGROUND
  },
  headerSimple: {
    paddingTop: Platform.OS === 'ios' ? STATUSBAR_HEIGHT * 2 : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "4%",
    backgroundColor: theme.BACKGROUND
  },
  title: {
    fontFamily: theme.BOLD,
    fontSize: 21,
    color: theme.PRIMARY
  },
  icons: {
    color: theme.PRIMARY
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 5,
    backgroundColor: theme.BACKGROUND,
    color: theme.PRIMARY,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4
  },
  searchSectionAdd: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginRight: 0,
    marginBottom: 30,
    borderRadius: 5,
    marginRight: 16,
    backgroundColor: theme.BACKGROUND,
    color: theme.PRIMARY,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4
  },
  searchIcon: {
    padding: 8,
    color: theme.PRIMARY
  },
  addButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 4,
    backgroundColor: theme.PINK,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4
  },
  addIcon: {
    borderRadius: 5,
    color: theme.WHITE
  },
  input: {
    flex: 1,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 0,
    borderRadius: 5,
    backgroundColor: theme.BACKGROUND,
    color: theme.PRIMARY
  },
  headerLeft: {
    paddingTop: Platform.OS === 'ios' ? STATUSBAR_HEIGHT * 2 : 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: "4%",
    backgroundColor: theme.BACKGROUND
  },
  rightText: {
    marginLeft: 5
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  welcome: {
    fontFamily: theme.BOLD,
    fontSize: 19,
    paddingTop: 11,
    color: theme.PRIMARY
  },
  upcoming: {
    marginTop: -4,
    fontFamily: theme.MEDIUM,
    fontSize: 12,
    color: theme.GREY,
    paddingBottom: 7.5
  },
  centeredDefault: {
    backgroundColor: "red"
  },
  back: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backText: {
    padding: 10,
    color: theme.PRIMARY
  },
})

export const userInfo = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.BACKGROUND,
    padding: 43
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  displayName: {
    fontFamily: theme.BOLD,
    fontSize: 15,
    paddingTop: 11,
    color: theme.PRIMARY
  },
  email: {
    fontFamily: theme.MEDIUM,
    fontSize: 12,
    paddingBottom: 7.5,
    color: theme.GREY
  },
  social: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  icons: {
    color: theme.WHITE
  },
  linkedin: {
    justifyContent: "center",
    alignItems: "center",
    margin: 3.5,
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: theme.LINKEDIN
  },
  instagram: {
    justifyContent: "center",
    alignItems: "center",
    margin: 3.5,
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: theme.INSTAGRAM
  },
  twitter: {
    justifyContent: "center",
    alignItems: "center",
    margin: 3.5,
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: theme.TWITTER
  },
  dribbble: {
    justifyContent: "center",
    alignItems: "center",
    margin: 3.5,
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: theme.DRIBBBLE
  },
  signOut: {
    backgroundColor: theme.PINK,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 2
  },
  signOutText: {
    color: theme.WHITE,
    fontSize: 11,
  }
})

export const eventInfo = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: theme.BACKGROUND,
  },
  content: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: theme.DEVICE_WIDTH * (5 / 100),
  },
  cover: {
    width: theme.DEVICE_WIDTH,
    height: theme.DEVICE_WIDTH / 2,
    resizeMode: 'cover',
  },
  title: {
    fontFamily: theme.BOLD,
    fontSize: 24,
    paddingTop: 11,
    color: theme.PRIMARY
  },
  date: {
    fontFamily: theme.BOLD,
    fontSize: 15,
    color: theme.GREY
  },
  opinion: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  opinionCount: {
    marginLeft: 4,
    textAlign: "left",
    fontSize: 12,
    fontFamily: theme.MEDIUM,
    color: theme.GREY,
  },
  opinionIcons: {
    marginLeft: 10,
    color: theme.GREY,
  },
  stars: {
    textAlign: "left",
    fontSize: 30,
    fontFamily: theme.BOLD,
    color: theme.STAR,
  },
  description: {
    fontFamily: theme.MEDIUM,
    fontSize: 14,
    paddingBottom: 7.5,
    color: theme.PRIMARY,
    opacity: .7
  },
  social: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  icons: {
    color: theme.WHITE
  },
  linkedin: {
    justifyContent: "center",
    alignItems: "center",
    margin: 3.5,
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: theme.LINKEDIN
  },
  instagram: {
    justifyContent: "center",
    alignItems: "center",
    margin: 3.5,
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: theme.INSTAGRAM
  },
  twitter: {
    justifyContent: "center",
    alignItems: "center",
    margin: 3.5,
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: theme.TWITTER
  },
  dribbble: {
    justifyContent: "center",
    alignItems: "center",
    margin: 3.5,
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: theme.DRIBBBLE
  }
})

export const title = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 22,
    backgroundColor: theme.BACKGROUND
  },
  iconsAlign: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: theme.EXTRA,
    fontSize: 21,
    color: theme.PRIMARY
  },
  action: {},
  icons: {
    color: theme.PRIMARY
  },
  add:{
    marginRight: 20
  },
  actionText: {
    color: theme.GREY,
    fontFamily: theme.BOLD,
    fontSize: 13
  }
})

export const loading = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: theme.DEVICE_WIDTH,
    height: theme.DEVICE_HEIGHT,
    backgroundColor: theme.BACKGROUND
  },
  lottie: {
    alignSelf: 'center',
    width: theme.DEVICE_WIDTH / 3,
    height: theme.DEVICE_WIDTH / 3
  }
})

export const sign = StyleSheet.create({
  container: {
    backgroundColor: theme.BACKGROUND,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  top: {
    backgroundColor: theme.BACKGROUND,
    width: theme.DEVICE_WIDTH,
    resizeMode: 'cover',
    height: 270
  },
  signInButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "50%",
    height: "20%",
    marginBottom: "3%"
  },
  innerButton: {
    backgroundColor: theme.WHITE,
    padding: 5,
    marginRight: "8%",
    borderRadius: 30,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 0.16
  },
  iconButton: {
    width: 25,
    height: 25,
    resizeMode: "contain"
  },
  iconButtonSVG: {
    color: theme.PINK,
    marginBottom: -1,
  },
  textButton: {
    color: theme.PRIMARY
  },
  textAlpha: {
    color: theme.PRIMARY
  },
  alpha: {
    backgroundColor: theme.BACKGROUND,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "10%"
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: theme.DEVICE_WIDTH * (90 / 100),
    borderRadius: 5,
  },
  modalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.BACKGROUND,
  },
  fieldSection: {
    marginHorizontal: theme.DEVICE_WIDTH * (5 / 100),
    marginVertical: theme.DEVICE_WIDTH * (4 / 100),
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: theme.BACKGROUND,
    color: theme.WHITE,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4
  },
  fieldIcon: {
    padding: 8,
    color: theme.PINK
  },
  input: {
    flex: 1,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 0,
    borderRadius: 5,
    backgroundColor: theme.BACKGROUND,
    color: theme.PRIMARY
  },
  nextButton: {
    backgroundColor: theme.PINK,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
  },
  nextButtonIcon: {
    color: theme.WHITE
  }

})

export const compactList = StyleSheet.create({
  list: {
    backgroundColor: theme.BACKGROUND
  },
  container: {
    justifyContent: "flex-end",
    margin: theme.DEVICE_WIDTH * (5 / 100),
    width: theme.DEVICE_WIDTH * (90 / 100),
    height: theme.DEVICE_HEIGHT / 7,
    borderRadius: 7,
    backgroundColor: theme.WHITE,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4
  },
  empty: {
    justifyContent: "flex-end",
    margin: theme.DEVICE_WIDTH * (5 / 100),
    width: theme.DEVICE_WIDTH * (90 / 100),
    height: theme.DEVICE_HEIGHT / 7,
  },
  image: {
    position: "absolute",
    width: theme.DEVICE_WIDTH * (90 / 100),
    height: theme.DEVICE_HEIGHT / 7,
    borderRadius: 7,
    resizeMode: "cover",
    backgroundColor: theme.PINK
  },
  title: {
    padding: 10,
    position: "absolute",
    textAlign: "left",
    fontSize: 18,
    fontFamily: theme.BOLD,
    color: theme.WHITE
  },
  error: {
    padding: 10,
    position: "absolute",
    textAlign: "center",
    fontSize: 12,
    fontFamily: theme.MEDIUM,
    color: theme.GREY
  }
})

export const eventsList = StyleSheet.create({
  list: {
    backgroundColor: theme.BACKGROUND
  },
  error: {
    padding: 10,
    position: "absolute",
    textAlign: "center",
    fontSize: 12,
    fontFamily: theme.MEDIUM,
    color: theme.GREY
  }
})

export const event = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: 'flex-start',
    margin: theme.DEVICE_WIDTH * (5 / 100),
    width: theme.DEVICE_WIDTH * (90 / 100),
    height: (theme.DEVICE_WIDTH * (65 / 100) - theme.DEVICE_WIDTH * (15 / 100)) + (28 * 5) + 120,
    marginTop: theme.DEVICE_WIDTH * (20 / 100),
    paddingHorizontal: theme.DEVICE_WIDTH * (5 / 100),
    borderRadius: 7,
    backgroundColor: theme.CONTAINER,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    marginTop: -theme.DEVICE_WIDTH * (15 / 100),
    width: theme.DEVICE_WIDTH * (80 / 100),
    height: theme.DEVICE_WIDTH * (65 / 100),
    borderRadius: 7,
    resizeMode: "cover",
    backgroundColor: theme.PINK,
  },
  block: {
    width: theme.DEVICE_WIDTH * (80 / 100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 4
  },
  stretchedBlock: {
    width: theme.DEVICE_WIDTH * (80 / 100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  bottomBlock: {
    width: theme.DEVICE_WIDTH * (80 / 100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.PINK,
    width: 118,
    height: 32,
    borderRadius: 3,
    marginLeft: (theme.DEVICE_WIDTH * (80 / 100)) * (1 / 3.06),
    marginBottom: 10,
  },
  disabled: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.DISABLE,
    width: 118,
    height: 32,
    borderRadius: 3,
    marginLeft: (theme.DEVICE_WIDTH * (80 / 100)) * (1 / 3.06),
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: theme.WHITE,
    fontFamily: theme.BOLD
  },
  bubbleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  bubbleImage: {
    backgroundColor: theme.BACKGROUND,
    width: 28,
    height: 28,
    borderRadius: 14,
    borderColor: theme.WHITE,
    borderWidth: 2,
    marginRight: -14,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  bubble: {
    backgroundColor: theme.PINK,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: theme.WHITE,
    borderWidth: 2,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  bubbleText: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: theme.BOLD,
    color: theme.WHITE
  },
  title: {
    textAlign: "left",
    fontSize: 18,
    fontFamily: theme.BOLD,
    color: theme.PRIMARY
  },
  info: {
    height: 30,
    padding: 8,
    textAlign: "left",
    fontSize: 13,
    fontFamily: theme.MEDIUM,
    color: theme.PRIMARY
  },
  description: {
    height: 56,
    marginVertical: 10,
    textAlign: "center",
    fontSize: 12,
    fontFamily: theme.MEDIUM,
    color: theme.PRIMARY
  },
  icons: {
    color: theme.PRIMARY
  },
  buttonIconInner: {
    color: theme.PRIMARY,
    paddingRight: 4,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
    width: theme.DEVICE_WIDTH * (90 / 100),
    borderRadius: 5,
  },
  modalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.BACKGROUND,
  },
  fieldSection: {
    marginHorizontal: theme.DEVICE_WIDTH * (5 / 100),
    marginVertical: theme.DEVICE_WIDTH * (4 / 100),
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: theme.BACKGROUND,
    color: theme.WHITE,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4
  },
  fieldIcon: {
    padding: 8,
    color: theme.PINK
  },
  input: {
    flex: 1,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 0,
    borderRadius: 5,
    backgroundColor: theme.BACKGROUND,
    color: theme.PRIMARY
  },
  nextButton: {
    backgroundColor: theme.PINK,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
  },
  nextButtonIcon: {
    color: theme.WHITE
  }
})

export const archivesList = StyleSheet.create({
  list: {
    backgroundColor: theme.BACKGROUND,
    paddingBottom: theme.DEVICE_WIDTH * (10 / 100),
  },
  empty: {
    justifyContent: 'center',
    width: theme.DEVICE_WIDTH,
    height: theme.DEVICE_WIDTH * (22 / 100),
    backgroundColor: theme.BACKGROUND
  },
  error: {
    padding: 10,
    textAlign: "center",
    fontSize: 12,
    fontFamily: theme.MEDIUM,
    color: theme.GREY
  }
})

export const archive = StyleSheet.create({
  container: {
    margin: theme.DEVICE_WIDTH * (5 / 100),
    marginBottom: theme.DEVICE_WIDTH * (1 / 100),
    width: theme.DEVICE_WIDTH * (90 / 100),
    height: theme.DEVICE_WIDTH * (22 / 100),
    borderRadius: 7,
    backgroundColor: theme.CONTAINER,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  placement: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'flex-start',
  },
  left: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'flex-start',
  },
  right: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
  },
  image: {
    width: (theme.DEVICE_WIDTH * (90 / 100)) * (1 / 4),
    height: theme.DEVICE_WIDTH * (22 / 100),
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    resizeMode: "cover",
    backgroundColor: theme.PRIMARY,
    marginRight: 8
  },
  title: {
    height: (theme.DEVICE_WIDTH * (22 / 100)) * (1 / 3),
    textAlign: "left",
    fontSize: 16,
    fontFamily: theme.BOLD,
    color: theme.PRIMARY
  },
  date: {
    height: (theme.DEVICE_WIDTH * (22 / 100)) * (1 / 4),
    textAlign: "left",
    fontSize: 10,
    fontFamily: theme.BOLD,
    color: theme.GREY
  },
  opinion: {
    height: (theme.DEVICE_WIDTH * (22 / 100)) * (1 / 2.5),
    paddingBottom: 8,
    textAlign: "left",
    fontSize: 30,
    fontFamily: theme.BOLD,
    color: theme.STAR,
    
  },
  icons: {
    padding: 10,
    color: theme.PRIMARY
  },
})

export const incommingList = StyleSheet.create({
  list: {
    backgroundColor: theme.BACKGROUND,
    paddingBottom: theme.DEVICE_WIDTH * (10 / 100),
  },
  empty: {
    justifyContent: 'center',
    width: theme.DEVICE_WIDTH,
    height: theme.DEVICE_WIDTH * (22 / 100),
    backgroundColor: theme.BACKGROUND,
  },
  error: {
    padding: 10,
    textAlign: "center",
    fontSize: 12,
    fontFamily: theme.MEDIUM,
    color: theme.GREY
  }
})

export const incomming = StyleSheet.create({
  container: {
    margin: theme.DEVICE_WIDTH * (5 / 100),
    marginBottom: theme.DEVICE_WIDTH * (1 / 100),
    width: theme.DEVICE_WIDTH * (90 / 100),
    height: theme.DEVICE_WIDTH * (22 / 100),
    borderRadius: 7,
    backgroundColor: theme.CONTAINER,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  placement: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'flex-end',
    width: theme.DEVICE_WIDTH * (90 / 100)
  },
  left: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'flex-start',
  },
  right: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: theme.PINK,
    width: 86,
    height: 26,
    borderRadius: 3,
    marginRight: 8,
    marginBottom: 12,
  },
  buttonText: {
    fontFamily: theme.BOLD,
    color: theme.WHITE,
    fontSize: 12
  },
  rightDisable:{
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: theme.DISABLE,
    width: 86,
    height: 26,
    borderRadius: 3,
    marginRight: 8,
    marginBottom: 12,
  },
  image: {
    width: (theme.DEVICE_WIDTH * (90 / 100)) * (1 / 4),
    height: theme.DEVICE_WIDTH * (22 / 100),
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    resizeMode: "cover",
    backgroundColor: theme.PRIMARY,
    marginRight: 8
  },
  title: {
    height: (theme.DEVICE_WIDTH * (22 / 100)) * (1 / 3),
    textAlign: "left",
    fontSize: 16,
    fontFamily: theme.BOLD,
    color: theme.PRIMARY
  },
  date: {
    height: (theme.DEVICE_WIDTH * (22 / 100)) * (1 / 4),
    textAlign: "left",
    fontSize: 10,
    fontFamily: theme.BOLD,
    color: theme.GREY
  },
  opinion: {
    height: (theme.DEVICE_WIDTH * (22 / 100)) * (1 / 2.5),
    paddingBottom: 8,
    textAlign: "left",
    fontSize: 30,
    fontFamily: theme.BOLD,
    color: theme.STAR,

  },
  icons: {
    padding: 10,
    color: theme.PRIMARY
  },
  bubbleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  bubbleImage: {
    backgroundColor: theme.BACKGROUND,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: theme.WHITE,
    borderWidth: 1,
    marginRight: -12,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  bubble: {
    backgroundColor: theme.PINK,
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: theme.WHITE,
    borderWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  bubbleText: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: theme.BOLD,
    color: theme.WHITE
  }
})

export const matesList = StyleSheet.create({
  list: {
    backgroundColor: theme.BACKGROUND
  },
  container: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: 'center',
    marginHorizontal: theme.DEVICE_WIDTH * (5 / 100),
    marginVertical: theme.DEVICE_WIDTH * (1 / 100),
    width: theme.DEVICE_WIDTH * (90 / 100),
    height: theme.DEVICE_HEIGHT / 9,
    borderRadius: 7,
    backgroundColor: theme.CONTAINER,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4
  },
  empty: {
    justifyContent: "flex-end",
    margin: theme.DEVICE_WIDTH * (5 / 100),
    width: theme.DEVICE_WIDTH * (90 / 100),
    height: theme.DEVICE_HEIGHT / 7,
  },
  image: {
    marginLeft: 10,
    width: theme.DEVICE_WIDTH * (15 / 100),
    height: theme.DEVICE_WIDTH * (15 / 100),
    borderRadius: (theme.DEVICE_WIDTH * (15 / 100)) / 2,
    resizeMode: "cover",
    backgroundColor: theme.PINK
  },
  right: {
    marginLeft: 10
  },
  displayName: {
    fontFamily: theme.BOLD,
    fontSize: 15,
    paddingTop: 11,
    color: theme.PRIMARY
  },
  email: {
    fontFamily: theme.MEDIUM,
    fontSize: 12,
    paddingBottom: 7.5,
    color: theme.PRIMARY,
    opacity: 0.6
  },
  error: {
    padding: 10,
    position: "absolute",
    textAlign: "center",
    fontSize: 12,
    fontFamily: theme.MEDIUM,
    color: theme.GREY
  }
})

export const memories = StyleSheet.create({
  content: {
    backgroundColor: theme.WHITE
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 22,
    backgroundColor: theme.BACKGROUND
  },
  title: {
    fontFamily: theme.EXTRA,
    fontSize: 21,
    color: theme.PRIMARY
  },
  icons: {
    color: theme.PRIMARY
  },
  image: {
    borderRadius: 7,
    backgroundColor: theme.BACKGROUND,
  },
  cover: {
    resizeMode: 'cover',
    borderRadius: 7,
    margin: theme.DEVICE_WIDTH * (1 / 100),
    width: theme.DEVICE_WIDTH * (28 / 100),
    height: theme.DEVICE_WIDTH * (28 / 100),
  },
  list: {
    backgroundColor: theme.BACKGROUND
  },
  empty: {

  },
  error: {
    color: theme.GREY,
    fontSize: 14,
  }

})

export const selectPic = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: theme.DEVICE_HEIGHT /6,
    marginHorizontal: theme.DEVICE_WIDTH /8,
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 22,
    backgroundColor: theme.BACKGROUND
  },
  title: {
    fontFamily: theme.EXTRA,
    fontSize: 20,
    color: theme.PRIMARY,
    textAlign: 'left',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 11,
    color: theme.PRIMARY,
    textAlign: 'left',
  },
  icons: {
    color: theme.PRIMARY
  },
  image: {
    borderRadius: 35,
    width: 70,
    height: 70,
    margin: 5,
  },
  pic: {
    borderRadius: 35,
    width: 70,
    height: 70,
  },
  blur: {
    borderRadius: 35,
    width: 70,
    height: 70,
    opacity: .2
  },
  button: {
    alignSelf: 'center',
    backgroundColor: theme.PINK,
    borderRadius: 3,
    width: theme.DEVICE_WIDTH * (1 / 5)
  },
  buttonInner: {
    color: theme.WHITE,
    fontFamily: theme.BOLD,
    textAlign: 'center',
    padding: 4,
  },
  list: {
    width: theme.DEVICE_WIDTH,
    marginVertical: 50,
  }
})

export const loginInfo = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: theme.DEVICE_HEIGHT /6,
    marginHorizontal: theme.DEVICE_WIDTH /10,
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 22,
    backgroundColor: theme.BACKGROUND
  },
  fieldSection: {
    marginHorizontal: theme.DEVICE_WIDTH * (4 / 100),
    marginVertical: 6,
    paddingLeft: 10,
    paddingVertical: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: theme.BACKGROUND,
    color: theme.WHITE,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4
  },
  fieldIcon: {
    padding: 8,
    color: theme.PINK
  },
  input: {
    flex: 1,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 0,
    borderRadius: 5,
    backgroundColor: theme.BACKGROUND,
    color: theme.PRIMARY
  },
  title: {
    fontFamily: theme.EXTRA,
    fontSize: 20,
    color: theme.PRIMARY,
    textAlign: 'left',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 11,
    color: theme.PRIMARY,
    textAlign: 'left',
  },
  icons: {
    color: theme.PRIMARY
  },
  image: {
    borderRadius: 35,
    width: 70,
    height: 70,
    margin: 5,
  },
  picContainer: {
    alignSelf: 'center',
    marginBottom: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4
  },
  pic: {
    borderRadius: 40,
    width: 80,
    height: 80,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: theme.PINK,
    borderRadius: 3,
    width: theme.DEVICE_WIDTH * (1 / 5)
  },
  disabled: {
    alignSelf: 'center',
    backgroundColor: theme.DISABLE,
    borderRadius: 3,
    width: theme.DEVICE_WIDTH * (1 / 5)
  },
  buttonInner: {
    color: theme.WHITE,
    fontFamily: theme.BOLD,
    textAlign: 'center',
    padding: 4,
  },
  list: {
    marginVertical: 80,
  }
})

export const image = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  image: {
    resizeMode: 'contain',
    width: theme.DEVICE_WIDTH,
    height: theme.DEVICE_WIDTH,
  }
})

export const settings = StyleSheet.create({
  container: {
    backgroundColor: theme.BACKGROUND
  },
  list: {
    marginHorizontal: theme.DEVICE_WIDTH * (5 / 100),
    marginVertical: theme.DEVICE_WIDTH * (4 / 100),
    borderRadius: 7,
    backgroundColor: theme.COMTAINER,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  title: {
    color: theme.PRIMARY,
    fontFamily: theme.BOLD,
    fontSize: 18
  },
  icons: {
    color: theme.PRIMARY
  },
  switch: {

  },
  logout: {
    marginHorizontal: theme.DEVICE_WIDTH * (5 / 100),
    marginVertical: theme.DEVICE_WIDTH * (4 / 100),
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    backgroundColor: theme.CONTAINER,
    elevation: 4
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: theme.DEVICE_HEIGHT * (90 / 100),
    width: theme.DEVICE_WIDTH,
    borderRadius: 5,
  },
  modalContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.BACKGROUND,
  },
  fieldSection: {
    marginHorizontal: theme.DEVICE_WIDTH * (5 / 100),
    marginVertical: theme.DEVICE_WIDTH * (4 / 100),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: theme.BACKGROUND,
    color: theme.WHITE,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4
  },
  fieldIcon: {
    padding: 8,
    color: theme.PRIMARY
  },
  input: {
    flex: 1,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 0,
    borderRadius: 5,
    backgroundColor: theme.BACKGROUND,
    color: theme.PRIMARY
  },
  nextButton: {
    marginTop: 30,
    backgroundColor: theme.PINK,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
  },
  nextButtonIcon: {
    color: theme.WHITE
  }
})

export const create = StyleSheet.create({
  fieldSection: {
    marginHorizontal: theme.DEVICE_WIDTH * (5 / 100),
    marginVertical: theme.DEVICE_WIDTH * (4 / 100),
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: theme.BACKGROUND,
    color: theme.WHITE,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: theme.DEVICE_WIDTH * (5 / 100),
    marginVertical: theme.DEVICE_WIDTH * (4 / 100),
  },
  fieldInRow: {
    width: theme.DEVICE_WIDTH * (50 / 100) - theme.DEVICE_WIDTH * (7.5 / 100),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: theme.BACKGROUND,
    color: theme.PRIMARY,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4
  },
  fieldDate: {
    color: theme.PRIMARY,
    paddingVertical: 12 
    
  },
  fieldIcon: {
    padding: 8,
    color: theme.PINK
  },
  input: {
    flex: 1,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 0,
    borderRadius: 5,
    backgroundColor: theme.BACKGROUND,
    color: theme.PRIMARY
  },
  inputDate: {
    flex: 1,
    paddingTop: 2,
    paddingRight: 1,
    paddingBottom: 2.1,
    borderRadius: 5,
    backgroundColor: theme.BACKGROUND
  },
  inputTag: {
    flex: 1,
    paddingTop: 2,
    paddingRight: 1,
    paddingBottom: 2.1,
    borderRadius: 5,
    width: theme.DEVICE_WIDTH - theme.DEVICE_WIDTH * (20 / 100),
    backgroundColor: theme.BACKGROUND
  },
  fieldImage: {
    marginHorizontal: theme.DEVICE_WIDTH * (5 / 100),
    marginVertical: theme.DEVICE_WIDTH * (4 / 100),
    height: theme.DEVICE_HEIGHT * (16 / 100),
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: theme.BACKGROUND,
    color: theme.PRIMARY,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4
  },
  fieldCover: {
    marginHorizontal: theme.DEVICE_WIDTH * (5 / 100),
    marginVertical: theme.DEVICE_WIDTH * (5 / 100),
    height: theme.DEVICE_HEIGHT * (16 / 100),
    width: theme.DEVICE_WIDTH * (90 / 100),
    resizeMode: 'cover',
    borderRadius: 5,
  },
  fieldLocation: {
    marginHorizontal: theme.DEVICE_WIDTH * (5 / 100),
    marginVertical: theme.DEVICE_WIDTH * (4 / 100),
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: theme.BACKGROUND,
    color: theme.PRIMARY,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4
  },
  submitButton: {
    marginHorizontal: theme.DEVICE_WIDTH * (5 / 100),
    marginVertical: theme.DEVICE_WIDTH * (4 / 100),
    paddingTop: 12,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: theme.PINK,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4
  },
  submitText: {
    color: theme.WHITE,
    fontFamily: theme.BOLD,
  },
  placeholder: {
    color: theme.PRIMARY
  },
  active: {
    backgroundColor: theme.PINK
  },
  disable: {
    backgroundColor: theme.GREY
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200
  },
  modalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.BACKGROUND,
    width: theme.DEVICE_WIDTH,
    height: 155
  },
  modalInput: {
    width: theme.DEVICE_WIDTH * (30 / 100),
    backgroundColor: theme.BACKGROUND,
    color: theme.PRIMARY,
    paddingHorizontal: 20,
    textAlign: 'right',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    height: 50,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4
  },
  modalPicker: {
    width: theme.DEVICE_WIDTH * (60 / 100),
    height: 50,
    backgroundColor: theme.CONTAINER,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    color: theme.PRIMARY,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4
  },
  modalPickerInner: {
    flex: 1,
    color: theme.PRIMARY
  },
  modalSubmit:{
    width: theme.DEVICE_WIDTH,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.PINK,
  },
  modalBtnTxt: {
    color: theme.WHITE,
    fontFamily: theme.BOLD,
  }
})

export const subscribersList = StyleSheet.create({
  headerSimple: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "4%",
    backgroundColor: theme.BACKGROUND
  },
  title: {
    fontFamily: theme.BOLD,
    fontSize: 21,
    color: theme.PRIMARY
  },
  icons: {
    color: theme.PRIMARY
  },
  back: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backText: {
    padding: 10,
    color: theme.PRIMARY
  },
  list: {
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: theme.DEVICE_WIDTH * (5 / 100),
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 20,
    marginVertical: 10,
  },
  name: {
    color: theme.PRIMARY,
    fontSize: 18
  },
  list: {
    backgroundColor: theme.BACKGROUND,
    paddingTop: 20
  },
  empty: {
    marginTop: theme.DEVICE_HEIGHT / 2.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    color: theme.PRIMARY,
    fontSize: 18
  }
})