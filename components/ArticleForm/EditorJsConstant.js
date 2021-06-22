import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
const EditorJs = dynamic(
  () => {
    return import('react-editor-js');
  },
  { ssr: false }
);

const Header = dynamic(
  () => {
    return import('@editorjs/header');
  },
  { ssr: false }
);

const Marker = dynamic(
  () => {
    return import('@editorjs/marker');
  },
  { ssr: false }
);
const SimpleImage = dynamic(
  () => {
    return import('@editorjs/simple-image');
  },
  { ssr: false }
);

const CheckList = dynamic(
  () => {
    return import('@editorjs/checklist');
  },
  { ssr: false }
);

const EDITOR_JS_TOOLS = {
  header: Header,
  marker: Marker,
  simpleImage: SimpleImage,
  checklist: CheckList,
};

const CustomEditor = () => {
  const editoRef = useRef();
  async function handleSave() {
    const savedData = await editoRef.current.save();
    console.log(savedData);
  }

  return (
    <div className='p-4'>
      <EditorJs
        holder='medium-container'
        instanceRef={(instance) => (editoRef.current = instance)}
        onChange={handleSave}
        // tools={EDITOR_JS_TOOLS}
      >
        <div id='medium-container' />
      </EditorJs>
    </div>
  );
};

export default CustomEditor;
