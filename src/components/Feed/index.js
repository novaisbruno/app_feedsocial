import React from 'react';
import { Box, Image, Heading, Text, Icon } from 'native-base';
import Feather from 'react-native-vector-icons/Feather'

export default function Feed({data}){
  return (
    <Box 
        flex={1} 
        flexDirection="column"
        marginBottom={4}
        backgroundColor="#fff"
        padding={2}
        borderRadius={4}
    >
    
        <Box>
            <Image 
                source={{uri: data.avatarUrl}}
                alt="Post feed"
                w="100%"
                h={120}
            />
        </Box>

        <Box marginY={3}>
            <Heading size="sm" paddingBottom={1} >Meu portifólio em React Native</Heading>
            <Text numberOfLines={2} >Ad proident cillum fugiat adipisicing incididunt cillum quis. Aliqua et cupidatat laboris quis irure aliquip enim cupidatat nostrud eiusmod aliqua sint.</Text>
        </Box>

        <Box
            marginY={1}
            flexDirection="row"
            backgroundColor="rgba(226, 232, 240, 0.4)"
            alignSelf="flex-start"
            borderRadius={6}
            paddingX={3}
            paddingY={1}
        >
            <Icon
                as={Feather}
                name="user"
                size={5}
                color="#000"
                marginRight={2}
            />
            <Text>{data.fullName}</Text>
        </Box>

    </Box>
  );
}