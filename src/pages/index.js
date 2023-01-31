import React from 'react';
import { Box, FlatList } from 'native-base';
import Header from '../components/Header';
import data from '../data';
import Storys from '../components/Storys';
import Feed from '../components/Feed';

export default function Home(){
  return (
    <Box 
        flex={1} 
        backgroundColor="#f8f8f8"
        flexDirection="column"
    >
        <Header/>

        <Box padding={4}>
            <FlatList
                horizontal={true}
                data={data}
                renderItem={({item})=><Storys data={item} />}
                showsHorizontalScrollIndicator={false}
            />
        </Box>

        <Box padding={4}>
          <FlatList
            data={data}
            renderItem={({item})=><Feed data={item} />}
            showsVerticalScrollIndicator={false}
          />
        </Box>
    </Box>
  );
}