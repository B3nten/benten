export default function Button({ onClick, children, className }: { onClick?: () => void, children: React.ReactNode, className?: string }) {

    return (
        <button onClick={onClick} className={`group px-3 py-2 hover:bg-background-focus transition rounded-sm ${className}`}>
            <span className='group-hover:text-neutral-focus'>{children}</span>
            <span className='inline-block text-secondary group-hover:translate-x-1 transition'>{'('}</span>
            <span className='inline-block text-secondary group-hover:translate-x-2 transition'>{')'}</span>
        </button>
    )

}