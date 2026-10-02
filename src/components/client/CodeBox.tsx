'use client';

import { usePortfolioStore } from '@/stores/portfolioStore';
import { Skill, SkillCategory } from '@/types/portfolio';
import { Editor, Monaco, OnMount } from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import 'react-json-view-lite/dist/index.css';

interface CodeBoxProps {
  category: SkillCategory;
  data: Omit<Skill, 'icon' | 'visible' | 'alias' | 'isFeatured'>[];
}
export const CodeBox = ({ category, data }: CodeBoxProps) => {
  const currentFileType = usePortfolioStore((state) => state.currentFile?.type);
  const setJsonFileLineCounts = usePortfolioStore(
    (state) => state.setJsonFileLineCounts,
  );

  const [lnCount, setLnCount] = useState<number | null>(null);

  const handleEditorWillMount = (monaco: Monaco) => {
    monaco.editor.defineTheme('my-custom-theme', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '#7f8c8d', fontStyle: 'italic' },
        { token: 'keyword', foreground: '#e74c3c', fontStyle: 'bold' },
        { token: 'string', foreground: '#2ecc71' },
      ],
      colors: {
        'editor.background': '#1a1d24',
        'editorCursor.foreground': '#f1c40f',
        'editor.lineHighlightBackground': '#122738',
      },
    });
  };

  const handleEditorOnMount: OnMount = (editor) => {
    const lineCount = editor.getModel()?.getLineCount();
    setLnCount(lineCount || null);
  };

  useEffect(() => {
    setJsonFileLineCounts(
      currentFileType && ['TSX', 'JSON'].includes(currentFileType)
        ? lnCount
        : null,
    );
  }, [currentFileType, lnCount, setJsonFileLineCounts]);

  return (
    <Editor
      className="h-96 md:h-full"
      width="100%"
      theme="my-custom-theme"
      options={{
        readOnly: true,
        wrappingStrategy: 'simple',
        wrappingIndent: 'same',
        fontSize: 15,
        fontFamily: 'JetBrains Mono, monospace',
      }}
      defaultLanguage="javascript"
      defaultValue={`const ${category} = ${JSON.stringify(data, null, 2)}`}
      beforeMount={handleEditorWillMount}
      onMount={handleEditorOnMount}
    />
  );
};
