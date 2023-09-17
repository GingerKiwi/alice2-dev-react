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
              color="white"
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
        bg="blue.100"
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
          bg="white"
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
                The Alice in Wonderland Project seeks to do the seemingly impossible - give new devs real world experience being part of a remote software development team before they have a software development job.
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  }
                >
                  We strongly encourage participation from groups that are under represented in tech. Participants will gain a good understanding of coding with an accessibility first mindset - and as part of the developer experience (DevEx). The game will be developed using semantic html and accessible forms. If you need accommodations, please let us know in the application form (ideally), or during Hacktobrfest. 
                  <br></br>
                </Feature>
                <Feature
                  title="New developers: contributors"
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  }
                >
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
                  title="Team leads: maintainers"
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
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