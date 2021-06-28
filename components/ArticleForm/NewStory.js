import React, { Fragment, useRef, useState } from 'react';
import mediumDraftExporter from 'medium-draft/lib/exporter';
import mediumDraftImporter from 'medium-draft/lib/importer';
import { useRouter } from 'next/router';
import { convertToRaw } from 'draft-js';
import ErrorModal from '../Ui/ErrorModal';
import axios from 'axios';
import dynamic from 'next/dynamic';
const Editor = dynamic(
  () => {
    return import('medium-draft').then((data) => data.Editor);
  },
  { ssr: false }
);
import { createEditorState, BLOCK_BUTTONS } from 'medium-draft';

import 'medium-draft/lib/index.css';

const blockButtons = [
  {
    label: 'H1',
    style: 'header-one',
    icon: 'header',
    description: 'Heading 1',
  },
  {
    label: 'H2',
    style: 'header-two',
    icon: 'header',
    description: 'Heading 2',
  },
].concat(BLOCK_BUTTONS);
let ServerArr;

function NewStory({ form }) {
  const route = useRouter();
  const refsEditor = useRef();
  const [editorState, setData] = useState(createEditorState());
  const [showErr, setShowErr] = useState('');

  const onChange = (editorState) => {
    setData(editorState);
    const renderedHTML = mediumDraftExporter(editorState.getCurrentContent());
    const data = convertToRaw(mediumDraftImporter(renderedHTML));

    ServerArr = data.blocks;
  };

  const submitHandler = async () => {
    const arr = JSON.stringify(ServerArr);

    let obj = form();
    const articleObj = {
      ...obj,
      story: arr,
    };
    const { title, duration, capture } = obj;
    const { story } = articleObj;

    if (!title || !duration || !capture || story.length === 0) {
      setShowErr('Iltimos bosh orinlarni barchasini toldiring');
      return;
    }

    await axios.post(
      `https://mediumblogdummy.herokuapp.com/api/articles`,
      articleObj
    );

    route.push('/main');
  };

  const closeModal = () => {
    setShowErr('');
  };

  return (
    <Fragment>
      {showErr && <ErrorModal msg={showErr} closeModal={closeModal} />}
      <h1 className='font-extrabold text-lg ml-14 mt-2'>Maqolani Yozish</h1>
      <div className='ml-10 p-2'>
        <Editor
          ref={refsEditor}
          blockButtons={blockButtons}
          editorState={editorState}
          onChange={onChange}
        />
        <div className='flex justify-self-end'>
          <button
            type='button'
            onClick={submitHandler}
            className='bg-green-500 border-0 rounded-md px-5 py-2 text-white focus:outline-none'>
            Chop etish
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default NewStory;
