import React from 'react';
import Card from '../../layout/containers/Card';
import Grid from '../../layout/containers/Grid';
import Text from '../Text';

import FlexContainer from '../../layout/containers/FlexContainer';
import Row from '../../layout/containers/Row';
import Button from '../Button';
import Divider from '../Divider';
import Spacer from '../Spacer';
import { ArrowDownToLine } from 'lucide-react';
import { CircleX } from 'lucide-react';

export default function ProfileSidebar({ onClose }) {
  return (
   <FlexContainer backgroundColor="var(--color-background)">
    {/* head section  */}
    <Card  positionType='relative' backgroundColor="var(--color-background)" padding="24px" height="100%" >
      <Card onClick={() => {}} rounded  height='24px' width='24px'  positionType='absolute' margin='10px 0px 0px 10px' position='top-left' backgroundColor="var(--color-transparent)"><ArrowDownToLine color="var(--color-info)" /></Card>
      <Card onClick={() => {}} rounded height='24px' width='24px'  positionType='absolute' margin='10px 10px 0px 0px' position='top-right' backgroundColor="var(--color-transparent)"><CircleX color="#d71919" /></Card>
      <Card rounded height='100px' width='100px'   margin='0px 0px 0px 0px'  backgroundColor="var(--color-primary1)"></Card>
      
      <Text color='primary-text' variant='heading2'>Nadia Kamenie </Text>
      <Text color='tertiary-text' align='center' variant='caption1'>Born on January 15, 1950 – Died on March 22, 2020 </Text>
      <Text color='tertiary-text' align='center' variant='caption1'>  ✍️Admin ⚰️ Deceased</Text>

      <Spacer size='md' />

      <Button variant='primary' fullWidth = {true}  >Use as Root</Button>
    </Card>
    
    

    <Card alignItems='start' margin='0px 0px 0px 0px' padding='0px' backgroundColor="var(--color-background)" >

    <Text align='left'  variant='Body-bold' >Identity Overview</Text>

    <Spacer size='md' />

    <Divider color="var(--color-gray)" thickness='2px' borderRadius='3px' ></Divider>


      <Row padding='0px'>
        <Card alignItems='start' padding='0px' margin='0px 0px' backgroundColor='var(--color-transparent)'>
          <Text align='top' variant='caption1' color='tertiary-text'>Gender</Text>
          <Text variant='caption1' color='secondary'>Female</Text>
        </Card>

        <Card alignItems='start' padding='0px' margin='0px 0px' backgroundColor='var(--color-transparent)'>
          <Text align='flex-left' variant='caption1' color='tertiary-text'>Family Role</Text>
          <Text variant='caption1' color='secondary'>Mother of Emylie</Text>
        </Card>
        
      </Row>

      <Divider color="var(--color-gray)" thickness='2px' borderRadius='3px' style={{margin: '15px 0'}} ></Divider>

      <Row padding='0px'>
        <Card alignItems='start' padding='0px' margin='0px 0px' backgroundColor='var(--color-transparent)'>
          <Text align='top' variant='caption1' color='tertiary-text'>Tribe</Text>
          <Text variant='caption1' color='secondary'>Bafang</Text>
        </Card>

        <Card alignItems='start' padding='0px' margin='0px 0px' backgroundColor='var(--color-transparent)'>
          <Text align='flex-left' variant='caption1' color='tertiary-text'>Language</Text>
          <Text variant='caption1' color='secondary'>Bafang</Text>
        </Card>
        
      </Row>

      <Divider color="var(--color-gray)" thickness='2px' borderRadius='3px' style={{margin: '15px 0'}} ></Divider>

      <Card alignItems='start' padding='0px' margin='0px 0px' backgroundColor='var(--color-transparent)'>
        <Text align='flex-left' variant='caption1' color='tertiary-text'>Status</Text>
        <Text variant='caption1' color='secondary'>Alive</Text>
      </Card>

    </Card>

    <Spacer size='md' />

    <Card alignItems='start' margin='0px 0px 0px 0px' padding='0px' backgroundColor="var(--color-background)" >

      <Text  variant='Body-bold' >Contact & Meta Info</Text>

      <Divider color="var(--color-gray)" thickness='2px' borderRadius='3px' ></Divider>

        <Row padding='0px'>
          <Card alignItems='start' padding='0px' margin='0px 0px' backgroundColor='var(--color-transparent)'>
            <Text align='top' variant='caption1' color='tertiary-text'>Phone number</Text>
            <Text variant='caption1' color='secondary'>+237 694 89 98 78</Text>
          </Card>

          <Card alignItems='start' padding='0px' margin='0px 0px' backgroundColor='var(--color-transparent)'>
            <Text align='flex-left' variant='caption1' color='tertiary-text'>Last Location</Text>
            <Text variant='caption1' color='secondary'>Bamenda, Cameroon</Text>
          </Card>
          
        </Row>

      <Divider color="var(--color-gray)" thickness='2px' borderRadius='3px' ></Divider>

        <Row padding='0px'>
          <Card alignItems='start' padding='0px' margin='0px 0px' backgroundColor='var(--color-transparent)'>
            <Text align='top' variant='caption1' color='tertiary-text'>Linked Account</Text>
            <Text variant='caption1' color='secondary'>Mamy Zho</Text>
          </Card>

          <Card alignItems='start' padding='0px' margin='0px 0px' backgroundColor='var(--color-transparent)'>
            <Text align='flex-left' variant='caption1' color='tertiary-text'>Privacy status</Text>
            <Text variant='caption1' color='secondary'>Public</Text>
          </Card>
          
        </Row>

    </Card>

      <Spacer size='md' />

   </FlexContainer>
  );
}
