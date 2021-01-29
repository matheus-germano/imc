import styled from 'styled-components/native';

export const Header = styled.View`

`;

export const HeaderTitle = styled.Text`
  color: #114B5F;
  font-size: 16px;
  font-weight: bold;

  margin-top: 40px;
  margin-left: 40px;
`;

export const Container = styled.View`
  flex: 1; 
  margin-top: 40px; 

  border: 1px solid rgba(255, 255, 255, 0.7);

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Card = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: #114B5F;
  font-size: 16px;
  font-weight: bold;

  margin: 50px auto;
`;

export const Form = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 330px;
  height: 80px;

  background-color: #1A936F;

  border-radius: 10px;

  margin: 15px auto;
  padding: 20px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #f0f0f7;
`;
