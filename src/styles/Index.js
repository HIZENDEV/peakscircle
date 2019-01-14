import { StyleSheet } from "react-native";
import theme from "@config/theme";

export const header = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "4%",
    paddingTop: 0,
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
    borderRadius: 5,
    backgroundColor: theme.LIGHT_BLUE,
    color: theme.WHITE,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4
  },
  searchIcon: {
    padding: 8,
    color: theme.WHITE
  },
  input: {
    flex: 1,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 0,
    backgroundColor: theme.LIGHT_BLUE,
    color: theme.PRIMARY
  },
  headerLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: "4%",
    paddingTop: 10,
    backgroundColor: theme.BACKGROUND
  },
  rightText: {
    marginLeft: 5
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20
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
    color: theme.LIGHT_BLUE,
    paddingBottom: 7.5
  }
});

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
    color: theme.LIGHT_BLUE
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
});

export const title = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 22,
    backgroundColor: theme.BACKGROUND
  },
  title: {
    fontFamily: theme.BOLD,
    fontSize: 21,
    color: theme.PRIMARY
  },
  action: {},
  icons: {
    color: theme.PRIMARY
  }
});

export const loading = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: theme.DEVICE_WIDTH,
    height: theme.DEVICE_HEIGHT,
    backgroundColor: "#343363"
  },
  lottie: {
    width: theme.DEVICE_WIDTH / 3,
    height: theme.DEVICE_WIDTH / 3
  }
});

export const sign = StyleSheet.create({
  container: {
    backgroundColor: theme.BACKGROUND,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
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
  }
});

export const compactList = StyleSheet.create({
         container: {
           justifyContent: "flex-end",
           margin: "5%",
           width: theme.DEVICE_WIDTH * (90 / 100),
           height: theme.DEVICE_HEIGHT / 7,
           borderRadius: 7,
           backgroundColor: theme.BACKGROUND,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4
         },
         image: {
           position: 'absolute',
           width: theme.DEVICE_WIDTH * (90 / 100),
           height: theme.DEVICE_HEIGHT / 7,
           borderRadius: 7,
           resizeMode: "cover",
           backgroundColor: "blue"
         },
         title: {
           padding: 10,
           position: "absolute",
           textAlign: "left",
           fontSize: 18,
           fontFamily: theme.BOLD,
           color: theme.WHITE
         }
       });
