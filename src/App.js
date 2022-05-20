import React, { useState, useEffect } from 'react';
import './app.scss';
import scottAllison from './images/our-team-dr-scott-allison.jpg'
import emmanuelMiantona from './images/our-team-emmanuel-miantona.jpg'
import pahKSuku from './images/our-team-pah-k-suku.jpg'
import tobyEiler from './images/our-team-toby-eiler.jpg'
import zeamboDahnweih from './images/our-team-zeambo-dahnweih.jpg'

import NavMobile from '../src/components/mobile-nav/MobileNav'
import NavDesktop from '../src/components/desktop-nav/DesktopNav'
import logo from './images/bks_logo.png'

function App() {

  const [windowWidth, setWindowWidth] = useState()
  const targetWidth = 767;

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    }, [windowWidth])

    window.addEventListener('load', () => {
      setWindowWidth(window.innerWidth)
    })
  }, [windowWidth])

  const team = [
    { name: 'Emmanuel Miantona', img: emmanuelMiantona },
    { name: 'Toby Eiler', img: tobyEiler },
    { name: 'Pah K Suku', img: pahKSuku },
    { name: 'Scott Allison', img: scottAllison },
    { name: 'Zeambo Dahnweih', img: zeamboDahnweih },
  ]
  return (
    <main>
      <div className="img1">
        <header className="heading container">
          <div className="nav">
            <img className="logo" src={logo} alt='Benjamin Karmon Sehkar Foundation' tabIndex='1' />
            <nav>
              <ul>
                <li><a className="link" href="">About us</a></li>
                <li><a className="link" href="">What we do</a></li>
                <li><a className="link" href="">How you can help</a></li>
                <li><a className="link" href="">Eevents</a></li>
                <li><a className="link" href="">Gallery</a></li>
                <li><a className="link" href="">Contact</a></li>
                <li><a className="link" href="">Donate</a></li>
              </ul>
            </nav>
          </div>
          <div className='hero'>
            <h2 className='hero__title-one'>Equal Access to Quality Eduation</h2>
            <h3 className='hero__title-two'>Empowerment Through Education</h3>
            <a className='link' href="#">DONATE</a>
          </div>
          {/* <span>
            {windowWidth <= targetWidth && (<NavMobile />)}
            {!windowWidth <= targetWidth && (<NavDesktop />)}
          </span> */}

        </header>
      </div>
      <section className="section section1">
        <div className='container'>
          <h2>About Us</h2>
          <p>
            A group of Liberians residing in the US have established the Benjamin Karmon Sehkar Foundation Incorporated (BKS&trade;). The BKS&trade; Foundation, as it is affectionately known, has been established in memory of the late Benjamin K. Sehkar. Sehkar was a broadcast journalist killed in 1990 at the height of the Liberian Civil War by Armed Forces of Liberia (AFL) soldiers during a popular uprising against the Samuel Kanyon Doe government. The Foundation was established with a focus on providing tuition assistance to disadvantaged and underprivileged children from rural Liberia, with Nimba County as the primary target for aid. BKS&trade; is headquartered in Monrovia, Liberia.
          </p>

          <h4>Our Mission</h4>
          <p>
            Our mission is to provide access to reliable, reasonable and quality education for children of underprivileged and disadvantage communities in Liberia. We are committed to providing educational opportunities to every child in Liberia regardless of the constraints, while teaching them the word of God.
          </p>

          <h4>Vision</h4>
          <p>
            Our vision is to realize a Liberia in which children from all over the country have equal access to quality education in this era of global competitiveness.
                     </p>
        </div>
      </section>

      <div className="img2">
        <div className='container'>
          <h2>What we do</h2>
          <p>
            The BKS&trade; Foundation, Inc. provides scholarships to underprivileged and disadvantaged students to attend all major universities and colleges in Liberia. BKS&trade; Foundation is also partnering with some major high schools in the rural parts of the country to provide tuition assistance to students who meet its scholarship requirements. In addition to the aforementioned, we provide school supplies (notebooks, pencil, backpacks, crayons, rulers, etc.) to the disadvantaged students in Liberia.
                    </p>

          <p>
            <strong>BKS&trade; Legacy Scholarships</strong> are awarded to students from the Buu-Yao District who are currently enrolled at the following institutions: the Nimba County Community College, University of Liberia, Liberia International Christian College, Starz College of Science and Technology, and the United Methodist University. Qualified students from the Buu-Yao District who are intending to enroll at these universities will be awarded The BKS&trade; Legacy Scholarship. The Scholarship recipients are expected to complete annual service projects with young children and demonstrate leadership potential through involvement in school or community activities. Buu-Yao students at all levels of academic achievements may qualify for this grant. The selection process highlights an applicant's attitude toward education, willingness to provide service to children, and financial need.
                    </p>

          <h2>Our Long-term Goal</h2>
          <p>
            We are committed to providing educational opportunities to the children of Liberia, regardless of the constraints, while teaching them the word of God. Our goal is to ensure that the children of the rural parts of Liberia receive quality education in safe, constructive, and well-staffed educational facilities. We will ensure that these future leaders are not individually, regionally or collectively left out of this fundamental human right, whether as a result of gender inequality, geographical location, policy, financial policy, human resources, or any other limitations.
                    </p>
        </div>
      </div>

      <section className="section section2">
        <div className='container'>
          <h2>How you can help</h2>
          <h3>You Can Make A Difference</h3>
          <p>There are many ways you could get involved. Below are some ways you could help make a difference in the lives of the underprivileged and disadvantaged children in Liberia: Follow our progress on our website, Facebook, Instagram and Twitter. Help us spread the word.</p>

          <h3>Make BKS&trade; Foundation, Inc. the Charity of Your Choice</h3>
          <p>Talk to your School / College / Church / University / Company to select BKS&trade; Foundation, Inc. as their charity of choice for donations. To promote our partnership, we will provide you with our organization's logo and merchandise.</p>
        </div>
      </section>

      <div className="img3 our-team">
        <div className='container'>
          <h2>Our team</h2>
          <ul>
            {team.map((item, index) =>
              <li key={`${index + 1}`}><img src={item.img} alt={item.name} /> <p>{item.name}</p></li>
            )}
          </ul>
        </div>
      </div>
      <section className="section section3">
        <div className='container'>
          <h2>Section Three</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo totam voluptates, quis in ex provident unde
            incidunt accusamus, quidem ullam possimus? Doloribus, tenetur. Quibusdam facere ullam tempore explicabo, perferendis
            laudantium quas natus quisquam iure voluptatum. Hic debitis asperiores repellat sint ducimus. Dolore odit ea aliquid
            illo ullam itaque non.
    </p>
        </div>
      </section>
      <div className="img1">
        <div className='container'>

          <span>Parallax Website</span>

        </div>
      </div>
    </main>
  );
}

export default App;
