import React from 'react';
import ImageCrop from '../components/ImageCrop';
import Editor from '../components/Editor';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const EditorPage: React.FC = () => {
  return (
    <div className="space-y-8">
       <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Multimedia Editor Suite</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Upload, edit, and describe your multimedia content all in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Upload & Edit Image</CardTitle>
            </CardHeader>
            <CardContent>
              <ImageCrop />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>2. Add Description</CardTitle>
            </CardHeader>
            <CardContent>
              <Editor />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;