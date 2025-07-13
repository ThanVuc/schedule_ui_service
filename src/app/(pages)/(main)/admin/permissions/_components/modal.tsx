"use client";
import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../../../../../../components/ui/dialog";
import { Button } from "../../../../../../components/ui/button";

type Props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  trigger: React.ReactNode;
  onSubmit?: () => void;
  submitText?: string;
  cancelText?: string;
  color?: string;
};

export default function Modal({
  title,
  description,
  children,
  trigger,
  onSubmit,
  submitText = "Xác nhận",
  cancelText = "Hủy",
  color = "text-gray-800",
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="!w-[100vw] mt-10 z-200 sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>
            <div className="text-center text-2xl sm:text-3xl">
              <h1 className={color}>{title}</h1>
            </div>
          </DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="py-4">{children}</div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">{cancelText}</Button>
          </DialogClose>
          {onSubmit && <Button onClick={onSubmit}>{submitText}</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
