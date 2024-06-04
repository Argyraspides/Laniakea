
import './Button.css'

type ButtonProps<T> = {
    label: string;
    onClick: (data: T) => void;
};

function Button<T>({ label, onClick }: ButtonProps<T>) {
    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
        onClick({} as T);
    };

    return (
        <button className='button-generic' onClick={handleClick} type="submit">
            {label}
        </button>
    );
}

export default Button;