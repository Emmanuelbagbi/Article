interface AnimatedButtonProps {
    id: string;
    title: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    containerClass?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ id, title, onClick, rightIcon, leftIcon, containerClass = "" }) => {
    return (
        <button
            id={id}
            className={`group relative w-fit cursor-pointer overflow-hidden ${containerClass}`}
            onClick={onClick}
        >
            <div className="flex items-center gap-2"> {/* flex row */}
                {leftIcon}

                <span className="relative inline-flex overflow-hidden">
                    <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                        {title}
                    </div>
                    <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                        {title}
                    </div>
                </span>

                {rightIcon}
            </div>
        </button>
    );
};

export default AnimatedButton;
