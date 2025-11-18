'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog';
import { Download, Eye } from 'lucide-react';
import { useState } from 'react';

export type MediaItem = {
  id: string;
  url: string;
  mediaType?: {
    id: string;
    name: string;
  } | null;
};

export type MediaDropdownProps = {
  media: MediaItem[];
};

export const MediaDropdown = ({ media }: MediaDropdownProps) => {
  const [previewMedia, setPreviewMedia] = useState<{url: string, name: string} | null>(null);

  if (!media || media.length === 0) {
    return null;
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <Eye className="mr-2 h-4 w-4" />
            Media
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Media Preview</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {media.map((mediaItem) => (
            <DropdownMenuItem 
              key={mediaItem.id}
              onClick={() => setPreviewMedia({
                url: mediaItem.url, 
                name: mediaItem.mediaType?.name || 'Media File'
              })}
            >
              <Eye className="mr-2 h-4 w-4" />
              {mediaItem.mediaType?.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Dialog open={!!previewMedia} onOpenChange={() => setPreviewMedia(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{previewMedia?.name}</DialogTitle>
            <DialogDescription>
              Preview and download media file
            </DialogDescription>
          </DialogHeader>
          {previewMedia && (
            <div className="flex justify-center">
              <img 
                src={previewMedia.url} 
                alt={previewMedia.name}
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setPreviewMedia(null)}>
              Close
            </Button>
            <a 
              href={previewMedia?.url} 
              download 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};