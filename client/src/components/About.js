import { Box } from '@chakra-ui/layout';
import React from 'react';
import Navbar1 from './Navbar1';
import Footer1 from './Footer1';
const About = () => {
    return(
        <><Navbar1 /><Box>
            <section className="hero">
                <h1>Welcome To About Page</h1>
            </section>
        </Box>
        <Footer1/></>
       
    )
}
export default About;