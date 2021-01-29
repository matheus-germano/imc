import styled from 'styled-components/native';

export const ResultCard = styled.View`
  width: 330px;
  height: 100px;

  background-color: #f0f0f7;

  border-radius: 10px;

  margin: 15px auto;
  elevation: 10;
`;

export const CardHeader = styled.View`
  padding-top: 25px;
  padding-left: 30px;
`;

export const HeaderText = styled.Text`
  color: #999;
  font-size: 10px;
`;

export const CardContent = styled.View`
  padding-top: 15px;
  padding-left: 30px;
  flex-direction: row;
  align-items: center;
`;

export const ContentText = styled.Text`
  color: #114B5F;
  font-size: 28px;
  font-weight: bold;
  line-height: 28px;
`;

export const Description = styled.Text`
  color: #114B5F;
  font-size: 10px;
  line-height: 28px;
  margin-top: auto;
  margin-left: 5px;
`;
