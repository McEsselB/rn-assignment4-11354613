import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image } from 'react-native';
import JobCard from '../components/JobCard';
import { Icon } from 'react-native-elements';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'Facebook', location: 'Accra, Ghana', salary: '$180,000' },
    { id: 2, title: 'Jr Executive', company: 'Burger King', location: 'Los Angeles, US', salary: '$90,000/yr' },
    { id: 3, title: 'Product Manager', company: 'Beats', location: 'Florida, US', salary: '$84,000/yr' },
    { id: 4, title: 'Product Manager', company: 'Facebook', location: 'Florida, US', salary: '$88,000/yr' },
    // Add more job data here
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://example.com/profile.jpg' }} // Replace with actual profile image URL
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.header}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
        </View>
        <Icon name="bell" type="font-awesome" color="#000" size={24} />
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" type="font-awesome" color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
        />
      </View>

      <Text style={styles.subHeader}>Featured Jobs</Text>
      <FlatList
        data={jobs}
        renderItem={({ item }) => (
          <JobCard
            title={item.title}
            company={item.company}
            location={item.location}
            salary={item.salary}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.jobList}
      />

      <Text style={styles.subHeader}>Popular Jobs</Text>
      <FlatList
        data={jobs}
        renderItem={({ item }) => (
          <JobCard
            title={item.title}
            company={item.company}
            location={item.location}
            salary={item.salary}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.jobList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    color: '#888',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginVertical: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  jobList: {
     paddingVertical: 1,
     
  },
});

export default HomeScreen;
