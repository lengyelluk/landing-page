import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

/*
<svg
        className="text-primary-500 stroke-current mr-1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <rect x="3" y="12" width="6" height="8" rx="1" />
        <rect x="9" y="8" width="6" height="12" rx="1" />
        <rect x="15" y="4" width="6" height="16" rx="1" />
        <path d="M4 20h14" />
      </svg>*/
      

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '150' : '35';
  const height = props.xl ? '100' : '35';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <svg width={size} height={height} viewBox="0 0 200 200">
      <path fill="none" stroke="#4AA8D5" strokeWidth="12" d="M100,100 C200,0 200,200 100,100 C0,0 0,200 100,100z" />
</svg>
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
