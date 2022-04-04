import Head from 'next/head'
import styled from 'styled-components';

export default () => (
    <>
    <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.png"/>
        <title>Frontend Mentor | Order summary card</title>
    </Head>
    <Container className='center'>
        <Card>
            <CardHeader alt='illustration hero for card representing a person listening to music' src="./image/illustration-hero.svg"></CardHeader>
            <CardBody>
                <Ordersummary className='center'>Order Summary</Ordersummary>
                <Ordersummaryp>
                    You can now listen to millions of songs, audiobooks, and podcasts on any 
                    device anywhere you like!
                </Ordersummaryp>
                <AnnualOptionContainer>
                    <AnnualPlanOption className='center'>
                        <MusicIcon alt='music icon' src="./image/icon-music.svg"></MusicIcon>
                        <MusicSubscriptionInformation>
                            <AnnualPlan>Annual Plan</AnnualPlan>
                            <MusicSubscriptionPrice>$59.99/year</MusicSubscriptionPrice>
                        </MusicSubscriptionInformation>
                        <MusicChangePlan>
                            Change
                        </MusicChangePlan>
                    </AnnualPlanOption>
                </AnnualOptionContainer>
                <ButtonContainer>
                    <ProceedToPaymentButton>
                        Proceed to Payment
                    </ProceedToPaymentButton>
                    <CancelOrderButton>
                        <CancelOrder>Cancel Order</CancelOrder>
                    </CancelOrderButton>
                </ButtonContainer>
            </CardBody>
        </Card>
    </Container>
  </>
);


const Container = styled.main`
min-height:700px;
height:100%;
font-size:16px;
background: url(image/pattern-background-mobile.svg);
background-color:hsl(225, 100%, 94%);
background-repeat: no-repeat;
background-size: 100% 30%;

@media (min-width: 768px){
    background: url(image/pattern-background-desktop.svg);
    background-repeat: no-repeat;
    background-color:hsl(225, 100%, 94%);
    background-size: 100% 50%;
}
`;
const Card = styled.section`
max-height:600px; max-width:440px;
width:90%;
background-color:white;
border-top-left-radius:15px;
border-top-right-radius:15px;
border-bottom-left-radius:15px;
border-bottom-right-radius:15px;
box-shadow: 0px 10px 10px hsl(225, 100%, 94%);
`;
const CardHeader=styled.img`
border-top-left-radius:15px;
border-top-right-radius:15px;
width:100%;
`;
const CardBody=styled.div`
padding-left:35px;
padding-right:35px;
padding-bottom:20px;
`;
const Ordersummary=styled.h1`
font-weight:900;
font-size:1.5em;
`;
const Ordersummaryp=styled.p`
font-weight:500;
padding:0px 5px 0px 5px;
color:hsl(224, 23%, 55%);
text-align: center;
`;
const AnnualOptionContainer=styled.div`
margin-bottom:20px;
`;
const AnnualPlanOption=styled.div`
display:flex;
padding:20px;
border-radius:8px;
background-color:hsl(225, 100%, 98%);
`;
const MusicIcon=styled.img`
width:20%;
width:48px; height:48px;
`;
const MusicSubscriptionInformation=styled.div`
width:60%;
padding-left:20px;
`;
const AnnualPlan=styled.div`
font-weight:900;
`;
const MusicSubscriptionPrice=styled.p`
color:hsl(224, 23%, 55%);
padding:0;
margin:0;
`;
const MusicChangePlan=styled.a`
width:20%;
text-decoration:underline;
color: hsl(245, 75%, 52%);
font-weight:600;
&:hover {
    text-decoration:none;
    cursor:pointer;
    color:hsl(245, 75%, 65%);
}
`;
const ButtonContainer=styled.div`
`;
const ProceedToPaymentButton=styled.button`
font-family: 'Red Hat Display', sans-serif;
font-weight:700;
background: none;
color: white;
border: none;
background-color:hsl(245, 75%, 52%);
width:100%;
padding: 15px 0px 15px 0px;
border-radius:8px;
font-size:1.1em;
box-shadow: 0px 12px 10px hsl(245, 75%, 92%);
&:hover {
    cursor:pointer;
    background-color:hsl(245, 75%, 65%);
}
`;
const CancelOrderButton=styled.button`
background: none;
color: black;
border: none;
width:100%;
padding: 20px 0px 20px 0px;
border-radius:5px;
font-size:1.1em;
`;
const CancelOrder=styled.div`
margin:0;
color:hsl(224, 23%, 55%);
font-weight:700;
&:hover{
    color:hsl(223, 47%, 23%);
    cursor:pointer;
}
`;