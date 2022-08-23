import React from "react";
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity
} from "react-native";

import {COLORS, FONTS, SIZES, icons, images } from "../constants";
import {Camera, CameraType} from "expo-camera";

const Scan = ({navigation}) => {
  const [type, setType] = React.useState(CameraType.back)
  const [camera, setCamera] = React.useState(null)
  

  React.useEffect(() => {
    requestCameraPermission();
  },[])

  //handler
  const requestCameraPermission = React.useCallback(async () => {
    const permission = await Camera.requestCameraPermissionsAsync();

    if (!permission === "granted"){Linking.openSettings();}
  }, [])


  function renderHeader(){
    return (
      <View style={{ flexDirection: 'row', marginTop: SIZES.padding * 4, paddingHorizontal: SIZES.padding * 3}}>
        <TouchableOpacity
          style = {{
            width: 45,
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress = {() => navigation.navigate("Home")}
        >
          <Image 
            source = {icons.close}
            style = {{
              height: 20,
              width: 20,
              tintColor: COLORS.white
            }}
          />
        </TouchableOpacity>
        <View style={{ flex:1, alignItems: "center", justifyContent:"center"}}>
          <Text style={{ color: COLORS.white, ...FONTS.body3}}>Scan for Payment</Text>
        </View>
        <TouchableOpacity 
          style={{ 
            height: 45, 
            width: 45, 
            backgroundColor: COLORS.green, 
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center"}}
          onPress = {() => console.log("Info")}
        >
          <Image 
           source = {icons.info}
           style = {{
             height: 25,
             width: 25,
             tintColor: COLORS.white
           }}
         />
        </TouchableOpacity>
      </View>
    )
  }

   

  function renderScanFocus(){
    return (
      <View
        style = {{
          flex:1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image 
          source = {images.focus}
          resizeMode="stretch"
          style = {{
            marginTop: "-55%",
            width: 200,
            height: 300
          }}
        />
      </View>
    )
  }
  function renderPaymentMethods() {
    return (
      <View
        style = {{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 220,
          padding: SIZES.padding * 3,
          borderTopLeftRadius: SIZES.radius,
          borderTopRightRadius: SIZES.radius,
          backgroundColor: COLORS.white
        }}
      >
       <Text style={{...FONTS.h4}}>Another Payment Method</Text>
        <View 
          style = {{
            flex: 1,
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: SIZES.padding * 2
          }}
        >
          <TouchableOpacity
            style = {{
              flexDirection: "row",
              alignItems: "center"
            }}
            onPress = {() => console.log("Phone Number")}
          >
            <View
              style = {{
                width: 40,
                height: 40,
                backgroundColor: COLORS.lightpurple,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10
              }}
            >
              <Image 
               source = {icons.phone}
               resizeMode = "cover"
               style = {{
                 height: 25,
                 width: 25,
                 tintColor: COLORS.purple
               }}
              />
            </View>
            <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4}}>Phone Number</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style = {{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: SIZES.padding * 2
            }}
            onPress = {() => console.log("BarCode")}
          >
           <View
             style = {{
               width: 40,
               height: 40,
               backgroundColor: COLORS.lightGreen,
               alignItems: "center",
               justifyContent: "center",
               borderRadius: 10
             }}
           >
             <Image 
               source = {icons.barcode}
               resizeMode = "cover"
               style = {{
                 height: 25,
                 width: 25,
                 tintColor: COLORS.primary
               }}
             />
           </View>
           <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4}}>Barcode</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    )
  }

  function onBarCodeRead(result) {
    console.log(result.data)
  }

  return (
    <View style={{ flex:1, backgroundColor: COLORS.transparent }}>
       <Camera 
         style = {{
            flex: 1

         }}
         ref = {ref => setCamera(ref)}
         type = {type}
         enableZoomGesture
         onBarCodeRead = {onBarCodeRead}
       >
        {renderHeader()}
        {renderScanFocus()}
        {renderPaymentMethods()}
      </Camera>
      
    </View>
  )
}


export default Scan;
