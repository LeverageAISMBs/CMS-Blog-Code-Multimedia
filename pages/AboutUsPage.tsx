
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const AboutUsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Kibo Inc.</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
          We are dedicated to building innovative solutions for the modern web.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our mission is to empower developers and content creators with tools that are powerful, intuitive, and beautiful. We believe in the power of elegant simplicity to solve complex problems, enabling our users to focus on what matters most: creating amazing digital experiences.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We envision a future where the line between content management and content creation disappears. Our goal is to provide a seamless workflow that integrates asset management, collaborative editing, and multi-platform publishing into a single, cohesive ecosystem that anticipates and adapts to the needs of its users.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUsPage;
