import React from 'react';
import {Box, Image} from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
export default function Storys({data}){
  return (
    <Box flex={1} padding={2} borderRadius={4}>
        <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.linearGradient}
        >
            <Image 
                source={{uri: data.avatarUrl}}
                width={16}
                height={16}
                borderRadius={32}
                alt="Avatar"
            />
        </LinearGradient>
    </Box>
  );
}

const styles = StyleSheet.create({
    linearGradient:{
        padding: 1.5,
        borderRadius: 32
    }
});