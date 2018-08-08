import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card';
import Hero from '../components/hero';
import ProjectCards from '../components/project-cards';
import '../components/project-cards.css'

const IndexPage = () => (
  <div>
    <div className="header-block">
      <h4>PORTFOLIO OF MICHAEL MCLAUGHLIN</h4>
      <h1>Designing products for impact in education.</h1>
      <p className="intro">I have shipped products that empower educators and streamline the learning experience.</p>
      <Link to="/page-2/">About Me</Link>
    </div>
    <Hero 
      backgroundImage="https://images.unsplash.com/photo-1533281000685-92f3746dc683?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a21626af6bba97080da31343c46c497&auto=format&fit=crop&w=1334&q=80"
    >
      <Card 
        title="For Educators"
        description="Our researcher and feedback from professors lead us to two far reaching conclusions – professors needed more control over their courses and they needed more data to make informed decisions."
      />
    </Hero>
    <div className="project-gallery">
      <ProjectCards />
      <ProjectCards />
      <ProjectCards />
    </div>

    <Hero 
      backgroundImage="https://images.unsplash.com/photo-1533281000685-92f3746dc683?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a21626af6bba97080da31343c46c497&auto=format&fit=crop&w=1334&q=80"
    >
      <Card 
        title="For Educators"
        description="Our researcher and feedback from professors lead us to two far reaching conclusions – professors needed more control over their courses and they needed more data to make informed decisions."
      />
    </Hero>
    <div className="project-gallery">
      <ProjectCards />
      <ProjectCards />
      <ProjectCards />
    </div>
  </div>

  
)

export default IndexPage
