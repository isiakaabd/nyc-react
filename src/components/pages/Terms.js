import React from 'react';
import '../css/terms.css'

import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Terms = props =>{

    return (
      <div>

        <Header />
     
        <section className="terms">
        <div className="bg-landing">
          <h1 className="heading">TERMS OF SERVICE</h1> 
          <div className="updatesCont"><p className="updates">Updated October 1, 2020</p></div>
        </div>
        <hr className="divider" />
        <div className="conditions">
          <div className="conditionsCont">
            <ol>
              <li>
                COLLABORATION <br /><br />
                The client shall respect stipulated product fulfillment timelines and provide NYC all information as 
                may be reasonably required to fulfill its obligation under this Contract. Should the client not provide all 
                information required, is unreachable despite numerous attempts or fail to respect stipulated product
                fulfillment timelines, NYC, after reasonable effort to communicate with the client, may begin billing
                client the Fees and if possible, provide the Advertising Services as is.
              </li><br /> <br /><br />
              <li>
                INCREASE OF FEE<br /><br />
                The Fees due pursuant to this Contract may be increased annually by NYC, in accordance with its
                standard practices. The client shall pay NYC the increased Fees upon receipt of a notice of increase 
                from NYC.
              </li><br /><br /><br />
              <li>
                BILLING INFORMATION<br /><br />
                The client is responsible for ensuring that the billing information and payment information (including 
                but not limited to name, mailing address, email address, telephone number, credit card information
                and/or banking information) are accurate and current. The client, by providing its credit card, banking 
                information or any other preauthorized payment method in order to remit a payment, authorizes NYC to 
                charge the client’s credit card or bank account for all Fees or amounts due under this Contract. The
                client must notify NYC of any changes to the billing and payment information. Should the client fail to
                update its billing information upon change with NYC, NYC may charge the client for any associated Fees
                it incurs as a result of said failure.
              </li><br /><br /><br />
              <li>
                THIRD PARTY CONTENT<br /><br />
                The client acknowledges and agrees that NYC may aggregate, display and publish third party content
                related to the client, as well as distribute or publish the client's content to third party partners of NYC.
                Further, the client acknowledges and agrees that NYC shall not be responsible or liable, directly or
                indirectly, for any damage or loss caused or alleged to be caused by or in connection with third party
                content or the distribution or publishing of client's content to third party partners. The client releases
                NYC from all liability with respect to third party content or the distribution or publishing of client's 
                content to third party partners.
              </li><br /><br /><br />
              <li>
                CLIENT'S WARRANTY<br /><br />
                The client warrants that it is authorized to publish the print advertisement under the heading and in the 
                territory indicated on the reverse side of this Contract, and to display the digital advertisement and the
                Website. The client warrants that it holds all permits or licenses which may be advertised, including any 
                license to practice issued by any professional or other regulatory body exercising its jurisdiction over the
                client's activities. The client further warrants that it holds all the rights to use the trademarks or trade
                names included in the print and digital advertisement and the Website and that such use does not
                violate any provision of any law or statute, including the Trademarks Act, the Copyright Act and any
                other law or statute relating to intellectual property. <br />
                To the extent NYC collects or otherwise processes personal information in the course of providing the 
                Advertising Services, client represents and warrants that NYC is authorized to process such information 
                and that client has obtained all necessary consents and provided all necessary notices as required 
                under applicable privacy laws.
              </li><br /><br /><br />
              <li>
                MODIFICATIONS TO THIS CONTRACT BY NYC<br /><br />
                The client acknowledges that NYC may, from time to time, update these Terms and Conditions and the
                Advertising Services. NYC may modify the Advertising Services if said modification is to the advantage
                of the client or such modification does not substantially affect the rights and obligations of the client.
                The client is bound by any such modifications from the moment the client receives a notice to that effect. 
              </li><br /><br /><br />
              <li>
                NYC'S TRADEMARKS AND PROPERTY OF THE ADVERTISING SERVICES<br /><br />
                The client acknowledges that it is not authorized to use NYC's name or any of its trademarks without the
                prior written consent of NYC. The client also acknowledges that NYC owns the intellectual property
                rights related to the Advertising Services, including but not limited to the print and digital
                advertisement, the Website and video. The client undertakes not to reproduce same without NYC's prior
                written consent. Notwithstanding the foregoing and provided the client is not in default of payment of
                Fees and as permitted by usage license, upon expiry of the Initial Term client may obtain all transferable
                intellectual property associated with their Website and video. In such event, the client agrees to abide by
                NYC’s suppliers’ license agreements. 
              </li><br /><br /><br /><br />
              <li>
                LANGUAGE<br />
                The parties acknowledge that they have requested that this Contract be drafted in the English language. 
              </li><br /><br /><br />
            </ol>
          </div>
        </div>
      </section>
                  
        <Footer />

      </div>
            

    )


}

export default Terms;