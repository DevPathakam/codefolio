import { SocialLinks } from '@/data/socialLinks';
import { FakeFileType } from '@/types/portfolio';

export const getEmail = () => SocialLinks.find((x) => x.name === 'email')?.text;

export const getFileIcon = (type: FakeFileType): string => {
  switch (type) {
    case 'HTML':
      return 'material-icon-theme:html';
    case 'JSON':
      return 'material-icon-theme:json';
    case 'Markdown':
      return 'material-icon-theme:markdown';
    case 'PDF':
      return 'material-icon-theme:pdf';
    case 'TSX':
      return 'devicon:react';
    default:
      return '';
  }
};

export const getFileExtension = (type: FakeFileType): string => {
  switch (type) {
    case 'HTML':
      return 'html';
    case 'JSON':
      return 'json';
    case 'Markdown':
      return 'md';
    case 'PDF':
      return 'pdf';
    case 'TSX':
      return 'tsx';
    default:
      return '';
  }
};