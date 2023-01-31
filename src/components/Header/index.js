import React from 'react';
import { Box, HStack, Pressable, Icon, Avatar } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

export default function Header(){
  return (
    <HStack padding={4} w="100%" alignItems="center" justifyContent="space-between" safeArea >
            <Box>
                <Pressable>
                    <Icon
                        as={Feather}
                        name="menu"
                        size={7}
                        color="#000"
                    />
                </Pressable>
            </Box>

            <Box flexDir="row" alignItems="center" rounded="md">
                <Pressable>
                    <Icon
                        as={Feather}
                        name="bell"
                        size={7}
                        color="#000"
                        marginRight={4}
                    />
                </Pressable>

                <Pressable>
                    <Avatar
                        source={require('../../assets/img/steve.png')}
                        height={12}
                        width={12}
                    />
                </Pressable>
            </Box>
        </HStack>
  );
}