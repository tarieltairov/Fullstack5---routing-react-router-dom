import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  btnText?: string;
}

export function BackButton({ btnText = 'Назад' }: BackButtonProps) {
  const redirect = useNavigate();

  return (
    <button onClick={() => redirect(-1)}>
      {'<='} {btnText}
    </button>
  );
}
