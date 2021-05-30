// import React, { useEffect, useState } from 'react'
// import {
//     View, Alert,
//     Image,
//     Text,
//     TouchableOpacity,

//     ViewPropTypes,
//     Platform
// } from 'react-native'
// import FingerprintScanner from 'react-native-fingerprint-scanner';


// const FP = (props) => {

//     const [errorMessageLegacy, setErrorMessageLegacy] = useState(undefined)
//     const [biometricLegacy, setBiometricLegacy] = useState(undefined)
//     const description = null;



//     useEffect(() => {
//         // if (requiresLegacyAuthentication()) {
//         //     authLegacy();
//         // } else {
//         //     authCurrent();
//         // }
//         FingerprintScanner.isSensorAvailable()
//         .then(biometryType => console.log("saassa",biometryType))
//         .catch(error => console.log( "Err",error));
    
//         return () => {
//             FingerprintScanner.release();

//         }
//     }, [])


//     const requiresLegacyAuthentication = () => {
//         return Platform.Version < 23;
//     }

//     const authCurrent = () => {
//         try {
//             FingerprintScanner
//             .authenticate({ title: 'Log in with Biometrics' })
//             .then(() => {
//                 onAuthenticate();
//             });

            
//         } catch (error) {
//             console.log("£$$$", error)

//         }
//   }
// const handleAuthenticationAttemptedLegacy = (error) => {
//     setErrorMessageLegacy({ errorMessageLegacy: error.message });
//     description.shake();
// };

// const authLegacy = () => {
//     try {
//         console.log("TRY")
//         FingerprintScanner.authenticate({ onAttempt: handleAuthenticationAttemptedLegacy })
//             .then(() => {
//                 handlePopupDismissedLegacy();
//                 Alert.alert('Fingerprint Authentication', 'Authenticated successfully');
//             })
//             .catch((error) => {
//                 console.log("EERROR")
//                 setErrorMessageLegacy({ errorMessageLegacy: error.message });
//                 setBiometricLegacy({ biometricLegacy: error.biometric })
//                 description.shake();
//             });

//     } catch (error) {

//         console.log("ERROR", err)
//     }

// }

// //   const { errorMessageLegacy, biometricLegacy } = state;
// //   const { style, handlePopupDismissedLegacy } = props;


// return (
//     <View>
//         <Text>FFFFFFFFFF</Text>
//     </View>
// )
// }

// export default FP
