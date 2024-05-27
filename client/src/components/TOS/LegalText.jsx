import { postAnalytics } from "../../analytics";
import styled from "styled-components";
import { Link } from "react-router-dom";

function LegalText() {
  const supportClick = () => {
    postAnalytics({ type: `TOS-support-request` });
  };
  const handlePrivacyClick = () => {
    postAnalytics({ type: "TOS-privacy-link-clicked" });
  };

  return (
    <Wrapper id="LegalTextWrapper">
      <Title>GistMD Terms of Use</Title>
      <Paragraph>
        Gist Med Ltd. and its affiliates (collectively, “GistMD”, “Company”,
        “we”, “our” or ”us”) welcome you , the patient and/or a designated
        representative (the “Patient(s)” or “User(s)” or “you”) to our digital
        Platform aimed to educate and engage the Patients along their care
        journey (the “Platform”). The Platform serves as an assisting tool and
        offers personalized educational and engagement tools and related
        services (collectively, our “Services”, as further detailed below). The
        terms and conditions hereunder are the terms and conditions for the
        usage of the Platform
      </Paragraph>
      <SubTitle>Acceptance of the Terms</SubTitle>
      <Paragraph>
        By connecting to, and accessing the Platform on your device, you
        acknowledge that you have read and understood the following terms of
        use, including the terms of our Privacy Policy available at{" "}
        <Link to="../Privacy" onClick={handlePrivacyClick}>
          Privacy Policy
        </Link>{" "}
        (collectively, the “Terms”) and you agree to be bound by them and to
        comply with all applicable laws and regulations regarding your use of
        our Platform and you acknowledge that these Terms constitute a binding
        and enforceable legal contract between the Company and you
        <BoldParagraph>
          IF YOU DO NOT AGREE TO THESE TERMS, OR IF YOU DO NOT POSSESS THE LEGAL
          CAPACITY TO ENTER INTO THESE TERMS, PLEASE DO NOT ENTER TO, CONNECT
          TO, ACCESS OR USE OUR PLATFORM IN ANY MANNER.{" "}
        </BoldParagraph>
        The Platform and/or Services are available only to individuals who (a)
        are at least eighteen (18) years old; and (b) possess the legal capacity
        to enter into these Terms (on behalf of themselves and their
        organization) and to form a binding agreement under any applicable law.
        You hereby represent that you possess the legal authority to enter into
        these Terms on your and your organization's behalf and to form a binding
        agreement under any applicable law, to use the Platform and/or Services
        in accordance with these Terms, and to fully perform your obligations
        hereunder
      </Paragraph>
      <SubTitle>The Platform and Services</SubTitle>
      <Paragraph>
        The Platform enables Patients to engage in their therapeutic journey
        within the medical process they have undergone (or intend to undergo) at
        a medical institution, or in the context of disease management, and to
        receive personalized Educational content such as guidelines for
        performing medical procedures (e.g., fasting times, pre- or
        post-procedure medication use, etc.), videos, documents, guidelines,
        pre-review of informed consent forms, and similar materials (hereinafter
        collectively referred to as "Educational Content"), and to share these
        contents with others, with the aim of assisting the Patient and/or a
        designated representative to prepare for the medical procedure. For
        clarification, the Educational Content, including videos, does not
        contain personal identifiable information of the patient but is
        customized to the specific medical treatment and the therapeutic data as
        input by the medical and/or administrative staff of the medical
        institution and personal medical data of the patient as provided by the
        patient in response to a questionnaire, as detailed below. The patient
        shall gain access to the Platform via a text message or a message in a
        messaging application or an email sent by the medical institution or its
        representative, according to the contact details provided by the patient
        or their family, which contains a link (URL) to the Platform. Note that
        the message and the link are personalized and are not transferable to
        others. Upon entering the Platform, the patients may be required to
        provide certain information about themselves, including their health
        status, through a designated medical questionnaire ( the
        "Questionnaire"). Based on the information entered in the Questionnaire,
        the therapeutic information provided by the medical and/or
        administrative staff of the medical institution, and the type of medical
        test/procedure the patient is to undergo, the Platform will provide
        personalized Educational Content for the patient. Additionally, the
        Platform may enable the uploading of relevant documents, such as medical
        certificates, summons, and the like. The Platform may include additional
        functionalities, including reminders sent to the patient through various
        means (e.g., push notifications, SMS, etc.) and communication with the
        relevant medical team
      </Paragraph>
      <BoldParagraph>Please note:</BoldParagraph>
      <ol>
        <li>
          You may upload documents and/or other information to the Platform. It
          is clarified that the Platform is not intended for the storage of
          information, medical or otherwise, and we do not guarantee that
          documents you upload to the Platform and/or information you input into
          the Platform, whether through the questionnaire or otherwise, will be
          available to you, whether during your use of the Platform or
          thereafter. It is your responsibility to ensure that you maintain a
          backup copy of any information and documents that you upload to the
          system. The medical institution and/or GistMD will not be liable for
          any loss of or lack of access to such information and/or documents
        </li>
        <li>
          All information collected or provided by you through the Platform will
          be used solely for the purpose of personalizing Educational Content
          for you within the Platform itself. For the avoidance of doubt, this
          information is not stored in the general records, is not transferred
          to the medical institution, and is not recorded in your medical file.
          Should there be any change in your medical condition, you are required
          to update your treating physician and/or the relevant medical team as
          soon as possible
        </li>
        <li>
          <BoldParagraph>
            It is your sole responsibility to ensure that all information you
            provide in the questionnaire and/or any other information required
            for the use of the Platform is accurate and complete. Neither the
            medical institution nor GistMD shall be liable for any damage or
            claim that may arise from the entry of incomplete, incorrect, or
            inaccurate information into the Educational Content, the
            questionnaire, and/or the Platform at large
          </BoldParagraph>
        </li>
      </ol>
      <Paragraph>
        Upon your entry and use of the Platform, we may require certain
        identification details. You must provide us with complete, accurate, and
        truthful information, and you hereby agree not to misrepresent your
        identity or any other details in this context. If we determine that you
        have accessed the Platform using someone else's identification details,
        or if you have provided incorrect details upon entry to the Platform,
        you are exposing yourself to criminal and/or civil liability. The
        Platform includes, among other things, contact information, videos,
        text, files, logos, icons, images, databases, links, other specialized
        content, technical data, documents, knowledge, specifications, designs,
        data, the "look and feel" of the Platform, algorithms, source code and
        object code, interfaces, GUI, graphics related to interactive features,
        illustrations, drawings, animations, and other features accessed by or
        through the Platform, including the Educational Content and the
        questionnaire (collectively referred to as the "Content"). All services
        offered through the Platform shall be collectively referred to as the
        "Services" under these terms
      </Paragraph>
      <Border>
        <BoldParagraph>
          THE PATIENT ACKNOWLEDGES THAT ALL SERVICES PROVIDED WITHIN THE
          PLATFORM MAY BE DERIVED FROM SPECIFIC CIRCUMSTANCES THAT REQUIRE
          PHYSICAL EXAMINATION AND/OR FROM INFORMATION PROVIDED BY THE PATIENT
          THROUGH THE QUESTIONNAIRE, TO THE TREATING PHYSICIAN, OR FROM MEDICAL
          INQUIRIES RELATED TO THE MEDICAL PROCEDURE. THEREFORE, THE MEDICAL
          INSTITUTION AND/OR JUSTMED ARE NOT RESPONSIBLE FOR THE CONTENT,
          INCLUDING EDUCATIONAL CONTENT, THAT IS INFLUENCED OR CREATED BASED ON
          INCORRECT, FALSE, INCOMPLETE, OR INACCURATE INFORMATION PROVIDED BY
          THE Patient TO THE MEDICAL INSTITUTION, INCLUDING BUT NOT LIMITED TO
          THROUGH MEDICAL TESTS, THE PLATFORM, THE QUESTIONNAIRE, OR ANY OTHER
          INTERACTION WITH THE MEDICAL INSTITUTION. IT IS THE PATIENT’S SOLE
          RESPONSIBILITY TO ENSURE THAT ALL INFORMATION PROVIDED TO THE MEDICAL
          INSTITUTION, INCLUDING THROUGH THE QUESTIONNAIRE AND/OR THE PLATFORM,
          IS CORRECT AND ACCURATE. THE PATIENT CONFIRMS THAT THEY UNDERSTAND THE
          PLATFORM IS INTENDED AS A TOOL FOR CONVENIENCE ONLY AND MAY NOT
          INCLUDE ALL RELEVANT MEDICAL INFORMATION, DIAGNOSES, OR ADVICE. THE
          PLATFORM IS INTENDED FOR USE RELATED TO SPECIFIC MEDICAL PROCEDURES
          DEFINED THEREIN—IT IS EXPLICITLY CLARIFIED THAT THE PLATFORM AND/OR
          SERVICES AND/OR CONTENT AND/OR EDUCATIONAL CONTENT SHOULD NOT BE
          RELIED UPON FOR MEDICAL PROCEDURES OR ANY OTHER MEDICAL MATTERS NOT
          EXPLICITLY AND SPECIFICALLY INCLUDED IN THE SERVICES PROVIDED FOR A
          PATIENT FOR WHOM THE CONTENT IS PRODUCED. WITHOUT LIMITING THE
          GENERALITY OF THE FOREGOING, ALL CONTENT (INCLUDING EDUCATIONAL
          CONTENT) PROVIDED WITHIN THE SERVICES WILL BE RELEVANT AT THE TIME OF
          PROVIDING SUCH CONTENT AND ARE NOT A SUBSTITUTE FOR GENERAL MEDICAL
          ADVICE. IT IS THE PATIENT’S SOLE RESPONSIBILITY TO CONSULT WITH A
          QUALIFIED MEDICAL PROFESSIONAL AND ACT ACCORDING TO THE TREATING
          PHYSICIAN'S RECOMMENDATION FOR ANY MEDICAL MATTER. IN ANY CASE WHERE
          THE Patient EXPERIENCES A WORSENING OF THEIR MEDICAL CONDITION, THEY
          MUST IMMEDIATELY SEEK MEDICAL ASSISTANCE. IF YOU ARE THE GUARDIAN OF
          THE PATIENT UNDERGOING THE MEDICAL PROCEDURE OR MANAGING THE DISEASE,
          INCLUDING A PARENT OF A PATIENT UNDER THE AGE OF EIGHTEEN, YOU HEREBY
          CONFIRM THAT YOU ARE: (A) THE AUTHORIZED GUARDIAN TO MANAGE THE
          MEDICAL AFFAIRS OF THE PATIENT CONCERNING THE USE OF THIS PLATFORM;
          (B) RESPONSIBLE FOR PROVIDING, AS NECESSARY, ACCURATE AND CORRECT
          MEDICAL INFORMATION ABOUT THE PATIENT ACCORDING TO OUR REQUIREMENTS IN
          THESE TERMS; AND (C) ACCEPTING AND AGREEING TO THESE TERMS OF USE,
          INCLUDING THE COMPANY'S PRIVACY POLICY. THE PLATFORM MAY ALLOW THE
          PATIENT TO SHARE EDUCATIONAL CONTENT AND INFORMATION FROM THE PLATFORM
          WITH THIRD PARTIES THROUGH VARIOUS MEANS. ANY SUCH SHARING OF THIS
          CONTENT IS THE SOLE RESPONSIBILITY OF THE PATIENT, AND WE AND/OR
          JUSTMED WILL NOT BE RESPONSIBLE FOR ANY DAMAGE OR LOSS TO THE PATIENT
          OR ANY OTHER PERSON AS A RESULT OF OR IN CONNECTION WITH ANY SHARING
          OF THIS CONTENT WITH THIRD PARTIES. IT IS CLARIFIED THAT, ALTHOUGH THE
          EDUCATIONAL CONTENT IS ANONYMOUS, SHARING IT WITH THIRD PARTIES MAY
          LINK THIS CONTENT WITH THE PATIENT’S PERSONAL DETAILS. BETWEEN THE
          PARTIES TO THESE TERMS, ALL RIGHTS IN THE CONTENT AVAILABLE ON THE
          PLATFORM, INCLUDING EDUCATIONAL CONTENT, ARE RESERVED TO THE MEDICAL
          INSTITUTION OR JUSTMED. THE SERVICES, CONTENT, AND/OR EDUCATIONAL
          CONTENT AVAILABLE THEREON ARE PROVIDED "AS IS".
        </BoldParagraph>
      </Border>
      <SubTitle>Prohibited Uses</SubTitle>
      <Paragraph>
        There are certain actions that are strictly prohibited while using the
        Platform. Please read these restrictions carefully. Failure to comply
        with any of the instructions detailed below may result in the
        termination of your use of the Services and may expose you to civil
        and/or criminal liability. Unless expressly permitted by these terms or
        in writing by us, you are not allowed (and you may not permit any third
        party) to: (a) Use the Platform and/or the services and/or the content
        and/or the instructional content for any illegal, unethical,
        unauthorized, or prohibited purpose; (b) Use the Platform and/or the
        services and/or the content and/or the instructional content for
        commercial purposes or non-private uses; (c) Remove or dissociate any
        proprietary restrictions and signs from the content and/or the Platform
        and/or the instructional content that indicate proprietary rights of
        Newtown Gastroenterology , GistMD, and/or their licensors, including any
        proprietary notices appearing therein (such as ©, ™, or ®); (d) Violate
        or infringe on users' privacy rights or other rights, or collect
        identifiable personal information about users without their explicit
        consent, whether manually or by using any robot, spider, scanner, any
        search or retrieval application, or any other manual or automated means
        to access the Platform and retrieve, collect, and/or scrape information;
        (e) Interfere with or disrupt the operation of the Platform, the servers
        or networks hosting the Platform, or violate any laws, regulations,
        requirements, procedures, or policies of said servers or networks; (f)
        Make false statements or present a false front regarding your
        relationship with any person or entity, or explicitly or implicitly
        indicate that we endorse you, your site, your business, or any statement
        you publish, or present false or inaccurate information about the
        Platform and/or the services; (g) Perform any action that creates or is
        likely to create an unreasonable or disproportionately large load on our
        Platform's infrastructure, as determined by us; (h) Circumvent any
        measures we may use to prevent or restrict access to the services; (i)
        Copy, modify, adapt, make available, translate, transfer, perform
        reverse engineering, transform binary code into open code, decompile, or
        disassemble any part of the content on the Platform, or to publicly
        display, reproduce, create derivative works, perform, distribute, or
        make similar use of the content; (j) Copy, distribute, display, present
        to the public, reduce to human-readable form, convert binary code into
        open code, decompile, adapt, sublicense, make any commercial use, sell,
        rent, transfer, lend, process, compile, perform reverse engineering,
        integrate with other software, translate, modify, or create derivative
        works from any material subject to our proprietary rights, including the
        intellectual property of Newtown Gastroenterology and/or GistMD, in any
        way and by any means; (k) Use the services and/or the content and/or the
        instructional content on any site or computer network, for any purpose,
        without our prior written consent; (l) Create a browser environment,
        frame, mirror, or perform inline linking to the content; (m) Sell,
        license, or exploit for any commercial purpose any use or access to the
        Platform and/or the content and/or the instructional content; (n) Frame
        or mirror any part of the Platform without our prior explicit written
        consent; (o) Create a database by systematically downloading and storing
        all or any part of the content and/or the instructional content and/or
        from the Platform; (p) Transmit or otherwise make available in
        connection with the Platform any virus, worm, Trojan horse, bug,
        rootkit, bomb, or any other computer code, file, or program that may or
        is intended to damage the operation of any hardware, software,
        communication equipment, code, or other component which may harm,
        interfere, or penetrate operationally or potentially; (q) Breach any of
        the terms.
      </Paragraph>
      <SubTitle>Platform Data Usage</SubTitle>
      <Paragraph>
        The Platform stores information on Google's SQL Cloud servers under
        conditions approved by Newtown Gastroenterology 's Cloud Committee.
        Identifiable information is deleted from the dedicated server within a
        maximum of five (5) days, leaving only anonymous patient details which
        cannot be used to identify the patient. Access to identifiable
        information is granted exclusively to authorized medical teams within
        Newtown Gastroenterology and to authorized GistMD development team
        members, with Newtown Gastroenterology 's approval. The Platform is
        registered as a data repository, and GistMD is registered as the data
        repository holder
      </Paragraph>
      <SubTitle>Intellectual Property Rights</SubTitle>
      <Paragraph>
        The Platform, the content, the instructional materials, and our or
        GistMD's proprietary assets, including but not limited to, inventions,
        patents and patent applications, trademarks, trade names, service marks,
        copyrights, domain names, and trade secrets, whether registered or
        registrable (collectively, "Intellectual Property"), are owned by us or
        GistMD, or have been licensed to us or GistMD, and are protected by
        patent laws, copyright laws, other intellectual property laws, and by
        international treaties and agreements. Any rights not expressly granted
        to you herein are reserved to us and our licensors. These terms do not
        grant you any rights in our or GistMD's Intellectual Property, except
        for a limited right of use which is revocable according to the terms.
        Nothing in these terms shall constitute a waiver of our Intellectual
        Property under any law.
      </Paragraph>
      <SubTitle>Trademarks and Trade Names</SubTitle>
      <Paragraph>
        The logos of Newtown Gastroenterology and other proprietary identifiers
        used by Newtown Gastroenterology in connection with the Platform and/or
        the services provided therein (hereinafter "the Company's Trademarks")
        are all trademarks and/or trade names of Newtown Gastroenterology ,
        whether registered or not, and whether registrable or not. All other
        trademarks, trade names, other identifying marks, and commercial symbols
        (including any logos) that may appear on the Platform belong to their
        respective owners (hereinafter "Third-Party Trademarks"). Third-Party
        Trademarks are included on the Platform (if at all) for purposes of
        presentation, description, and identification only. No rights, licenses,
        or ownership in the Company's Trademarks or in the Third-Party
        Trademarks are granted herein. Therefore, users must refrain from any
        use of these marks, unless otherwise permitted by these terms of use.
      </Paragraph>
      <SubTitle>Feedback</SubTitle>
      <Paragraph>
        Should you provide Newtown Gastroenterology and/or GistMD with any
        feedback, comments, reactions, or suggestions regarding the Platform
        ("Feedback"), GistMD shall receive an exclusive, royalty-free, fully
        paid-up, worldwide, perpetual, and irrevocable license to incorporate
        the Feedback into any of its current or future products, technologies,
        and/or services, and to use such Feedback for any purpose without your
        approval, all without any further compensation to you. You agree that
        such Feedback will be considered non-confidential information.
        Furthermore, you warrant that your Feedback is not subject to any
        license terms that would require us to fulfill any additional
        obligations with regard to the products, technologies, and/or services
        that incorporate any such Feedback
      </Paragraph>
      <SubTitle>Availability</SubTitle>
      <Paragraph>
        The availability and operation of the services and/or content (including
        instructional content) provided by the Platform are dependent on
        numerous factors, including software, hardware, communication networks,
        service providers or contractors of the company or other third parties
        (including those providing cloud storage services, website registration
        services, and more). We do not guarantee that the services will operate
        and/or be available at all times without interruption, malfunction, or
        that they will be immune from unauthorized access and/or error-free. The
        user hereby agrees that Newtown Gastroenterology and/or GistMD shall not
        be liable for any inability of the Platform to operate or be accessible,
        for any reason whatsoever; including internet or network outages,
        hardware or software disruptions due to technical or other issues not
        under the company's control (for example, sabotage, force majeure,
        negligence by third parties, etc.) or due to a fault or error by Newtown
        Gastroenterology and/or GistMD or their representatives.
      </Paragraph>
      <SubTitle>Minors</SubTitle>
      <Paragraph>
        Without prejudice to the terms herein, to use the Platform, you must be
        over the age of eighteen (18). Naturally, our ability to verify that a
        user is over the age of eighteen is very limited, and will generally
        rely on the user's own declaration, which we are entitled to request at
        any stage. If it comes to our knowledge that a person under the age of
        eighteen (18) is using the Platform without the supervision of a parent
        or guardian authorized to handle the minor's medical affairs in relation
        to the use of the Platform, we will block such user from accessing the
        Platform and will make every effort to immediately delete any personal
        information (as defined in the company's privacy policy) concerning said
        user. For clarification, and without detracting from the above, the use
        of the services by minor users (patients) is the responsibility of their
        parents or the guardian authorized to handle their medical affairs.
      </Paragraph>
      <SubTitle>Disclaimer of Warranties and Liabilities</SubTitle>
      <Paragraph>
        Using the Platform is solely at your discretion and responsibility. In
        any case of a medical query, a deterioration in your condition, and/or
        doubt regarding the Educational Content included on the Platform, you
        must immediately contact your treating physician and/or the relevant
        medical team. Please be aware that under no circumstances is the
        Platform intended for use in emergency situations. To the fullest extent
        permitted by law, and except as explicitly stated in these terms, the
        Platform, the services, and all content on the Platform, including
        Educational Content, are provided on an "AS-IS" basis. Newtown
        Gastroenterology and/or GistMD bear no responsibility or liability of
        any kind, whether express or implied, including any warranty of
        ownership or non-infringement or any implied warranties of usability,
        merchantability, or fitness for a particular purpose, as well as any
        liability arising from the course of dealing or usage of trade. You may
        have additional consumer rights under the law which cannot be waived by
        these terms. To the maximum extent permitted by any applicable law,
        Newtown Gastroenterology and/or GistMD do not guarantee that (a) the use
        and operation of the Platform and/or the content and/or the Educational
        Content will be free of viruses, defects, worms, other harmful
        components, or software limitations, (b) any errors or defects in the
        services will be corrected, and/or (c) any representation regarding the
        use, inability to use, or results of the use of the services and/or the
        content available on the Platform or through the Platform (including
        that the results of using the services will meet your requirements).
        Without limiting the foregoing, sharing content and/or Educational
        Content with third parties is at your sole responsibility, and Newtown
        Gastroenterology and/or GistMD will not be liable for any damage or loss
        caused to you or any other person as a result of or in connection with
        any such sharing. Newtown Gastroenterology and/or GistMD are not
        responsible for any outcomes resulting from technical issues (including
        but not limited to internet connectivity, line or server load, delays,
        and communication disruptions) arising from internet and
        telecommunications providers. Furthermore, GistMD does not commit that
        the services and/or the content and/or the Educational Content will be
        secure to use, accurate, complete, uninterrupted, error-free, and/or
        without defects. Additionally, GistMD carries no liability regarding the
        use of the services, including but not limited to the availability,
        reliability, or quality of the services and/or the content and/or the
        Educational Content, and GistMD is not liable and will not be
        responsible for any errors or defects in relation to the content and/or
        Educational Content and/or any information displayed on the Platform. If
        other jurisdictions do not allow exclusions or limitations as stated
        above, the mentioned exclusions and limitations apply to the maximum
        extent possible.
      </Paragraph>
      <SubTitle>Limitation of Liability</SubTitle>
      <Paragraph>
        To the maximum extent permitted by law, GistMD shall not be liable for
        any damages suffered by users or third parties, of any kind, including
        direct, indirect, special, punitive, incidental, or consequential
        damages (including, but not limited to, damages for loss of goodwill,
        profits, information, or other business and emotional distress),
        resulting from or arising out of these terms of use and/or the services
        and/or the content and/or the Educational Content, from your use or
        inability to use the services, from the results and implications of your
        use of the services and the accuracy and reliability of those results,
        or from any content or from the performance or non-performance of GistMD
        under these terms, and any other act or omission of GistMD for any other
        reason, even if GistMD has been advised of the possibility of such
        damages. Without limiting the generality of the foregoing and to the
        greatest extent permitted by law, the cumulative liability of GistMD for
        all damages arising from these terms shall be limited to a total of one
        hundred (100) USD.
      </Paragraph>
      <SubTitle>Indemnification</SubTitle>
      <Paragraph>
        The user agrees to defend, indemnify, and hold Newtown Gastroenterology
        and/or GistMD harmless against any claims, damages, losses, liabilities,
        responsibilities, expenses, and debts (including but not limited to
        legal fees) arising from: (a) their use of the services and/or the
        content and/or the Educational Content not in accordance with these
        terms of use; (b) any breach by the user of these terms of use; (c) the
        user's violation of any third party's rights, including but not limited
        to intellectual property rights or the right to privacy; and (d) any
        damage of any kind, whether direct, indirect, special, or consequential,
        caused to a third party related to their use of the services, content,
        or Educational Content. It is clarified that this obligation to
        indemnify will apply even after the termination of your engagement with
        the company. Without limiting the generality of the foregoing, we and/or
        GistMD reserve the exclusive right to handle our defense and control any
        matter otherwise subject to indemnification by the user, in a way that
        does not preclude the user's duty to fully cooperate with us and/or
        GistMD in managing such a process. The user confirms that they will not
        agree to any settlement in any matter subject to indemnification by them
        without first obtaining our written consent.
      </Paragraph>
      <SubTitle>GistMD</SubTitle>
      <Paragraph>
        GistMD is the creator and operator of the Platform in the relevant
        technological aspects, subject to its agreements with Newtown
        Gastroenterology . It is clarified that GistMD is not held by Newtown
        Gastroenterology , is not a subsidiary, nor is it an affiliate of
        Newtown Gastroenterology in Israel or globally, and is not responsible
        for the medical process and/or any product or service of Newtown
        Gastroenterology or their quality or availability. All Educational
        Content and/or questionnaire items are approved and provided by Newtown
        Gastroenterology . Without limiting the generality of the foregoing,
        GistMD is not responsible for any loss or damage related to: (a) the
        Educational Content and/or the questionnaire included in the Platform,
        as well as any other medical content that Newtown Gastroenterology
        and/or any third party interacting with Newtown Gastroenterology provide
        to users, whether through the Platform or otherwise, and the user's
        reliance on them; (b) the medical process and/or products or services of
        Newtown Gastroenterology and/or any third party; or (c) the reliability,
        completeness, or legality of any medical and/or personal information
        entered into the Platform by Newtown Gastroenterology , someone on its
        behalf, or by the user. Except as expressly stated here, GistMD shall
        not be liable for any damage or loss incurred by you and/or a third
        party and/or any other person as a result of or in connection with your
        relations with Newtown Gastroenterology and your use of the services
        and/or the content and/or the Educational Content. It is hereby
        clarified that GistMD should not be considered a party to any contract
        or agreement you enter into with Newtown Gastroenterology and/or any
        other third party; you hereby waive any claim against GistMD relating to
        the Educational Content and/or the questionnaire and/or the medical
        process and/or disease management and/or any matter in your relations
        with Newtown Gastroenterology and/or any third party, and hereby release
        GistMD and anyone on its behalf from any claim in this matter. All
        rights in the content are reserved to GistMD unless otherwise explicitly
        stated
      </Paragraph>
      <SubTitle>
        Changes to the Platform and Discontinuation of the Platform's Operation
      </SubTitle>
      <Paragraph>
        We reserve the right to make corrections, expansions, improvements,
        adjustments, cease overall operation, temporarily block, apply temporary
        or permanent restrictions, and any other changes to the Platform, its
        services, content, and educational materials at any time without prior
        notice, at our sole discretion (including, among others, due to any
        deliberate actions you take in connection with the Platform), in
        addition to any other remedy available to the company under any law. You
        agree that Newtown Gastroenterology and/or GistMD shall not be liable to
        you or any third party for any changes, interruptions of service, or any
        faults or errors that may occur in connection with such changes,
        including data loss or any other claimed damages related to them.
        Provisions of these terms that by their nature and content are intended
        to survive the termination of these terms in order to achieve the
        fundamental purposes of these terms, shall survive the termination of
        these terms.
      </Paragraph>
      <SubTitle>Links to Third-Party Sites</SubTitle>
      <Paragraph>
        Certain links on the Platform may allow users to leave the Platform and
        access websites or services that are not associated with Newtown
        Gastroenterology and/or GistMD. These linked sites and services are not
        under our control or that of GistMD, and a link to them is provided for
        your convenience only; inclusion of these links does not imply our
        endorsement of the material presented on them or a recommendation to
        purchase the products or services offered on these sites, nor do they
        signify any affiliation of ours or GistMD's with the operators of said
        sites. Newtown Gastroenterology and/or GistMD are not responsible for
        their availability, do not endorse them, and are not liable for any
        content, including but not limited to, advertisements, benefits,
        products, or other information appearing on or available through these
        sites or for any link contained in these sites. Additionally, we and/or
        our representatives and/or GistMD are not responsible for the privacy
        policy, security policy, or any other policy of these third-party sites
        and services. The user’s entry, use, and reliance on these links and
        their interactions with these third parties are solely at the user's own
        risk and responsibility. We reserve the right to remove any such link at
        any time. Furthermore, the user agrees and acknowledges that Newtown
        Gastroenterology and/or GistMD will not be liable for any damage caused,
        or purportedly caused, in connection with or as a result of the user's
        use of or reliance on content, services, products, or advertisements
        available on or through these third-party sites and services. Most of
        these linked sites and services provide legal documents, including terms
        of use and privacy policies, applicable to their use. We recommend that
        every user read these documents carefully before using these sites and
        services, among other reasons, to be informed about the type of
        information collected about them.
      </Paragraph>
      <SubTitle>Amendments to Terms</SubTitle>
      <Paragraph>
        It is hereby clarified that we are entitled, at our sole discretion, to
        modify these terms from time to time, including the privacy policy and
        any other policies incorporated therein. It is the user's responsibility
        to regularly review the Terms of Use Agreement and the Privacy Policy.
        In the event of a significant change, we will make reasonable efforts to
        post a clear notice on the Platform and/or send you an email (provided
        you have supplied us with an email address and have agreed to receive
        mailings from us) regarding the change. Such significant changes will
        come into effect seven (7) days after such notice is posted on our
        Platform or sent via email, whichever comes first. Otherwise, all other
        changes to these terms will take effect from the date specified at the
        top of these terms ("Last Updated"), and your continued use of the
        Platform thereafter constitutes agreement to these changes. In cases
        where the terms need to be amended to comply with any legal
        requirements, such amendments may take immediate effect or as required
        by law and without any prior notice.
      </Paragraph>
      <SubTitle>General</SubTitle>
      <Paragraph>
        (a) All claims related to the services will be governed by the laws of
        the State of Israel, interpreted in accordance with these laws, without
        giving effect to any principles of conflicts of law. (b) Any dispute
        arising from or related to your use of the services will be subject to
        the exclusive jurisdiction and venue of the competent courts in the
        State of Israel. You hereby agree to the exclusive jurisdiction and
        venue of these courts and waive any jurisdictional, venue, or
        inconvenient forum objections to such courts. (c) These terms do not
        create, and shall not be interpreted to create, any partnership, joint
        venture, employer-employee, agency, or franchisor-franchisee
        relationship between the parties, including GistMD. (d) No waiver by any
        party, including GistMD, of any breach or default hereunder will be
        deemed to be a waiver of any preceding or subsequent breach or default.
        (e) Any section headings within these terms are for convenience only and
        shall not govern the meaning or interpretation of any provision of these
        terms. (f) You agree and acknowledge that any cause of action arising
        out of or related to the services must commence within one (1) year
        after the cause of action accrues. Otherwise, such cause of action is
        permanently barred. (g) If any provision of these terms is found by a
        competent authority to be invalid, void, or unenforceable, such
        provision shall be deemed severable from these terms and shall not
        affect the validity and enforceability of any remaining provisions. (h)
        You may not assign or transfer these terms (including all rights and
        obligations under them) without our prior written consent, and any
        attempt to do so in violation of the foregoing shall be null and void.
        We and/or GistMD may assign or transfer these terms without restriction
        and without notice. (i) Any amendment to these terms shall not be
        binding unless in writing and signed by us and by GistMD. (j) The
        parties agree that all correspondence related to these terms shall be in
        writing (either electronic mail or regular mail) and in English
      </Paragraph>
      <SubTitle>
        For information, questions or notification of errors, please contact:{" "}
      </SubTitle>
      <Paragraph>
        If you have any questions (or comments) concerning the Terms or if you
        need any support regarding our Services, you are most welcome to send us
        an email and we will make an effort to reply within a reasonable{" "}
        <a href="mailto:support@gistmd.com" onClick={supportClick}>
          info@gistmd.com
        </a>{" "}
      </Paragraph>
    </Wrapper>
  );
}

export default LegalText;

const Wrapper = styled.div`
  padding-inline: 2.4rem;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

const SubTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;
const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;
const BoldParagraph = styled(Paragraph)`
  font-weight: 500;
`;
const Border = styled.div`
  border: 1px solid black;
  padding-inline: 0.5rem;
`;
