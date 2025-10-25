
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto prose prose-invert">
      <h1 className="text-4xl font-bold tracking-tighter">Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-6 mt-8">
        <section>
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Kibo Inc. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. We respect your privacy and are committed to protecting it through our compliance with this policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <p>
            We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, and in connection with other activities, services, features or resources we make available on our Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
          <p>
            We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways...
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@kibo.inc.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
