'use client';

import { useHookstate } from '@hookstate/core';
import Image from 'next/image';
// import styles from './Home.module.css';
import { useState } from 'react';

import { useSuppDataQuery } from '@/generated/graphql';

import { Form } from './components/form';
import { fetchData } from './utility/http-utils';
import { validationFormData } from './utility/validations-utils'
import { ErrorTextFileds, FormDataSetter } from './types';

// eslint-disable-next-line import/no-default-export
export default function Home() {
  const [data, setPopUpWindowData] = useState<JSX.Element>();
  const [error, setPopUpWindowError] = useState<JSX.Element>();

  const supp = useSuppDataQuery();


  const setFormData = useHookstate<FormDataSetter>({
    name: undefined,
    nameNew: undefined,
    likes: undefined,
    photos: undefined,
    subs: undefined,
    operation: "",
  });

  const errorsForm = useHookstate<ErrorTextFileds>({
    errOperation: undefined,
    errLikes: undefined,
    errNameNew: undefined,
    errName: undefined,
    errPhotos: undefined,
    errSubs: undefined
  })

  const handleSubmition = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validationFormData({ name: setFormData.name.get(), nameNew: setFormData.nameNew.get(), subs: setFormData.subs.get(), operation: setFormData.operation.get(), photos: setFormData.photos.get(), likes: setFormData.likes.get() })
    const notValid = validation.errLikes || validation.errName || validation.errNameNew || validation.errOperation || validation.errPhotos || validation.errSubs
    if (notValid) {
      setPopUpWindowError(<div>Bad input, data has no allowed form (invalid) or not provided</div>);
      errorsForm.set(validation)
    } else {
      if (
        ['DELETE', 'CREATE', 'GET', 'UPDATE'].includes(
          setFormData.operation.get() ?? '',
        )
      ) {
        setPopUpWindowError(undefined);
        const updatedData = await fetchData(
          setFormData.operation.get() as 'DELETE' | 'CREATE' | 'GET' | 'UPDATE',
          {
            name: setFormData.name.get(),
            nameNew: setFormData.nameNew.get(),
            likes: setFormData.likes.get(),
            photos: setFormData.photos.get(),
            subscribers: setFormData.subs.get(),
          },
        );
        setPopUpWindowData(updatedData);
      } else {
        setPopUpWindowError(<div>Select only from allowed operations</div>);
      }
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <main>
        <div
          style={{
            maxWidth: '400px',
            border: '5px solid #D7E8F6',
            borderRadius: '5px',
            padding: '15px',
            background: '#F3F4E7',
          }}
        >
          {error || data}
          <Form
            stateFormData={setFormData}
            submitFunc={handleSubmition}
            statePopUpWindowData={setPopUpWindowData}
            statePopUpWindowErr={setPopUpWindowError}
            stateErrs={errorsForm}
          />
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
