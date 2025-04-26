import { Skeleton } from "../ui/skeleton"

export const TableSkeleton = () => {
    return (
            <div className='rounded-[10px] w-full overflow-hidden'>
                <div className="bg-[var(--theme-bg)] flex gap-5 p-3">
                    {[1, 2, 3, 4, 5, 6].map((data) => <Skeleton className="min-w-[150px] h-[30px] grow" key={data} />)}
                </div>
                    {[1, 2, 3, 4].map((data) => <div key={data} className="hover:bg-muted/50 px-[12px] py-[16px] bg-white border-b
                     border-[var(--border-secondray)] transition-colors flex gap-5 last:border-b-[0]">
                        {[1, 2, 3, 4, 5, 6].map((data) => <Skeleton className="min-w-[150px] h-[30px] grow" key={data} />)}
                    </div>)}
            </div>
    )
}