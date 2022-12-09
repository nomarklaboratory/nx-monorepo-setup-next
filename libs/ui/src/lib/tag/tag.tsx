import clsx from 'clsx';
// import RankIcon from '@/icons/RankIcon';

const Tag = ({ chip = true, withIcon = true, ...props }) => {
  return (
    <div
      className={clsx(
        'inline-block flex-grow-0 whitespace-nowrap px-3 text-xs',
        { 'bg-gray-50 text-gray-600': props.color === 'gray' },
        { 'bg-[#00AEAC1A] text-[#009C9A]': props.color === 'green' },
        { 'bg-[#FC5EB21A] text-[#F84AA6]': props.color === 'pink' },
        { 'bg-[#F4A42A1A] text-[#F4A42A]': props.color === 'orange' },
        { 'bg-[#4164FB1A] text-[#6913D8]': props.color === 'blue' },
        { 'bg-[#F4F2FF] text-[#761CEC]': props.color === 'purple' },
        { 'bg-[#FFF2F2] text-[#D91919]': props.color === 'danger' },
        { 'bg-[#FFFAF2] text-[#D4840B]': props.color === 'warning' },
        { 'bg-[#FFF0D9] text-[#F4A42A]': props.color === 'orange--alt' },
        { 'bg-[#c4f7f6] text-[#009C9A]': props.color === 'green--alt' },
        { 'bg-[#E6EEFF] text-[#4164FB]': props.color === 'blue--alt' },
        { 'bg-gray-50 text-gray-600': props.color === 'gray--alt' },
        { 'bg-[#f4c8dc] text-[#F03B8B]': props.color === 'pink--alt' },
        { 'bg-neutral-10 text-neutral-70': props.color === 'gray-rank' },
        { 'bg-[#ECFFF9] text-[#009C9A]': props.color === 'green-rank' },
        { 'bg-[#FFDFF0] text-[#F84AA6]': props.color === 'pink-rank' },
        { 'bg-[#FFF0D9] text-[#F4A42A]': props.color === 'orange-rank' },
        { 'bg-[#E6EEFF] text-[#4164FB]': props.color === 'blue-rank' },
        {
          'mr-2 mb-2 rounded-[8px] border border-[#9EB8FF] bg-[#EEF3FF] text-[14px] font-semibold':
            props.type === 'list',
        },
        { 'rounded-full': chip },
        { 'py-[3px]': props.type === 'rank' },
        props.className
      )}
      style={props.style}
    >
      <div className="flex items-center justify-center space-x-[4px]">
        {props.type === 'rank' && withIcon ? (
          <div />
        ) : (
          // <RankIcon className={props?.rankIconClassName ?? ''} />
          props.icon
        )}
        <span
          className={clsx(props?.labelClassName, 'leading-[13px]', {
            'text-[14px]': props.type === 'rank',
            'text-[10px]': props.size === 'small',
          })}
        >
          {props.text}
        </span>
        {props.endIcon ?? null}
      </div>
    </div>
  );
};

Tag.defaultProps = {
  text: 'Not Available',
  icon: '',
  color: 'gray',
  className: '',
  endIcon: null,
};

export default Tag;
