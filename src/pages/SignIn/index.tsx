import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Text style={{ color: '#FFF', fontWeight: 'bold' }}>SIGN IN</Text>
    </Container>
  );
};

export default SignIn;
