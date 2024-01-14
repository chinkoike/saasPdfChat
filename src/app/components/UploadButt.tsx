"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import Dropzone from "react-dropzone";
import { log } from "console";

const UploadDropzone = () => {
  return (
    //multiple false is mean allow only one file upload and onDrop it's checking is file was upload
    <Dropzone
      multiple={false}
      onDrop={(acceptedFiles) => {
        console.log(acceptedFiles);
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="border h-64 m-4 border-dashed border-gray-300 rounded-lg"
        >
          <div className="flex items-center justify-center w-full h-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                example
              </div>
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

const UploadButt = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={(v) => {
          if (!v) {
            setIsOpen(v);
          }
        }}
      >
        <DialogTrigger onClick={() => setIsOpen(true)} asChild>
          <Button>Upload PDF</Button>
        </DialogTrigger>
        <DialogContent>
          <UploadDropzone />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UploadButt;
