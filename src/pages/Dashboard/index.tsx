import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View>
      <Text
        style={{
          color: '#FFF',
          fontWeight: 'bold',
          fontSize: 30,
          marginBottom: 50,
        }}
      >
        Dashboard
      </Text>
      <TouchableOpacity onPress={signOut}>
        <Text
          style={{
            color: '#FF9000',
            fontWeight: 'bold',
            fontSize: 30,
          }}
        >
          Deslogar/Sair/Apagar Storage
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
