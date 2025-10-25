
import React from 'react';
import Codebase from '../components/Codebase';

const CodebasePage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Codebase Block</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          A beautifully formatted component for displaying code snippets.
        </p>
      </div>
      <Codebase />
    </div>
  );
};

export default CodebasePage;
