import React, { Component } from 'react';
import {
  AspectRatioBox, Box, Icon, Avatar, Text, Skeleton, Grid,
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator,
} from '@chakra-ui/core';
import firebase from 'gatsby-plugin-firebase';
import { Link as GatsbyLink } from 'gatsby';
import { IsDesktop } from '../../utils/mediaQueries';
import SEO from '../seo';
import PlaceholderImage from '../../images/placeholder.jpg';

const ProfileNav = ({ first, last }) => (
  <Box
    ml={IsDesktop() ? '59px' : '12px'}
    h="60px"
    display="flex"
    flexDirection="row"
    alignItems="center"
  >
    <GatsbyLink to="/app/candidates">
      <Icon height="28px" size="20px" color="blueGray.400" name="back" />
    </GatsbyLink>
    <Breadcrumb
      ml={IsDesktop() ? '40px' : '10px'}
      spacing="4px"
      addSeparator={false}
    >
      <BreadcrumbItem>
        <BreadcrumbLink
          fontSize="14px"
          fontWeight="600"
          color="blueGray.400"
          as={GatsbyLink}
          to="/app/candidates"
        >
          Candidates
        </BreadcrumbLink>
        <BreadcrumbSeparator h="26px">
          <Icon color="blueGray.400" size="18px" name="chevron-right" />
        </BreadcrumbSeparator>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink
          fontSize="14px"
          fontWeight="600"
          color="blueGray.400"
        >
          {first}
          {' '}
          {last}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </Box>
);

const ProfileHeader = ({ candidate }) => {
  const isDesktop = IsDesktop();
  let socialCounts = 0;

  if (candidate.instagram) {
    socialCounts++;
  }

  if (candidate.email) {
    socialCounts++;
  }

  if (candidate.snapchat) {
    socialCounts++;
  }

  if (candidate.facebook) {
    socialCounts++;
  }

  return (
    <Box
      mx={isDesktop ? '120px' : '40px'}
      display="flex"
      flexDirection={isDesktop ? 'row' : 'column'}
      maxWidth={isDesktop ? '775px' : '100%'}
      alignItems={isDesktop ? '' : 'center'}
    >
      <Avatar src={candidate.photoURL} h="120px" w="120px" />
      <Box
        mt={isDesktop ? '' : '18px'}
        ml={isDesktop ? '24px' : 0}
        display={isDesktop ? '' : 'flex'}
        flexDirection="column"
        alignItems="center"
      >
        <Text lineHeight="30px" fontSize="24px" fontWeight="bold" color="blueGray.900">
          {candidate.first}
          {' '}
          {candidate.last}
        </Text>
        <Box
          display="flex"
          flexDirection="row"
          mt="4px"
        >
          <Text color="blueGray.400" fontSize="14px" fontWeight="600" mr="12px">
            {candidate.displayPosition.replaceAll('-', ' ')}
          </Text>
          <Text lineHeight="18px" fontSize="20px" color="blueGray.900" mr="12px">
            •
          </Text>
          <Text color="blueGray.400" fontSize="14px" fontWeight="600">
            Grade
            {' '}
            {candidate.grade}
          </Text>
        </Box>
        <Text mt="8px" fontSize="14px" fontWeight="600" color="blueGray.400" lineHeight="1.3em">
          {candidate.bio}
        </Text>
        <Grid mt="20px" templateColumns={`repeat(${socialCounts},minmax(32px,32px))`} columnGap="20px" gridTemplateRows="1">
          {candidate.instagram
            ? (
              <Box as="a" target="_blank" href={`https://instagram.com/${candidate.instagram}`} display="flex" alignItems="center" justifyContent="center" w="32px" h="32px" borderRadius="8px" backgroundColor="blue.50">
                <Icon color="blue.500" w="20px" h="20px" name="instagram" />
              </Box>
            )
            : <></>}
          {candidate.facebook
            ? (
              <Box as="a" target="_blank" href={`https://facebook.com/${candidate.facebook}`} display="flex" alignItems="center" justifyContent="center" w="32px" h="32px" borderRadius="8px" backgroundColor="blue.50">
                <Icon color="blue.500" w="8.42px" h="16px" name="facebook" />
              </Box>
            )
            : <></>}
          {candidate.snapchat
            ? (
              <Box as="a" target="_blank" href={`https://snapchat.com/add/${candidate.snapchat}`} display="flex" alignItems="center" justifyContent="center" w="32px" h="32px" borderRadius="8px" backgroundColor="yellow.100">
                <Icon color="yellow.500" w="20px" h="19px" name="snapchat" />
              </Box>
            )
            : <></>}
          {candidate.email
            ? (
              <Box as="a" target="_blank" href={`mailto:${candidate.email}`} display="flex" alignItems="center" justifyContent="center" w="32px" h="32px" borderRadius="8px" backgroundColor="red.100">
                <Icon color="red.500" w="20px" h="16px" name="email" />
              </Box>
            )
            : <></>}
        </Grid>
      </Box>
    </Box>
  );
};

