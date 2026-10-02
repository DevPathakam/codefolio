'use client';

import { SkillMetadata } from '@/types/portfolio';
import { allExpanded, JsonView } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

const jsonViewStyles = {
  container: 'metadata-container',
  stringValue: 'metadata-string-value',
  clickableLabel: 'metadata-label metadata-clickable-label',
  label: 'metadata-label',
  punctuation: 'metadata-punctuation',
  collapseIcon: '_1LId0 metadata-expand-collapse-icon', // "_1LId0" needed due to bug | lack of availability of style props in JsonView for collapseIcon visibility
  expandIcon: '_1UmXx metadata-expand-collapse-icon', // "_1UmXx" needed due to bug | lack of availability of style props in JsonView for expandIcon visibility
};

interface MetaDataProps {
  metadata: SkillMetadata;
}
export const MetaData = ({ metadata }: MetaDataProps) => {
  return (
    <JsonView
      data={{ metadata }}
      shouldExpandNode={allExpanded}
      clickToExpandNode={true}
      style={jsonViewStyles}
    />
  );
};
