import { useState, useEffect } from 'react';
import Inputgroup from '@/components/InputGroup/Inputgroup';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import { addTopicsdata } from '@/helper/type';
import { useAddDos } from '@/hook/useAddData';
type Props = {
    handlePopup: React.Dispatch<React.SetStateAction<boolean>>
}

export const AddTopicForm = ({ handlePopup }: Props) => {

    const { added, setAdded, addData } = useAddDos('learnings')
    const [topics, setTopics] = useState<addTopicsdata>({ topicTitle: null, topicDescription: null })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTopics(prev => ({
            ...prev, [name]: value,
        }))
    }

    const handleSubmit = () => {
        if (topics?.topicTitle && topics?.topicDescription) {
            addData<addTopicsdata>({ ...topics })
        }
        else {
            toast.error("Kindly fill out all fields", {
                description: "Title and description",
                position: 'top-right'
            });
        }
    }

    useEffect(() => {
        if (added) {
            toast.success("Learnings Topics form submitted successfully!", {
                description: "Your Topics has been saved",
                position: 'top-right'
            });
            setTopics({
                topicTitle: null, topicDescription: null
            })
            setAdded(false)
            handlePopup(false)
        }
    }, [added, setAdded])
    return (
        <div className='grid grid-cols-1  gap-4'>
            <Inputgroup
                id="topicTitle"
                type="text"
                name='topicTitle'
                value={topics?.topicTitle}
                onChangeFunction={handleChange}
                placeholder="Topic title"
                label='Topic title'
            />
            <Inputgroup
                id="topicDescription"
                type="text"
                name='topicDescription'
                value={topics?.topicDescription}
                onChangeFunction={handleChange}
                placeholder="Topic description"
                label='Topic description'
            />
            <div className='flex justify-end gap-3.5 pt-3 border-t border-[var(--border-primary)] mt-6'>
                <Button onClick={handleSubmit}>save</Button>
                <Button variant={'outline'} onClick={() => handlePopup(false)} >cancel</Button>
            </div>
        </div>
    )
}