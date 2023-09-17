import {
    Box,
    Flex,
    Icon,
    chakra,
    Stack,
    Link,
    List,
    ListItem,
    ListIcon,
    UnorderedList,
  } from '@chakra-ui/react'

  const Features = () => {
    const Feature = (props) => {
      return (
        <Flex>
          <Flex shrink={0}>
            <Flex
              alignItems="center"
              justifyContent="center"
              h={12}
              w={12}
              rounded="md"
              _light={{
                bg: "brand.500",
              }}
              color="blue.200"
            >
              <Icon
                boxSize={6}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {props.icon}
              </Icon>
            </Flex>
          </Flex>
          <Box ml={4}>
            {/* Feature titles */}
            <chakra.dt
              fontSize="lg"
              fontWeight="medium"
              lineHeight="6"
              _light={{
                color: "gray.900",
              }}
            >
              {props.title}
            </chakra.dt>
            {/* Feature */}
            <chakra.dd
              mt={2}
              color="gray.500"
              _dark={{
                color: "gray.400",
              }}
            >
              {props.children}
            </chakra.dd>
          </Box>
        </Flex>
      );
    };
  
    return (
      <Flex
        bg="blue.400"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={20}
        w="auto"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          py={12}
          bg="blue.50"
          _dark={{
            bg: "gray.800",
          }}
          rounded="xl"
        >
          <Box
            maxW="7xl"
            mx="auto"
            px={{
              base: 4,
              lg: 8,
            }}
          >
            <Box
              textAlign={{
                lg: "center",
              }}
            >
              <chakra.h2
                _light={{
                  color: "brand.600",
                }}
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                The Alice in Wonderland Project
              </chakra.h2>
              <chakra.p
                mt={2}
                fontSize={{
                  base: "3xl",
                  sm: "4xl",
                }}
                lineHeight="8"
                fontWeight="extrabold"
                letterSpacing="tight"
                _light={{
                  color: "gray.900",
                }}
              >
                A better way to learn GitHub
              </chakra.p>
              <chakra.p
                mt={4}
                maxW="2xl"
                fontSize="xl"
                mx={{
                  lg: "auto",
                }}
                color="gray.500"
                _dark={{
                  color: "gray.400",
                }}
              >
                The Alice in Wonderland Project seeks to do the seemingly impossible - give new developers real world experience being part of a remote software development team before they have a software development job.
              </chakra.p>
            </Box>
  
            <Box mt={10}>
              <Stack
                spacing={{
                  base: 10,
                  md: 0,
                }}
                display={{
                  md: "grid",
                }}
                gridTemplateColumns={{
                  md: "repeat(2,1fr)",
                }}
                gridColumnGap={{
                  md: 8,
                }}
                gridRowGap={{
                  md: 10,
                }}
              >
                <Feature
                  title="The app we make: Text-based, html/css/ vanilla javascript game"
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  }
                >
                  As the focus is on learning GitHub and how to work as part of a software dev team, the app is a simple and fun html/css/vanilla javascript text-based game with a Tim Burton’s Alice in Wonderland theme. <br></br>Alice has rescued the Bandersnatch from the Red Queen's dungeon and is racing across Wonderland to the White Queen's Castle. She is being chased by the Red Card Soliders. Each turn players can choose to drink from their tea canteen, go forward at moderate speed, rest, go forward at full speed, or check their status.
                </Feature>
                <Feature
                  title="Community, diversity and accessibility (A11y) is key! "
                  icon={
                    <svg
                    viewBox="0 0 24 24"
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2">
                        </path>
                        <circle cx="9" cy="7" r="4">
                        </circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87">
                        </path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75">
                        </path>
                    </svg>
                  }
                >
                  We strongly encourage participation from groups that are under represented in tech. Participants will gain a good understanding of coding with an accessibility first mindset - and as part of the developer experience (DevEx). The game will be developed using semantic html and accessible forms. If you need accommodations, please let us know in the application form (ideally), or during Hacktobrfest. 
                  <br></br>
                </Feature>
                <Feature
                  title="New developers: Contributors"
                  icon={
                    <svg 
                    viewBox="0 0 24 24" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg> 
                  }
                >
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> */}
                    <UnorderedList>
                        <ListItem>Are new developers in training (self-teaching, bootcamp, university students).</ListItem>
                        <ListItem>Minimum skills are basic html (yes, that simple!)</ListItem>
                        <ListItem>The number of new devs will be limited to keep the focus on a quality experience.</ListItem>
                        <ListItem>A low contributor to team lead ratio will be kept to help everyone deal with the craziness that is Hacktoberfest.</ListItem>
                        <ListItem>Will have the opportunity to do between 4 and 10 PRs (Pull Requests) during Hacktoberfest 2023.</ListItem>
                        <ListItem>May have the opportunity to do a code review and approve a PR after they've done 8-10PRs</ListItem>
                    </UnorderedList>
                </Feature>
  
                <Feature
                  title="Experienced developers: Team leads/maintainers"
                  icon={
                    <svg 
                    viewBox="0 0 24 24" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg> 
                  }
                >
                    <UnorderedList>
                        <ListItem>
                        Developers who are currently working as software developers.
    
                        </ListItem>
                        <ListItem>
                            Team leads should have real world on the job experience working as part of a dev/engineering team with regular pushes/commits to GitHub.
                        </ListItem>
                        <ListItem>
                            Work in pairs to help balance out their work/life/Hacktoberfest balance.
                        </ListItem>
                        <ListItem> 
                            Guide a team of up to 6 new developers from onboarding and getting their local environment set up, to doing their first PRs, though to writing and contributing code. 
                        </ListItem>
                        <ListItem>
                            Some may also help new devs, who've done 8-10 PRs do their first code review and co-approve a PR.
                        </ListItem>

                    </UnorderedList>
                  
                </Feature>

                <Feature
                  title="Code of conduct: Don't be the Red Queen!"
                  icon={
                    <svg 
                        viewBox="0 0 24 24"
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                        </path>
                    </svg>
                  }
                >
                    Note that the <Link src='https://torontojs.com/p/code_of_conduct'>Toronto Javascript Code of Conduct</Link> is being used for the project.
                    
                    <br></br>
                    (This is not a TorontoJS event/project. They have a good code of conduct and we're not reinventing the wheel.)<br></br>

                    <br></br>
                    The Code of Conduct TL;DR (overview):
                    <UnorderedList>
                        <ListItem>Check your ego at the entrance to our rabbit hole. </ListItem>
                        <ListItem>Be nice. Support others. Be professional.</ListItem>
                        <ListItem>Ask others what they preferred to be called (e.g. name, pronouns) and use them.</ListItem>
                        <ListItem>Ableist, racist, hate speech, and nastiness isn't acceptable. (Don't be the Red Queen!)</ListItem>
                        <ListItem>Don't make the founder use her ex-teacher voice.</ListItem>
                        <ListItem>Let's have some fun together!</ListItem>
                    </UnorderedList>

                </Feature>

                <Feature
                  title="100% Volunteer run project!"
                  icon={
                    <svg 
                        viewBox="0 0 24 24"
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                        </path>
                    </svg>
                  }
                >
                    <UnorderedList>
                        <ListItem>This is completely volunteer run project!</ListItem>
                        <ListItem>We all have day jobs/are job hunting, lives, families, pets, ... etc. </ListItem>
                        <ListItem>It's also the first full year for running the project. We're not perfect. There will be bumps, bugs, and snags - but that's software dev! (It started with a lot of enthusiam and little planning at the end of Hacktoberfest 2022.)</ListItem>
                        <ListItem>Please be respectful of the maintainers'/Team Leads' /Founder's time. </ListItem>
                        <ListItem>We're doing this because we want to help new developers get started with open source and Hacktoberfest, and learn how to use GitHub as part of a software development team.</ListItem>
                        <ListItem>Pull Requests, code reviews, and messages will be replied to.
            It just may take 2-3 days depending on what's happening. </ListItem>

                        </UnorderedList>

                  
            
            
                  <br></br>
            
            
                </Feature>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Flex>
    );
  };
  
    export default Features;