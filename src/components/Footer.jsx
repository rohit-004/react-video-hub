import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bg={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size="md" textTransform={'uppercase'} textAlign={["center","left"]}>
            Subscribe to get newsletter
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email Here :"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All Rights Received</Text>
        </VStack>
        <VStack w={'full'}>
            <Heading size={"md"} textTransform={"uppercase"}>
                Social Media
            </Heading>
            <Button  variant={"link"} colorScheme='"whiteAlpha'>
                <a target='blank' href="https://twitter.com/rohitkandari400"><AiFillTwitterCircle size={"40"}></AiFillTwitterCircle></a>
            </Button>
            <Button variant={"link"} colorScheme='"whiteAlpha'>
                <a target='blank' href="https://github.com/rohit-004"><AiFillGithub size={"40"}></AiFillGithub></a>
            </Button>
            <Button variant={"link"} colorScheme='"whiteAlpha'>
                <a target='blank' href="https://www.linkedin.com/in/rohit-kandari-899500188/"><AiFillLinkedin size={"40"}></AiFillLinkedin></a>
            </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
