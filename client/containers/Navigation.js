import React from 'react';
import { TabNavigator } from 'react-navigation';
import ExploreTab from './ExploreTab';
import InboxTab from './InboxTab';
import ProfileTab from './ProfileTab';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

export default TabNavigator(
  {
    ExploreScreen: { 
        screen: ExploreTab,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons 
            name="gender-female"
            size={25}
            color={tintColor}
            />
          ),
        } 
    },
    InboxScreen: { 
        screen: InboxTab,
        navigationOptions: {
          header:null,
          tabBarIcon: ({ tintColor }) => (
              <MaterialCommunityIcons 
              name="message-text"
              size={25}
              color={tintColor}
              />
          ),
        }
    },
    ProfileScreen: {
         screen: ProfileTab,
         navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome 
                name="user"
                size={25}
                color={tintColor}
                />
            ),
        }, 
    },
  },
  {
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        inactiveTintColor: '#3c0035',
        activeTintColor: '#c293bc',
    }
  }
);
