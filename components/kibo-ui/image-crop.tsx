import React, { createContext, useContext, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

interface ImageCropContextType {
  imageSrc: string | null;
  handleApply: () => void;
  handleReset: () => void;
}

const ImageCropContext = createContext<ImageCropContextType | null>(null);

const useImageCrop = () => {
  const context = useContext(ImageCropContext);
  if (!context) {
    throw new Error('useImageCrop must be used within an ImageCrop provider');
  }
  return context;
};

interface ImageCropProps {
  file: File;
  onCrop: (image: string) => void;
  onReset: () => void;
  children: React.ReactNode;
}

export const ImageCrop: React.FC<ImageCropProps> = ({ file, onCrop, onReset, children }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setImageSrc(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const handleApply = () => {
    if (imageSrc) {
        // In a real implementation, this would be the cropped image data.
        // For this mock, we'll return the original image URL.
        onCrop(imageSrc);
    }
  };

  return (
    <ImageCropContext.Provider value={{ imageSrc, handleApply, handleReset: onReset }}>
      {children}
    </ImageCropContext.Provider>
  );
};

export const ImageCropContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  const { imageSrc } = useImageCrop();
  if (!imageSrc) return null;

  return (
    <div className={cn("relative w-full h-64", className)} {...props}>
      <img src={imageSrc} alt="Preview" className="object-contain w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="border-2 border-dashed border-white/70 w-3/4 h-3/4" />
      </div>
    </div>
  );
};

export const ImageCropApply: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { handleApply } = useImageCrop();
  return <Button onClick={handleApply} {...props}>Apply Crop</Button>;
};

export const ImageCropReset: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { handleReset } = useImageCrop();
  return <Button onClick={handleReset} variant="secondary" {...props}>Reset</Button>;
};
