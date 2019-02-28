import React from 'react';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import { StackNavigator } from 'react-navigation';

import { Video } from './app/views/Video.js';
import { VideoDetail } from './app/views/VideoDetail.js';
import { Register } from './app/views/Register.js';
import { Login } from './app/views/Login.js';

import { Quiz } from './app/views/Quiz.js';
import { Finish } from './app/views/QuizFinish.js';

import { Blog } from './app/views/Blog.js';
import { BlogDetail } from './app/views/BlogDetail.js';

import { About } from './app/views/About.js';


const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  },
  RegisterRT: {
    screen: Register
  },
  LoginRT: {
    screen: Login
  },
  QuizRT: {
    screen: Quiz
  },
  FinishRT: {	
    screen: Finish
  },
  BlogRT: {	
    screen: Blog
  },
  BlogDetailRT: {	
    screen: BlogDetail
  },
  AboutRT: {	
    screen: About
 }
},

  {
    initialRouteName: 'HomeRT'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <MyRoutes /> 
    );
  }
}
