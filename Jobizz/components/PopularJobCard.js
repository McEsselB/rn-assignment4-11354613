import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PopularJobCard = ({ title, company, location, salary }) => {
  const getCompanyLogo = (companyName) => {
    switch (companyName) {
      case 'Facebook':
        return require('../assets/images/Vector.png');
      case 'Burger King':
        return require('../assets/images/burger-king-4 1.png');
      case 'Beats':
          return require('../assets/images/image 8.png');
        case 'Google':
      return require('../assets/images/google.png');
     case 'Apple':
      return require('../assets/images/icons8-apple-50.png');
    case 'Amazon':
      return require('../assets/images/icons8-amazon-48.png');
    case 'Microsoft':
      return require('../assets/images/icons8-microsoft-48.png');
      default:
        return require('../assets/images/Vector.png');
    }
  };

  return (
    <View style={styles.card}>
      <Image
        source={getCompanyLogo(company)}
        style={styles.companyLogo}
      />
      <View style={styles.textContainer}>
        <View style={styles.topRow}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.salary}>{salary}</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.company}>{company}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  companyLogo: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
  salary: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  company: {
    fontSize: 13,
    color: '#555',
    fontFamily: 'Poppins-Regular',
  },
  location: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Poppins-Regular',
  },
});

export default PopularJobCard;
