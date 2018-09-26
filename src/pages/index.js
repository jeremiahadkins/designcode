import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/card'
import Section from '../components/section';
import Wave from '../components/wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/cell';
import styled from 'styled-components';

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px;
  }
`

const IndexPage = () => (
  <Layout>
    <div>
      <div className='hero'>
        <div className='heroGroup'>
          <h1>Kung Fu Kenny</h1>
          <p>Cillum do exercitation exercitation incididunt quis culpa ea.</p>
          <Link to="/page-2/">Listen to Kendrick</Link>
          <div className="logos">
            <img src={require('../images/logo-figma.png')} alt=""/>
            <img src={require('../images/logo-framer.png')} alt=""/>
            <img src={require('../images/logo-react.png')} alt=""/>
            <img src={require('../images/logo-sketch.png')} alt=""/>
            <img src={require('../images/logo-swift.png')} alt=""/>
            <img src={require('../images/logo-sketch.png')} alt=""/>
          </div>
          <Wave />
        </div>
      </div>
    </div>
    <div className='cards'>
      <h2>Cool Songs to Jam</h2>
      <div className='cardGroup'>
        <Card
          title="K Dot can u pray for me"
          text="Eu veniam tempor."
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="K Dot can u pray for me"
          text="Eu veniam tempor."
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="K Dot can u pray for me"
          text="Eu veniam tempor."
          image={require('../images/wallpaper3.jpg')}
        />
        <Card
          title="K Dot can u pray for me"
          text="Eu veniam tempor."
          image={require('../images/wallpaper3.jpg')}
        />
        <Card
          title="K Dot can u pray for me"
          text="Eu veniam tempor."
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="K Dot can u pray for me"
          text="Eu veniam tempor."
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="K Dot can u pray for me"
          text="Eu veniam tempor."
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="K Dot can u pray for me"
          text="Eu veniam tempor."
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="K Dot can u pray for me"
          text="Eu veniam tempor."
          image={require('../images/wallpaper3.jpg')}
        />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper4.jpg')}
      logo={require('../images/logo-react.png')}
      title="Frontin' on man man."
      text="Ex voluptate minim nostrud adipisicing amet ex proident irure id labore ad ea veniam. Pariatur Lorem qui excepteur cillum id tempor ea qui pariatur aute. Aliquip commodo enim esse officia eu sint do Lorem voluptate. Dolor aliqua consequat aute culpa adipisicing officia labore. Aliquip ipsum in nisi irure ut. Eiusmod laborum consectetur dolor dolor culpa dolore eu labore dolore fugiat. Do elit pariatur minim eu cillum."
    />
    <SectionCaption>Dope Songs For You.</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell
          title={cell.title}
          image={cell.image}
        />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
