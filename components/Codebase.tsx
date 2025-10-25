import React from 'react';
import { Button } from './ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

const Codebase: React.FC = () => {
    const codeString = `import React from 'react';
import { Button } from './ui/button';

export default function MyComponent() {
  return <Button>Click me</Button>;
}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeString).catch(err => console.error('Failed to copy text: ', err));
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Example Code</CardTitle>
                <Button variant="ghost" size="icon" onClick={copyToClipboard} aria-label="Copy code">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                </Button>
            </CardHeader>
            <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm text-muted-foreground">
                        {codeString}
                    </code>
                </pre>
            </CardContent>
        </Card>
    );
};

export default Codebase;
