import React, { Fragment } from 'react';
import Footer from './components/footer'; 
import Nav from './components/nav';
import './style.css';
import Feature from './components/feature';

function Index() {
  return (
    <Fragment>
      <Nav />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
       <Feature />
      </main>
      <Footer />
    </Fragment>
  );
}

export default Index;