export default function ConstWrap({ children, variable = 'variable' }: { children: React.ReactNode, variable: string }) {

    return (
        <div className='space-y-2'>
            <div className='font-code text-sm'>
                <span className='text-[#aaaaaa]'>const</span> <span className='text-secondary'>{variable}</span> <span className='text-[#aaaaaa]'>=</span> <span className='text-primary'>{'{'}</span>
            </div>
            <div className='ml-4'>
                {children}
            </div>
            <div className='font-code text-sm text-primary'>
                {'}'}
            </div>
        </div>
    )
}