const CandidateDescription = ({ candidate }) => {
  const isDesktop = IsDesktop();

  return (
    <Box
      py={isDesktop ? '60px' : '40px'}
      mx={isDesktop ? '120px' : '40px'}
    >
      {candidate.videoURL
        ? (
          <AspectRatioBox
            borderRadius="24px"
            overflow="hidden"
            maxW="100%"
            ratio={isDesktop ? 16 / 8 : 16 / 12}
          >
            <Box
              as="iframe"
              title={`${candidate.first} ${candidate.last}'s Campaign Video`}
              src={`${candidate.videoURL?.replace('watch?v=', 'embed/')}?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&`}
              allowFullScreen
              frameborde="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              type="text/html"
            />
          </AspectRatioBox>
        )
        : <></>}
    </Box>
  );
};

export default class Profile extends Component {
  defaultCanadidate = {
    first: 'John',
    last: 'Doe',
    snapchat: 'Snapchat',
    instagram: 'Instagram',
    email: 'test@test.com',
    grade: 11,
    photoURL: null,
    facebook: 'facebook',
    displayPosition: 'President',
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    videoURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  }

  constructor(props) {
    super(props);
    this.state = {
      candidateID: this.props.candidateID,
      candidate: null,
      dataLoaded: false,
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.getCandidate();
  }

  getCandidate = () => {
    console.log(this.props.candidateID);
    firebase.firestore().collection('candidates').doc(this.props.candidateID).get()
      .then((candidate) => {
        this.setState({
          candidate: candidate.data(),
          dataLoaded: true,
        }, () => {
          console.log(this.state);
        });
      });
  }

  render() {
    return (
      <Box>
        {
          !this.state.dataLoaded
            ? (
              <>
                <SEO title="Loading..." />
                <Skeleton>
                  <Box backgroundColor="blueGray.50" minHeight="100vh">
                    <SEO />
                    <Box backgroundColor="white" pb="36px">
                      <ProfileNav
                        first={this.defaultCanadidate.first}
                        last={this.defaultCanadidate.last}
                      />
                      <ProfileHeader candidate={this.defaultCanadidate} />
                    </Box>
                    <CandidateDescription candidate={this.defaultCanadidate} />
                  </Box>
                </Skeleton>
              </>
            )
            : (
              <Box backgroundColor="blueGray.50" minHeight="100vh">
                <SEO
                  description={`${this.state.candidate.first} ${this.state.candidate.last}'s Profile Page`}
                  image={this.state.candidate.photoURL || PlaceholderImage}
                  title={`${this.state.candidate.first} ${this.state.candidate.last}`}
                />
                <Box backgroundColor="white" pb="36px">
                  <ProfileNav first={this.state.candidate.first} last={this.state.candidate.last} />
                  <ProfileHeader candidate={this.state.candidate} />
                </Box>
                <CandidateDescription candidate={this.state.candidate} />
              </Box>
            )
        }
      </Box>
    );
  }
}
