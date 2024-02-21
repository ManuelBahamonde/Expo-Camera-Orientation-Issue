import { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [shouldRenderCamera, setShouldRenderCamera] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission]);

  const toggleCamera = () => setShouldRenderCamera((prevState) => !prevState);

  return (
    <View style={styles.container}>
      {shouldRenderCamera && <Camera style={styles.camera} type={CameraType.back} />}
      <Button title="Toggle Camera" onPress={toggleCamera} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  camera: {
    height: '50%',
  },
});
