import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

import { ResultCard, CardHeader, HeaderText, CardContent, ContentText, Description } from '../../components/ResultCard/styles'
import { Input } from '../../components/Input/styles'
import { Container, Header, HeaderTitle, Card, Title, Form, Button, ButtonText } from './styles'

export default function Home() {
  return (
    <LinearGradient colors={['#88D498', '#1A936F']} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} style={{flex:1}}>
      <Header>
        <HeaderTitle>Last result</HeaderTitle>
        <ResultCard>
          <CardHeader>
            <HeaderText>IMC = Weight / (Height x Height)</HeaderText>
          </CardHeader>
          <CardContent>
            <ContentText>24.00</ContentText>
            <Description>(ideal weight)</Description>
          </CardContent>
        </ResultCard>
      </Header>
      <Container>
        <LinearGradient 
          colors={['rgba(240, 240, 247, 0.4)', 'rgba(240, 240, 247, 0.10)']} 
          start={{x: 0.0, y: 0.25}} 
          end={{x: 0.5, y: 1.0}} 
          style={{
            flex:1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <Card>
            <Title>Calculate</Title>
            <Form>
              <Input placeholder='Height (cm)' placeholderTextColor='#f0f0f7' TextColor='#f0f0f7' />
              <Input placeholder='Weight (Kg)' placeholderTextColor='#f0f0f7' />
              <Button>
                <ButtonText>Calculate</ButtonText>
              </Button>
            </Form>
          </Card>
        </LinearGradient>
      </Container>
    </LinearGradient>
  )
}
