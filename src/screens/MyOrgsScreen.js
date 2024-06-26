import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { OrgUserStorage, Organization, User } from '../models';

const MyOrgsScreen = ({navigation}) => {
  const [orgNames, setOrgNames] = useState([]);

  useEffect(() => {
    subscribeToChanges();
  }, []);

  async function subscribeToChanges() {
    DataStore.observeQuery(OrgUserStorage).subscribe(snapshot => {
      const { items, isSynced } = snapshot;
      console.log(`OrgUserStorage [Snapshot] item count: ${items.length}, isSynced: ${isSynced}`);
      getOrgs();
    });
  }

  async function getOrgs() {
    const user = await Auth.currentAuthenticatedUser();
    let orgs = await DataStore.query(Organization, (c) => c.UserOrStorages.user.userId.eq(user.attributes.sub));
    const orgData = orgs.map((org, index) => ({
      label: org['name'],
      value: index,
    }));
    setOrgNames(orgData);
  }

  const setAndNavigate = async (orgName) => {
    const user = await Auth.currentAuthenticatedUser();
    const org = await DataStore.query(Organization, (c) => c.name.eq(orgName));
    // save into our current async storage
    const key = user.attributes.sub + ' currOrg';
    await AsyncStorage.setItem(key, JSON.stringify(org[0]));
    console.log(key);
    navigation.navigate('MemberTabs');
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setAndNavigate(item.label)} style={styles.orgContainer}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={orgNames}
      renderItem={renderItem}
      keyExtractor={item => item.value}
    />
  );
};

export default MyOrgsScreen;

const styles = StyleSheet.create({
  orgContainer: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#777777',
    borderRadius: 5,
  }
});
