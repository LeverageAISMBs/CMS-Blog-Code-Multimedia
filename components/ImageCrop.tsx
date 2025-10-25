import React, { type ChangeEvent, useState } from "react";
import {
  ImageCrop,
  ImageCropApply,
  ImageCropContent,
  ImageCropReset,
} from './kibo-ui/image-crop';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
    </svg>
);


const KiboImageCrop: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setCroppedImage(null);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setCroppedImage(null);
  };

  if (!selectedFile) {
    return (
      <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
        <Input
          accept="image/*"
          className="w-fit max-w-full"
          onChange={handleFileChange}
          type="file"
        />
      </div>
    );
  }

  if (croppedImage) {
    return (
      <div className="space-y-4">
        <img
          alt="Cropped"
          src={croppedImage}
          className="rounded-md object-contain"
          style={{ maxHeight: '256px', width: 'auto' }}
        />
        <Button onClick={handleReset} size="sm" type="button" variant="outline">
          Upload another image
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <ImageCrop
        file={selectedFile}
        onCrop={setCroppedImage}
        onReset={handleReset}
      >
        <ImageCropContent className="max-w-md" />
        <div className="flex items-center gap-2">
          <ImageCropApply />
          <ImageCropReset />
          <Button
            onClick={handleReset}
            size="icon"
            type="button"
            variant="ghost"
            aria-label="Cancel"
          >
            <XIcon className="size-4 h-4 w-4" />
          </Button>
        </div>
      </ImageCrop>
    </div>
  );
};

export default KiboImageCrop;