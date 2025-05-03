import React, { useEffect } from "react";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerStyle = {
    padding: "2rem",
    fontFamily: "sans-serif",
    lineHeight: "1.6",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "2rem",
  };

  const sectionTitleStyle = {
    fontWeight: "bold",
    marginTop: "1.5rem",
    display: "block",
  };

  return (
    <div style={{ background: "#f9f9f9", minHeight: "100vh" }}>
      <div style={containerStyle}>
        <div style={headingStyle as any}>
          <h1 style={{ color: "#000" }}>Privacy Policies</h1>
        </div>

        <p>
          This Privacy Policy describes how <strong>Federation of Entrepreneurship</strong> collects, uses,
          stores, and protects the personal information of its members. Please
          read this policy carefully to understand our practices regarding your
          personal data.
        </p>

        <Section
          title="1. Information We Collect:"
          items={[
            "a. Personal Information: We may collect personal information, such as your name, contact details (email address, phone number), and college ID, when you join Federation of Entrepreneurship.",
            "b. Non-Personal Information: We may also collect non-personal information, such as demographic data and preferences, to better understand our members and improve our services.",
          ]}
          sectionTitleStyle={sectionTitleStyle}
        />

        <Section
          title="2. Collection and Use of Information:"
          items={[
            "a. We collect personal information to maintain a membership database, communicate with members, and organize society activities effectively.",
            "b. We may use your email address or phone number to send updates, event invitations, newsletters, and other society-related communications.",
            "c. Non-personal information may be used for statistical analysis, research, and improving our services.",
          ]}
          sectionTitleStyle={sectionTitleStyle}
        />

        <Section
          title="3. Information Sharing and Disclosure:"
          items={[
            "a. We may share your personal information with trusted third parties who assist us in organizing events, managing communications, or providing necessary services to Federation of Entrepreneurship. These third parties are bound by confidentiality agreements and are not permitted to use your personal information for any other purpose.",
            "b. We may disclose your personal information if required to do so by law or if we believe that such disclosure is necessary to protect our rights, comply with legal obligations, or safeguard the safety of our members.",
          ]}
          sectionTitleStyle={sectionTitleStyle}
        />

        <Section
          title="4. Data Security:"
          items={[
            "a. We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.",
            "b. However, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security.",
          ]}
          sectionTitleStyle={sectionTitleStyle}
        />

        <Section
          title="5. Data Retention:"
          items={[
            "a. We retain personal information only as long as necessary for the purposes collected and to comply with legal requirements.",
            "b. To request deletion of your personal data, please contact us using the information below.",
          ]}
          sectionTitleStyle={sectionTitleStyle}
        />

        <Section
          title="6. Your Rights:"
          items={[
            "a. You have the right to access, update, and correct your personal information. Contact us to exercise these rights.",
            "b. You may unsubscribe from our communications or opt out of certain data collection activities by following instructions provided or contacting us directly.",
          ]}
          sectionTitleStyle={sectionTitleStyle}
        />

        <Section
          title="7. Third-Party Links:"
          items={[
            "Our website or communications may contain links to third-party websites or services. We are not responsible for their privacy practices. Please review their policies before providing any personal data.",
          ]}
          sectionTitleStyle={sectionTitleStyle}
        />

        <Section
          title="8. Changes to the Privacy Policy:"
          items={[
            "We may update this Privacy Policy periodically. Changes are effective upon posting. Please review regularly.",
          ]}
          sectionTitleStyle={sectionTitleStyle}
        />

        <Section
          title="9. Contact Us:"
          items={[
            <>
              If you have any questions or requests regarding this Privacy Policy,
              contact us at <strong><u>fedkiit@gmail.com</u></strong>.
            </>,
          ]}
          sectionTitleStyle={sectionTitleStyle}
        />
      </div>
    </div>
  );
}

function Section({ title, items, sectionTitleStyle }) {
  return (
    <p>
      <span style={sectionTitleStyle}>{title}</span>
      {items.map((item, idx) => (
        <span key={idx}>
          {item}
          <br />
        </span>
      ))}
    </p>
  );
}

export default PrivacyPolicy;
