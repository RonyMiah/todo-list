import { BlockNoteView, useBlockNote } from '@blocknote/react';
import '@blocknote/core/style.css';
import propTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
export default function Editor({ initialContent, setContent }) {
  const editor = useBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    onEditorContentChange: (editor) => {
      const blocks = editor.topLevelBlocks;

      console.log('Content was changed : ', blocks);
    },
  });
  return <BlockNoteView editor={editor} theme={'light'} />;
}

Editor.propTypes = {
  initialContent: propTypes.object,
  setContent: propTypes.func,
};
