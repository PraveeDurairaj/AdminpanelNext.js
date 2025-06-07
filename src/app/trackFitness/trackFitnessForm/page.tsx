'use client'
import React, { useEffect, useState } from 'react';
import { toast } from "sonner";
import Inputgroup from '@/components/InputGroup/Inputgroup';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { trackFitnessFormData } from '@/helper/type';
import SideMenuLayout from '@/layouts/SideMenuLayout';
import { useAddDos } from '@/hook/useAddData';


const TrackFitnessForm = () => {
    const [loading, setLoading] = useState<Boolean>(true)
    const [trackFitnessdata, setTrackFitnessdata] = useState<trackFitnessFormData>({ day: null, consumedCal: null, weight: null });
    const { added, setAdded, addData } = useAddDos('trackFitness')
    let isMaintanceCal = 0;
    let isBacklog = 0;

    useEffect(() => {
        setLoading(false)
        if (added) {
            toast("Track fitness form submitted successfully!", {
                description: "Your data has been saved and processed",
            });
            setAdded(false)
        }

    }, [loading, added, setAdded])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTrackFitnessdata(prev => ({
            ...prev, [name]: value,
        }))
    }
    const handleSubmit = () => {
        if (trackFitnessdata?.consumedCal && trackFitnessdata?.day && trackFitnessdata?.weight) {
            if(isMaintanceCal >  trackFitnessdata?.consumedCal) {
                 isBacklog = isMaintanceCal - trackFitnessdata?.consumedCal
            }
            
            addData<trackFitnessFormData>({ ...trackFitnessdata, maintenanceCal: isMaintanceCal,backlogCal:isBacklog })
            setTrackFitnessdata(
                {
                    day: null,
                    consumedCal: null,
                    weight: null
                }
            )
        }

    }

    const handleCancel = () => {
        setTrackFitnessdata(
            {
                day: null,
                consumedCal: null,
                weight: null
            }
        )
    }
    if (trackFitnessdata?.weight) {
        isMaintanceCal = Math.round(trackFitnessdata?.weight * 2.2 * 14 + 500)
    }

    const renderForm = () => {
        return (
            <>
                <div className='flex justify-end mb-[20px]'>
                    <a className='link-text text-[18px]' href='/trackFitness'>Go back</a>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Inputgroup
                        id="day"
                        type="number"
                        name='day'
                        value={trackFitnessdata?.day}
                        onChangeFunction={handleChange}
                        placeholder="Enter day count"
                        label='Day'
                        required
                    />
                    <Inputgroup
                        id="consumedCal"
                        type="number"
                        name='consumedCal'
                        value={trackFitnessdata?.consumedCal}
                        onChangeFunction={handleChange}
                        placeholder="Enter consumed calories"
                        label='Consumed calories'
                    />
                    <Inputgroup
                        id="weight"
                        type="number"
                        name='weight'
                        value={trackFitnessdata?.weight}
                        onChangeFunction={handleChange}
                        placeholder="Enter weight"
                        label='Weight'
                    />
                    <Inputgroup
                        id="maintenanceCal"
                        type="number"
                        name='maintenanceCal'
                        value={isMaintanceCal}
                        placeholder="Enter maintenance calories"
                        label='Maintenance calories'
                        readOnly={true}
                        note={'Maintenance Calories = weight * 2.2 * 14 + 500. this is auto calculated based on your weight.'}
                    />
                </div>
                <div className='flex justify-end gap-3.5 pt-3 border-t border-[var(--border-primary)] mt-6'>
                    <Button variant={'outline'} onClick={handleCancel}>cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
            </>
        )
    }
    const renderSkeleton = () => {
        return (
            <>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {[1, 2, 3, 4]?.map((data) => {
                        return (
                            <div key={data}>
                                <Skeleton className='w-[150px] h-[20px] rounded-[4px] mb-1.5' />
                                <Skeleton className='w-full h-[50px] rounded-[4px]' />
                            </div>
                        )
                    })}
                </div>
                <div className='flex justify-end gap-3.5 mt-6' >
                    <Skeleton className='w-[120px] h-[40px] rounded-[4px]' />
                    <Skeleton className='w-[120px] h-[40px] rounded-[4px]' />
                </div>
            </>


        )
    }

    return (
        <SideMenuLayout title='Track Fitness Form'>
            {!loading ? renderForm() : renderSkeleton()}
        </SideMenuLayout>
    )
}

export default TrackFitnessForm
