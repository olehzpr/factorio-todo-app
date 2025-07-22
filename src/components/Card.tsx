import type {ReactNode} from "react";

interface Props {
    label: string;
    children: ReactNode;
    bottomText: string;
}

function Card({label, children, bottomText}: Props) {
    return (
        <div className='flex flex-col justify-center items-center bg-[#313031] border-2 border-[#212021] border-t-[#717071]'>
            <h3 className='font-medium text-[#ffe6c0] self-start'>{label}</h3>
            <div className='bg-[#414040] min-h-32 w-full border-2 border-[#212021] border-b-[#717071]'>
                {children}
            </div>
            <div className='flex flex-col justify-center items-center w-full bg-[#313031] border-2 border-[#212021] border-b-[#717071]'>
                <h3 className='text-white place-self-end'>{bottomText}</h3>
            </div>
        </div>
    );
}

export default Card;