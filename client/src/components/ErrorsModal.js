import { Dialog, Transition } from '@headlessui/react';
import { set } from 'mongoose';
import { Fragment, useRef, useEffect, useState } from 'react';

const ErrorsModal = ({ errors }) => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef();

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setOpen(true);
    }
  }, [errors]); 

  return (
    <>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          initialFocus={cancelButtonRef}
          static
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-sm p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-yellow-500"
                >
                  Errors
                </Dialog.Title>
                <ol className="mt-2">
                  {errors
                    ? Object.values(errors).map((value) => (
                        <li key={value} className="text-yellow-400">- {value}</li>
                      ))
                    : null}
                </ol>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-800 bg-yellow-300 border border-transparent rounded-md hover:bg-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setOpen(false)}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default ErrorsModal;
