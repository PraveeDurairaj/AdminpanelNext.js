import React from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { modalPopup } from '@/helper/type';

const ModalPopup = ({ title, buttonText, content }: modalPopup) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {buttonText && <Button>{buttonText}</Button>}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className='p-[20px]'>
                    {content}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ModalPopup


