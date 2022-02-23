import React from 'react';
import './SyleSheetHelp.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Help() {
 
  return (
    <>
      <div className="faq-top" >
        <div className="faq-top-first">
          <h1>Help & Support</h1>
          <h3>Let's take a step ahead and help you better.</h3>
        </div>
        <div className="faq-top-second">
          <div className="faq-top-second-first">
            <div className="faq-top-second-first-div">
              <h4>Partner Onboarding</h4>
            </div><div className="faq-top-second-first-div2">
              <h4>Legal</h4>
            </div><div className="faq-top-second-first-div2">
              <h4>FAQs</h4>
            </div>
          </div>       
          <div className="faq-top-second-second">
            <h2>Partner Onboarding</h2>

          <Accordion sx={{color:"#6a6c75"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              
            >
              <Typography>I want to partner my restaurant with Swiggy</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Partner with us
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{color:"#6a6c75"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>What are the mandatory documents needed to list my restaurant on Swiggy?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              -  Copies of the below documents are mandatory<br/>
              -  FSSAI Licence OR FSSAI Acknowledgement<br/>
              -  Pan Card<br/>
              -  GSTIN Certificate<br/>
              -  Cancelled Cheque OR bank Passbook<br/>
              -  Menu
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{color:"#6a6c75"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>After I submit all documents, how long will it take for my restaurant to go live on Swiggy?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{color:"#6a6c75"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What is this one time Onboarding fees? Do I have to pay for it while registering?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Swiggy.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{color:"#6a6c75"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Who should I contact if I need help & support in getting onboarded?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              You can connect with Partner Support on 080-67466777/68179777 or write to partnersuport@swiggy.in
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{color:"#6a6c75"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How much commission will I be charged by Swiggy?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{color:"#6a6c75"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              FSSAI licence is a mandatory requirement according to the government’s policies. However, if you are yet to receive the licence at the time of onboarding, you can proceed with the acknowledgement number which you will have received from FSSAI for your registration.
              </Typography>
            </AccordionDetails>
          </Accordion>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Help