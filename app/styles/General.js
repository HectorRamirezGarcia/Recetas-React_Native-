import { StyleSheet } from 'react-native'
import Colors from './Colors'

//Estilos para MainScreen
const mainStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.WHITE
    },

    containerCenter: {
        paddingTop: 10,
        alignItems: 'center',
        marginBottom: 25,
    },

    titleText: {
        fontSize: 15,
        alignItems: 'center',
        color: Colors.ICONCOLOR,
        fontFamily: "Poppins-SemiBold"
    },

    btnMain: {
        width: 280,
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: Colors.ICONCOLOR,
        borderRadius: 60
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: Colors.ICONCOLOR,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: Colors.WHITE,
        paddingVertical: 15,
        fontFamily: 'Poppins-Bold',
    },

    txtTransparent: {
        color: Colors.ICONCOLOR,
        fontSize: 14,
        fontFamily: 'Poppins-Light',
    }
    
})

//Estilos para SplashScreen
const imageBackgroundStyle = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
    }
})

//Estilos para LoginScreen
const loginStyles = StyleSheet.create({

    logo: {
        paddingTop: 50,
        alignItems: 'center',
    },
})

//Estilos para RegistroScreen
const registroStyles = StyleSheet.create({

    checkBox: {
        marginLeft: 0,
        marginRight: 0,
        borderWidth: 0,
        backgroundColor: Colors.WHITE,
    },

    containerSocial: {
        paddingTop: 30,
        alignItems: 'center',
        marginBottom: 10,
    },

    buttonSocialIcon: {
        marginBottom: 10,
        width: 250,
        height: 60,
        alignItems: 'center',
        borderRadius: 60,
    },
})

export { mainStyles, imageBackgroundStyle, loginStyles, registroStyles }