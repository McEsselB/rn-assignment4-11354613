import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const JobCard = ({ title, company, location, salary }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Icon name="facebook" type="font-awesome" color="#fff" size={40} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.company}>{company}</Text>
      <View style={styles.bottomRow}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 24,
    height: 200,
    width: 350,
    position: 'relative',
    backgroundColor: '#4682b4', // Example background color, replace as needed
    overflow: 'hidden', // Ensure the background color does not overflow the card boundaries
  },
  iconContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 60,
  },
  company: {
    color: '#fff',
    marginBottom: 20,
  },
  bottomRow: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  salary: {
    color: '#fff',
    fontWeight: 'bold',
  },
  location: {
    color: '#fff',
    textAlign: 'right',
  },
});

export default JobCard;
