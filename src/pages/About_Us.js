import React from 'react'
import Photo from '../ConnectingPeopleAbout.png';

const About_Us = () => {
  return (
    <div>
      <main>
        <div class='jumbotron'>
          <h1>Content Connector</h1>
          <p>Helping Local Freelancers Connect with Local Businesses</p>
        </div>
        <div class='container'>
          <div class='aboutBody'>
            <div class='col-sm-8'>
              <h2>
                <strong>About Company Page</strong>
              </h2>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex
              </p>
            </div>
          </div>
          <div class='col-sm-6'>
            <img src={Photo} alt='something' />
          </div>
        </div>
        <div class='container1'>
          <h2>Our Values</h2>
          <h4>
            <strong>MISSION:</strong> Our mission lorem ipsum..
          </h4>
          <div>
            <strong>VISION:</strong> Our vision Lorem ipsum..
          </div>
        </div>
      </main>
    </div>
  )
}

export default About_Us