import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, SafeAreaView, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import JobCard from '../components/JobCard';
import PopularJobCard from '../components/PopularJobCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  // Define featured jobs with background images
  const featuredJobs = [
    { id: 1, title: 'Software Engineer', company: 'Facebook', location: 'Accra, Ghana', salary: '$180,000', backgroundImage: require('../assets/images/Green BG.png') },
    { id: 5, title: 'Project Manager', company: 'Facebook', location: 'Mountain View, US', salary: '$150,000/yr', backgroundImage: require('../assets/images/Mask Group.png') },
    { id: 6, title: 'UX Designer', company: 'Apple', location: 'Cupertino, US', salary: '$130,000/yr', backgroundImage: require('../assets/images/Green BG.png') },
    { id: 7, title: 'Backend Developer', company: 'Amazon', location: 'Seattle, US', salary: '$160,000/yr', backgroundImage: require('../assets/images/Green BG.png') },
    { id: 8, title: 'Marketing Manager', company: 'Microsoft', location: 'Redmond, US', salary: '$140,000/yr', backgroundImage: require('../assets/images/Green BG.png') },
    { id: 9, title: 'Financial Analyst', company: 'Goldman Sachs', location: 'New York, US', salary: '$120,000/yr', backgroundImage: require('../assets/images/Green BG.png') },
    { id: 10, title: 'Product Designer', company: 'Airbnb', location: 'San Francisco, US', salary: '$135,000/yr', backgroundImage: require('../assets/images/Green BG.png') },
  ];

  // Define popular jobs (assuming this should use the 'jobs' array you originally had)
  const jobs = [
    { id: 2, title: 'Jr Executive', company: 'Burger King', location: 'Los Angeles, US', salary: '$96,000/yr' },
    { id: 3, title: 'Product Manager', company: 'Beats', location: 'Florida, US', salary: '$84,000/yr' },
    { id: 5, title: 'Product Manager', company: 'Facebook', location: 'Mountain View, US', salary: '$150,000/yr' },
    { id: 6, title: 'UX Designer', company: 'Apple', location: 'Cupertino, US', salary: '$130,000/yr' },
    { id: 7, title: 'Backend Developer', company: 'Amazon', location: 'Seattle, US', salary: '$160,000/yr' },
    { id: 8, title: 'Marketing Manager', company: 'Microsoft', location: 'Redmond, US', salary: '$140,000/yr' },
    { id: 9, title: 'Financial Analyst', company: 'Google', location: 'New York, US', salary: '$120,000/yr' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <View style={styles.profileContainer}>
            <Image
              source={require('../assets/images/Ellipse.png')} // Replace with your profile image URI
              style={styles.profileImage}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.header}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
        </View>

        <View style={styles.searchFilterContainer}>
          <View style={styles.searchContainer}>
            <Image
              source={require('../assets/images/search.1 1.png')} // Replace with your search icon URI
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search a job or position"
            />
          </View>
          <TouchableOpacity style={styles.filterContainer}>
            <Image
              source={require('../assets/images/Filter.png')} // Replace with your filter icon URI
              style={styles.filterIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.subHeader}>Featured Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={featuredJobs}
          renderItem={({ item }) => (
            <JobCard
              title={item.title}
              company={item.company}
              location={item.location}
              salary={item.salary}
              backgroundImage={item.backgroundImage}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.jobListHorizontal}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.subHeader}>Popular Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.popularJobsContainer}>
          <FlatList
            data={jobs}
            renderItem={({ item }) => (
              <PopularJobCard
                title={item.title}
                company={item.company}
                location={item.location}
                salary={item.salary}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.jobListVertical}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  scrollViewContent: {
    padding: 20,
    paddingTop: 80,
  },
  headerContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    color: '#888',
  },
  searchFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    flex: 1,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
  },
  filterContainer: {
    marginLeft: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: 'grey',
  },
  jobListHorizontal: {
    paddingVertical: 8,
  },
  popularJobsContainer: {
    height: height * 0.4, // Adjust height as necessary
  },
  jobListVertical: {
    paddingVertical: 8,
  },
});

export default HomeScreen;
