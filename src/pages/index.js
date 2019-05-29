import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageTech from "../components/image-tech"

import "../components/layout.css"

import {
  Header,
  Image,
  Container,
  Segment,
  Grid,
  Button,
  Divider,
  Icon,
  Responsive

} from 'semantic-ui-react'

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    {/* Responsive to Mobile */}
    <Responsive as={Segment}
      minWidth={320}
      maxWidth={529}
      style={{
        margin:"0em",
        padding:"0em"
      }}
    >
      <Container
        textAlign='center'
        fluid
      >
        <ImageTech/>
        <Header
          as='h1'
          content='Imagina todo lo que podemos hacer por ti'
          inverted
          style={{
            top:'20%',
            marginBottom: '2em',
            fontSize: "1em",
            left: "50%",
            position:"absolute",
            transform: "translate(-50%, -50%)",
            padding: "1em"
          }}
        />
        <Button primary size='small' style={{
          top:'80%',
          left: "50%",
          fontWeight: 'normal',
          position:"absolute",
          transform: "translate(-50%, -50%)"
        }}
        >
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    </Responsive>
    {/* Responsive to Tablet */}
    <Responsive as={Segment}
      minWidth={530}
      maxWidth={859}
      style={{
        margin:"0em",
        padding:"0em"
      }}
    >
      <Container
        textAlign='center'
        fluid
      >
        <ImageTech/>
        <Header
          as='h1'
          content='Imagina todo lo que podemos hacer por ti'
          inverted
          style={{
            top:'20%',
            marginBottom: '2em',
            fontSize: "2em",
            left: "50%",
            position:"absolute",
            transform: "translate(-50%, -50%)",
            padding: "1em"
          }}
        />
        <Button primary size='small' style={{
          top:'80%',
          left: "50%",
          fontWeight: 'normal',
          position:"absolute",
          transform: "translate(-50%, -50%)"
        }}
        >
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    </Responsive>
    {/*Responsive on Normal Desktop*/}
    <Responsive as={Segment}
      minWidth={860}
      maxWidth={1250}
      style={{
        margin:"0em",
        padding:"0em"
      }}
    >
      <Container
        textAlign='center'
        fluid
      >
        <ImageTech/>
        <Header
          as='h1'
          content='Imagina todo lo que podemos hacer por ti'
          inverted
          style={{
            top:'20%',
            marginBottom: '2em',
            left: "50%",
            position:"absolute",
            fontSize: "3em",
            transform: "translate(-50%, -50%)",
            padding: "1em"
          }}
        />
        <Button primary size='big' style={{
          top:'75%',
          left: "50%",
          fontWeight: 'normal',
          fontSize: "2em",
          position:"absolute",
          transform: "translate(-50%, -50%)"
        }}
        >
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    </Responsive>
    {/* Responsive to Big Scream */}
    <Responsive as={Segment}
      minWidth={1251}
      maxWidth={2000}
      style={{
        margin:"0em",
        padding:"0em"
      }}
    >
      <Container
        textAlign='center'
        fluid
      >
        <ImageTech/>
        <Header
          as='h1'
          content='Imagina todo lo que podemos hacer por ti'
          inverted
          size="huge"
          style={{
            top:'20%',
            marginBottom: '2em',
            fontSize: "5em",
            left: "50%",
            position:"absolute",
            transform: "translate(-50%, -50%)",
            padding: "1em"
          }}
        />
        <Button primary size='huge' style={{
          top:'75%',
          left: "50%",
          fontWeight: 'normal',
          fontSize: "2em",
          position:"absolute",
          transform: "translate(-50%, -50%)"
        }}
        >
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    </Responsive>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible.
              Let us delight your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='https://picsum.photos/100' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container >
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the
          art of doing nothing by providing massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>
  </Layout>
)

export default IndexPage
