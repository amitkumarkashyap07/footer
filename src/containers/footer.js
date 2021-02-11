import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
            <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Client</Footer.Link>
                    <Footer.Link href="#">Helpdesk</Footer.Link>
                    <Footer.Link href="#">Query</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Demo</Footer.Link>
                    <Footer.Link href="#">Development</Footer.Link>
                    <Footer.Link href="#">Resource</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f"/> Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram-square"/>Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter"/>Twitter</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube"/>Youtube</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Bengalore</Footer.Link>
                    <Footer.Link href="#">Delhi</Footer.Link>
                    <Footer.Link href="#">Chennai</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}